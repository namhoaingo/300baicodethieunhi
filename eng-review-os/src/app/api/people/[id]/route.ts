import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db, schema } from "@/db";
import { personUpdateSchema } from "@/lib/validation";
import {
  notifyPersonDeleted,
  notifyPersonUpdated,
} from "@/plugins/registry";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isInteger(num) || num < 1) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  const [row] = await db
    .select({
      id: schema.people.id,
      name: schema.people.name,
      discipline: schema.people.discipline,
      level: schema.people.level,
      teamId: schema.people.teamId,
      createdAt: schema.people.createdAt,
      teamName: schema.teams.name,
    })
    .from(schema.people)
    .leftJoin(schema.teams, eq(schema.people.teamId, schema.teams.id))
    .where(eq(schema.people.id, num));
  if (!row) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(row);
}

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isInteger(num) || num < 1) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = personUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.teamId !== undefined && parsed.data.teamId !== null) {
    const [team] = await db
      .select()
      .from(schema.teams)
      .where(eq(schema.teams.id, parsed.data.teamId));
    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 400 });
    }
  }

  const updates: Partial<typeof schema.people.$inferInsert> = {};
  if (parsed.data.name !== undefined) {
    updates.name = parsed.data.name.trim();
  }
  if (parsed.data.discipline !== undefined) {
    updates.discipline = parsed.data.discipline;
  }
  if (parsed.data.level !== undefined) {
    updates.level = parsed.data.level;
  }
  if (parsed.data.teamId !== undefined) {
    updates.teamId = parsed.data.teamId;
  }

  const [row] = await db
    .update(schema.people)
    .set(updates)
    .where(eq(schema.people.id, num))
    .returning();

  if (!row) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await notifyPersonUpdated({
    id: row.id,
    name: row.name,
    discipline: row.discipline,
    level: row.level,
    teamId: row.teamId,
  });

  return NextResponse.json(row);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isInteger(num) || num < 1) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const [existing] = await db
    .select()
    .from(schema.people)
    .where(eq(schema.people.id, num));
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await notifyPersonDeleted(num);

  await db.delete(schema.people).where(eq(schema.people.id, num));
  return NextResponse.json({ ok: true });
}
