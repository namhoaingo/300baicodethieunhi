# Phase 1 — UI specification (foundation: Teams & People)

**Purpose:** Single source of truth for **layout, workflow, and interaction** before any new or changed **application code** is written for this scope. Aligns with [prp_phase_1.md](prp_phase_1.md) § SDLC preference.

| Field | Value |
|-------|--------|
| **Status** | **Awaiting approval** — do not treat as final until owner sets status to **Approved** below |
| **Scope** | Routes `/`, `/teams`, `/people`; no review cycles or goals in this doc |
| **Applies to** | New work and material UX changes; existing code should be brought in line after approval |

**Owner approval (fill in when ready):**

- [ ] I approve this UI specification for implementation.
- **Approved by:** _________________ **Date:** _________________

---

## 1. Design principles

- **Clarity over density:** EM is the only primary user; optimize for quick scanning and low error (wrong team, wrong level).
- **Calm, professional:** Dark neutral surfaces; one accent (blue) for primary actions and links; avoid gamification visuals.
- **Forgiving:** Destructive actions require confirmation; validation errors are inline or in a single alert region.
- **Fairness posture:** No leaderboards, scores, or “productivity” cues on these screens.

---

## 2. Global layout and navigation

### 2.1 Chrome

- **Header (fixed or sticky top):** Full width, subtle bottom border, slightly lighter than page background.
  - **Left:** Product name `eng-review-os` (links to `/`), semibold, no underline.
  - **Right of title:** Text links: `Teams`, `People` (same row, horizontal gap).
- **Main:** Max content width ~`64rem` centered, horizontal padding `1rem`, vertical padding `2rem`.
- **Background:** Dark base (`#0f1419`); **surface** panels (`#1a2332`); **border** (`#2d3a4d`); **text** (`#e7ecf3`); **muted** (`#8b9cb3`); **accent** (`#3b82f6`).

### 2.2 Navigation behavior

- Current page: optional subtle indication (e.g. stronger text or underline on active link); if skipped in v1, acceptable.
- All header links use accent color; hover: underline.

### 2.3 Information architecture

```text
/                 Overview + links to Teams, People, API plugins (dev-oriented link OK)
/teams            Squads: list + add + inline edit + delete
/people           Roster: form + table + inline edit + delete
```

---

## 3. Screen: Home (`/`)

### 3.1 Goal

Orient the user and link to the two primary management areas.

### 3.2 Content

- **H1:** `Phase 1 — Foundation` (or product title if preferred later).
- **Lead paragraph:** Short explanation: local SQLite, squads and roster, evidence-based review product direction.
- **Bulleted list:** Links to `/teams`, `/people`, and mention `GET /api/plugins` for developers (optional bullet).

### 3.3 Wireframe

```text
+----------------------------------------------------------+
| eng-review-os     Teams    People                         |
+----------------------------------------------------------+
|                                                          |
|  Phase 1 — Foundation                                    |
|  [intro copy]                                            |
|                                                          |
|  • Teams — create and rename squads                      |
|  • People — add engineers/QE/BA with level & team      |
|  • Plugins (API) — list integration stubs               |
|                                                          |
+----------------------------------------------------------+
```

---

## 4. Screen: Teams (`/teams`)

### 4.1 Goal

Maintain **squad names**; support rename and delete (people lose assignment via SET NULL — messaging in confirm dialog).

### 4.2 Layout (top to bottom)

1. **Page title row**
   - **H1:** `Teams`
   - **Subtitle (muted):** One line, e.g. “Squads or groups you assign people to (optional).”

2. **Add form (horizontal on wide; stack on narrow)**
   - Label: `New squad name`
   - Text input (placeholder: e.g. `e.g. Payments squad`)
   - Primary button: `Add team`

3. **Error region** (if any): Single line or list; red-400 text; `role="alert"` when shown.

