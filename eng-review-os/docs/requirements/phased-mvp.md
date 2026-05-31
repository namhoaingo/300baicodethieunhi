# Phased MVP (iterative)

Each phase should be **usable** before starting the next.

## Phase 0 — Problem anchor

**Requirements:** [`phrase_detail_0.md`](phrase_detail_0.md) — **Tier A** is documentation-only; UI and plugin baseline are **Tier B** (see that doc).

| Deliverable | Done when |
|-------------|-----------|
| Tier A complete | `phrase_detail_0.md` Tier A checklist + [`non-goals.md`](non-goals.md) aligned; no code required |

**Phase 1 PRP:** [`prp_phase_1.md`](prp_phase_1.md) — execution contract for Tier B (people, teams, persistence, plugins).

---

## Phases 1–9+ (implementation track)

| Phase | Deliverable |
|-------|-------------|
| 1 | People list (name, role, level); optional team, system to manage people and team |
| 2 | Review cycles + blank review per person per cycle |
| 3 | Goals per person per cycle (title, success criteria, status) |
| 4 | Manager notes per review; optional SPACE as section headings (no scores) |
| 5 | Evidence items (title, URL, optional tag) |
| 6 | Self-review form (wins, misses, collaboration, next cycle) |
| 7 | Export (Markdown or PDF) |
| 8 | Reminders (optional) |
| 9+ | Integrations only if needed; treat as suggested links, not rankings |

**Vertical slice to aim for early:** cycle + one full review (goals + notes + links + export).

### Tier mapping (execution order)

| Tier ([`phrase_detail_0.md`](phrase_detail_0.md)) | Phases (this file) | Notes |
|---------------------------------------------------|-------------------|--------|
| **B** — Foundation | **1** (+ plugin stub in code) | People/teams UI, persistence, extension points |
| **C** — Review slice | **2, 3, 4, 5, 7** | Cycles → goals → notes → evidence → export (vertical slice) |
| Optional | **6, 8, 9+** | Self-review, reminders, real integrations |

Typical build order inside Tier C: **2 → 3 → 4 → 5 → 7**, or ship a thin **7** (stub export) earlier if it helps testing.
