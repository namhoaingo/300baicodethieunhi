import { NextResponse } from "next/server";

import { listPlugins } from "@/plugins/registry";

export async function GET() {
  const plugins = listPlugins().map((p) => ({
    id: p.id,
    displayName: p.displayName,
    version: p.version,
  }));
  return NextResponse.json(plugins);
}
