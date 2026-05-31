import { PeoplePanel } from "@/components/PeoplePanel";

export default function PeoplePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">People</h1>
        <p className="mt-1 text-[var(--muted)]">
          Discipline and level match your squad taxonomy (Frontend, Backend, QE, BA).
        </p>
      </div>
      <PeoplePanel />
    </div>
  );
}
