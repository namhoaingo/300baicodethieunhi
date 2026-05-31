# Phase 0 — Scope (detailed)

This document splits the product into **manageable tiers** so “Phase 0” stays a **documentation gate**, and **implementation** is tracked in **separate milestones** (not all at once).

---

## 1. Goal & principles

- Lock a **small, honest scope** so MVPs stay iterative.
- Avoid becoming a **surveillance dashboard** or a full **HRIS** replacement.
- **Evidence over activity:** narrative + links; optional SPACE as **section headings**, not auto scores.
- **Fairness:** compare to **level expectations** and **documented examples**, not leaderboards.

---

## 2. Who it’s for

| Audience | When |
|----------|------|
| **Engineering manager** (you) | First: run cycles, goals, notes, evidence, export for calibration. |
| **Direct reports** | Later: optional self-review and read-only views as needed. |
| **Squad / leadership** | Much later: aggregate squad views—do not block MVP. |

---

## 3. North-star workflow (unchanged)

1. **Time-boxed review cycle** (e.g. quarterly).
2. Per person: **goals**, **manager notes**, **evidence links** (tickets, PRs, docs—no auto scores as the main signal).
3. **Structured summary** for performance discussion and calibration (export / copy-paste).

---

## 4. Manageable scope tiers

Work **top to bottom**. Do not start a lower tier until the one above is **done enough to use**.

### Tier A — Phase 0 (documentation only)

**Purpose:** Agree what we build before code. **No UI, no DB, no plugins.**

| Deliverable | Done when |
|-------------|-----------|
| Scope & principles | This doc + [`non-goals.md`](non-goals.md) reflect intent and boundaries. |
| First vertical slice named | Same slice as in [`phased-mvp.md`](phased-mvp.md): *cycle + one full review with goals + notes + links + export*. |
| Stakeholder acceptance | You (and policy/comms if needed) are comfortable with fairness and data handling—**your call**. |

**Explicitly out of scope for Tier A:** authentication, persistence, UI, integrations, plugin code, MBTI, squad metrics dashboards.

---

### Tier B — Foundation app (first code)

**Purpose:** A runnable app shell: **people & teams** in the UI, **persistent model**, room to grow.

| Deliverable | Done when |
|-------------|-----------|
| People & roles | CRUD (or equivalent) for people with **role/discipline** and **level**; assign to **team/squad** as needed. |
| Persistence | Data survives restarts (DB or acceptable local store for solo dev—decide in implementation). |
| Plugin **baseline** | **Architecture only:** clear boundaries (e.g. ports/adapters or plugin interfaces) so **later** third-party connectors are add-ons, not rewrites. **No requirement** to ship a real Jira/Git integration in this tier—only a **stub or one trivial plugin** to prove the shape. |

**Still out of scope for Tier B:** automated individual productivity scores as the primary signal; nine personal SPACE dashboards; full HRIS sync.

---

### Tier C — Review OS core (vertical slice)

**Purpose:** Deliver the **first vertical slice** end-to-end.

| Deliverable | Done when |
|-------------|-----------|
| Cycles | Create/review **review cycles**. |
| Per person per cycle | **Goals**, **manager notes** (optional SPACE sections), **evidence items** (title, URL, tags). |
| Export | Markdown or PDF (or copy-paste block) for calibration. |

**Optional next:** self-review forms, reminders, then real **integration plugins** (suggested links, not rankings).

---

### Tier D — Broader product (later)

Only after Tier C is stable:

- Squad-level views / team metrics (careful: **team** health, not individual stack-ranking).
- **1:1** notes and cadence (may stay separate tool at first).
- **MBTI** or similar: treat as **optional profile field** + ethics/privacy review—**not** a performance score.
- Deeper third-party plugins (Jira, HRIS) on top of Tier B plugin boundaries.

---

## 5. Mapping your success criteria to tiers

| What you asked for | Tier |
|--------------------|------|
| “Create UI to manage people and roles within teams” | **Tier B** |
| “Plugin-based architecture baseline for future third parties” | **Tier B** (interfaces + minimal proof; real connectors **Tier D** unless trivial) |

Phase 0 **documentation** is **Tier A** only. UI + plugins land in **Tier B+**, not in Tier A.

---

## 6. Success checklist (use this to mark progress)

**Tier A (Phase 0 docs)**

- [x] `non-goals.md` updated for anything you care about (e.g. MBTI, squad metrics) as *draft vs v1*.
- [x] First vertical slice is explicit in [`phased-mvp.md`](phased-mvp.md) (incl. tier ↔ phase mapping).
- [x] You accept Tier A as “ready to code.” (owner sign-off)

**Tier B (foundation)**

- [ ] People + teams manageable in UI with persistence.
- [ ] Plugin/extension points defined; stub proves extension path.

**Tier C (review slice)**

- [ ] Cycle + goals + notes + evidence + export for at least one real review path.

---

## 7. References

- [`non-goals.md`](non-goals.md)
- [`phased-mvp.md`](phased-mvp.md)
- [`../logic/domain-model.md`](../logic/domain-model.md)
