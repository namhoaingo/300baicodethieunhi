# Domain model (draft)

Refine as phases progress. **Phase 1** entities match [`src/db/schema.ts`](../../src/db/schema.ts).

## Phase 1 — implemented

### Team (squad)

| Field | Type | Notes |
|-------|------|--------|
| `id` | integer PK | Auto-increment |
| `name` | string | Required, **unique** |
| `createdAt` | timestamp | Set on insert |

### Person

| Field | Type | Notes |
|-------|------|--------|
| `id` | integer PK | Auto-increment |
| `name` | string | Required |
| `discipline` | string | e.g. Frontend, Backend, QE, BA, Other (see [`src/lib/constants.ts`](../../src/lib/constants.ts)) |
| `level` | string | e.g. Senior, Mid, Associate, Intern |
| `teamId` | integer FK → `teams.id`, nullable | **ON DELETE SET NULL** |
| `createdAt` | timestamp | Set on insert |

### Relationships (Phase 1)

- **Team** 1—N **Person** (optional membership).

---

## Later phases (not yet in DB)

- **ReviewCycle** — label (e.g. `2026 Q1`), date range optional.
- **Review** — one per (Person × ReviewCycle); holds goals, notes, evidence links, self-review, export snapshot optional.
- **Goal** — belongs to a Review; title, success criteria, status.
- **EvidenceItem** — belongs to a Review; title, URL, optional tag (`incident`, `design`, `release`, …).
- **NoteEntry** — optional: timestamped manager notes vs single rich-text field (choose one in implementation).

### Relationships (future)

- ReviewCycle 1—N Review  
- Review 1—N Goal  
- Review 1—N EvidenceItem  

## Principles

- Evidence is **narrative + links**, not automated ranking.
- SPACE can appear as **section headings** in notes/self-review, not numeric KPIs.