4. **List container:** Bordered rounded panel (surface background).
   - **Empty state:** Single row text: “No teams yet.”
   - **Row (each team):**
     - **View mode:** Team name (semibold left); right: text buttons `Edit` (accent), `Delete` (destructive red).
     - **Edit mode:** Text input prefilled; `Save` (accent), `Cancel` (muted).

### 4.3 Interactions

- **Add:** Submit on button; empty name does nothing or shows validation (prefer trim + disable submit if empty).
- **Edit:** Enter edit mode per row; Save PATCHes; Cancel discards.
- **Delete:** `confirm()` copy: `Delete this team? People on this team will be unassigned.`

### 4.4 Wireframe

```text
+----------------------------------------------------------+
| Teams                                                    |
| Squads or groups you assign people to (optional).        |
|                                                          |
| New squad name  [________________]  [ Add team ]           |
|                                                          |
| +------------------------------------------------------+ |
| | Payments squad                    Edit    Delete     | |
| | Platform                          Edit    Delete     | |
| +------------------------------------------------------+ |
+----------------------------------------------------------+
```

---

## 5. Screen: People (`/people`)

### 5.1 Goal

Maintain **roster**: name, discipline, level, optional team; edit and remove rows.

### 5.2 Layout

1. **Page title row**
   - **H1:** `People`
   - **Subtitle:** e.g. “Discipline and level match your squad taxonomy (Frontend, Backend, QE, BA).”

2. **Add form** (grid: name full width; discipline + level side by side on `sm+`; team full width)
   - **Name** (required)
   - **Discipline** select: Frontend, Backend, QE, BA, Other
   - **Level** select: Senior, Mid, Associate, Intern
   - **Team** select: `No team` + one option per squad
   - Primary button: `Add person`

3. **Error region** (same pattern as Teams).

4. **Table** (horizontal scroll on small viewports if needed; `min-width` ~640px)
   - **Columns:** Name | Discipline | Level | Team | Actions
   - **Team column:** Show squad name or em dash `—` if none.
   - **Actions:** `Edit` | `Delete` (destructive).

5. **Row edit mode**
   - Replace cells with inputs/selects matching add form; Actions: `Save`, `Cancel`.

### 5.3 Interactions

- **Add:** POST; on success clear name + optional team selection (keep discipline/level defaults or reset per product choice — spec: clear **name** and **team** only after success).
- **Delete:** `confirm()` — `Remove this person from the directory?`

### 5.4 Wireframe

```text
+--------------------------------------------------------------------------------+
| People                                                                          |
| Discipline and level match your squad taxonomy.                               |
|                                                                                |
| +----------------------------------------------------------------------------+ |
| | Name [________________________]                                            | |
| | Discipline [ Frontend v ]    Level [ Senior v ]                            | |
| | Team [ No team v ]                                                         | |
| | [ Add person ]                                                             | |
| +----------------------------------------------------------------------------+ |
|                                                                                |
| Name          | Discipline | Level   | Team           | Actions              |
|---------------+------------+---------+----------------+----------------------|
| Jane Doe      | Frontend   | Senior  | Payments squad | Edit    Delete       |
| ...           |            |         |                |                      |
+--------------------------------------------------------------------------------+
```

---

## 6. Shared patterns

- **Primary button:** Filled accent, white label, rounded.
- **Secondary / destructive:** Text buttons; destructive uses red-400.
- **Inputs / selects:** Dark input background, border visible, padding comfortable for touch.
- **Loading:** Page-level “Loading…” muted text acceptable for v1.

---

## 7. Out of scope for this UI spec

- Authentication screens, settings, review cycles, goals, evidence, export UI (later phases).
- Responsive **polish** beyond usable table scroll and stacked form — can iterate after approval.

---

## 8. Implementation note (for agents and developers)

Until **Owner approval** is checked at the top of this document:

- **Do not** add or change **application UI code** (`src/app/**`, `src/components/**`, global styles) to match this spec unless the owner explicitly waives approval in writing (e.g. issue comment or PR description).
- **Do** use this document as the checklist when implementation is allowed.

After approval, implementation should **match** this spec unless a follow-up change request updates this file.
