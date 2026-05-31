import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db, schema } from "@/db";
import { teamUpdateSchema } from "@/lib/validation";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isInteger(num) || num < 1) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  const [row] = await db
    .select()
    .from(schema.teams)
    .where(eq(schema.teams.id, num));
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
  const parsed = teamUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const updates: { name?: string } = {};
  if (parsed.data.name !== undefined) {
    updates.name = parsed.data.name.trim();
  }
  try {
    const [row] = await db
      .update(schema.teams)
      .set(updates)
      .where(eq(schema.teams.id, num))
      .returning();
    if (!row) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(row);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg.includes("UNIQUE")) {
      return NextResponse.json(
        { error: "A team with this name already exists" },
        { status: 409 },
      );
    }
    throw e;
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isInteger(num) || num < 1) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  const [deleted] = await db
    .delete(schema.teams)
    .where(eq(schema.teams.id, num))
    .returning();
  if (!deleted) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
