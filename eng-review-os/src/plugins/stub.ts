import type { IntegrationPlugin, PersonPayload, PluginContext } from "./types";

const noop = async () => {};

/** No-op plugin to validate the registration pipeline. */
export const stubPlugin: IntegrationPlugin = {
  id: "stub",
  displayName: "Stub integration",
  version: "0.1.0",
  onPersonCreated: async (_ctx: PluginContext, person: PersonPayload) => {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console -- intentional stub trace
      console.debug("[stub-plugin] person created", person.id, person.name);
    }
  },
  onPersonUpdated: noop,
  onPersonDeleted: noop,
};
