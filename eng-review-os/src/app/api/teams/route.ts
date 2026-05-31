import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db, schema } from "@/db";
import { teamCreateSchema } from "@/lib/validation";

export async function GET() {
  const rows = await db
    .select()
    .from(schema.teams)
    .orderBy(desc(schema.teams.createdAt));
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = teamCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const now = new Date();
  try {
    const [row] = await db
      .insert(schema.teams)
      .values({ name: parsed.data.name.trim(), createdAt: now })
      .returning();
    return NextResponse.json(row, { status: 201 });
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
