export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Phase 1 — Foundation</h1>
      <p className="text-[var(--muted)]">
        Manage <strong>squads (teams)</strong> and <strong>people</strong> with discipline and
        level. Data persists locally in <code className="rounded bg-[var(--surface)] px-1">data/app.db</code>.
      </p>
      <ul className="list-inside list-disc text-[var(--muted)]">
        <li>
          <a href="/teams">Teams</a> — create and rename squads
        </li>
        <li>
          <a href="/people">People</a> — add engineers/QE/BA with level and optional team
        </li>
        <li>
          <a href="/api/plugins">GET /api/plugins</a> — registered integration stubs
        </li>
      </ul>
    </div>
  );
}
