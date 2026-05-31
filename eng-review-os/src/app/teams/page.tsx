import { TeamsPanel } from "@/components/TeamsPanel";

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Teams</h1>
        <p className="mt-1 text-[var(--muted)]">
          Squads or groups you assign people to (optional).
        </p>
      </div>
      <TeamsPanel />
    </div>
  );
}
