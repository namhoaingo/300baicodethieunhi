# eng-review-os

Solo side project: structured evidence and reviews for engineering performance (goals, notes, calibration-friendly export)—evolve in small MVPs.

## Run locally

```bash
cd eng-review-os
npm install
npm run db:push   # SQLite schema → data/app.db (creates data/ if missing)
npm run dev       # http://localhost:3000
```

Production build: `npm run build` then `npm run start`.

## Documentation

| Path | Purpose |
|------|---------|
| [`docs/requirements/`](docs/requirements/) | What to build, phases, non-goals |
| [`docs/logic/`](docs/logic/) | Domain concepts, flows, data shape |
| [`AGENTS.md`](AGENTS.md) | Short pointer for AI assistants (UI approval gate) |

## Quick links

- [Phase 0 scope (tiers A–D)](docs/requirements/phrase_detail_0.md)
- [Phase 1 PRP (Tier B)](docs/requirements/prp_phase_1.md)
- [Phase 1 UI spec — approve before UI code](docs/requirements/ui_phase_1_foundation.md)
- [Agent instructions (full)](docs/requirements/AGENT_INSTRUCTIONS.md)
- [Phased MVP](docs/requirements/phased-mvp.md)
- [Domain model (draft)](docs/logic/domain-model.md)
