/**
 * Extension points for future third-party integrations (Jira, HRIS, etc.).
 * Phase 1 ships a stub only — real connectors plug in here later.
 */

export type PluginContext = {
  source: "api";
};

export type PersonPayload = {
  id: number;
  name: string;
  discipline: string;
  level: string;
  teamId: number | null;
};

export type IntegrationPlugin = {
  id: string;
  displayName: string;
  version: string;
  /** Called after a person is created (e.g. sync to external directory — noop for now). */
  onPersonCreated?: (ctx: PluginContext, person: PersonPayload) => Promise<void>;
  onPersonUpdated?: (ctx: PluginContext, person: PersonPayload) => Promise<void>;
  onPersonDeleted?: (ctx: PluginContext, personId: number) => Promise<void>;
};
