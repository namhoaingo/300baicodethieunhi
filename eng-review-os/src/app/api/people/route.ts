import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db, schema } from "@/db";
import { personCreateSchema } from "@/lib/validation";
import { notifyPersonCreated } from "@/plugins/registry";

export async function GET() {
  const rows = await db
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
    .orderBy(desc(schema.people.createdAt));

  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = personCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const { name, discipline, level, teamId } = parsed.data;
  const now = new Date();

  if (teamId != null) {
    const [team] = await db
      .select()
      .from(schema.teams)
      .where(eq(schema.teams.id, teamId));
    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 400 });
    }
  }

  const [row] = await db
    .insert(schema.people)
    .values({
      name: name.trim(),
      discipline,
      level,
      teamId: teamId ?? null,
      createdAt: now,
    })
    .returning();

  await notifyPersonCreated({
    id: row.id,
    name: row.name,
    discipline: row.discipline,
    level: row.level,
    teamId: row.teamId,
  });

  return NextResponse.json(row, { status: 201 });
}
