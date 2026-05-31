# Instructions for AI coding agents (eng-review-os)

Follow these rules when working in this repository so **UI and workflow stay ahead of code**, per [prp_phase_1.md](prp_phase_1.md) and [phrase_detail_0.md](phrase_detail_0.md).

## Mandatory order

1. **Read** the relevant **requirements** ([`docs/requirements/`](.)) and, for user-visible work, the **approved UI specification** (see below).
2. **Do not** create or modify **application UI code** (`src/app/`, `src/components/`, styling that affects user-visible pages) when:
   - a UI spec exists but is **not yet approved** by the product owner, or
   - the feature has **no UI spec** and the change is more than trivial copy or a bugfix clearly unrelated to layout/workflow.

3. **Do** create or update **markdown** in `docs/requirements/` first when the user asks for new screens or flows: wireframes, screen inventory, approval checkbox — then ask the human to approve.

4. **Exceptions (code allowed without new UI doc):**
   - Pure **API**, database, or **server-only** logic that does not change rendered HTML/CSS behavior.
   - **Tests** and tooling.
   - **Explicit waiver** from the owner in the task (e.g. “approved to implement §4 Teams as written in ui_phase_1_foundation.md”).

## Phase 1 foundation UI

- **Specification:** [`ui_phase_1_foundation.md`](ui_phase_1_foundation.md)
- **Rule:** If `Status` is **Awaiting approval**, treat the spec as **not approved** until the owner checks the approval box and fills name/date at the top of that file.

## When implementing after approval

- Match the **wireframes and patterns** in the UI spec; if the implementation must diverge, **update the UI spec** in the same change (or follow-up) and note why.
- Keep [prp_phase_1.md](prp_phase_1.md) **API and data** sections authoritative for contracts unless the PRP is updated.

## Suggested agent reply when UI is not approved

If asked to “build the Teams page” and the UI spec is not approved:

> The UI spec in `docs/requirements/ui_phase_1_foundation.md` is still awaiting owner approval. I can refine the spec or implement non-UI layers only. Please approve the spec (checkbox + date) or waive in writing, then I’ll implement.
