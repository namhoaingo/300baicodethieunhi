import "server-only";

import { stubPlugin } from "./stub";
import type { IntegrationPlugin, PersonPayload, PluginContext } from "./types";

const plugins: IntegrationPlugin[] = [stubPlugin];

export function listPlugins(): IntegrationPlugin[] {
  return [...plugins];
}

export async function notifyPersonCreated(person: PersonPayload): Promise<void> {
  const ctx: PluginContext = { source: "api" };
  await Promise.all(
    plugins.map((p) => p.onPersonCreated?.(ctx, person) ?? Promise.resolve()),
  );
}

export async function notifyPersonUpdated(person: PersonPayload): Promise<void> {
  const ctx: PluginContext = { source: "api" };
  await Promise.all(
    plugins.map((p) => p.onPersonUpdated?.(ctx, person) ?? Promise.resolve()),
  );
}

export async function notifyPersonDeleted(personId: number): Promise<void> {
  const ctx: PluginContext = { source: "api" };
  await Promise.all(
    plugins.map((p) => p.onPersonDeleted?.(ctx, personId) ?? Promise.resolve()),
  );
}
