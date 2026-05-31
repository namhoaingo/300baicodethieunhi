"use client";

import { useCallback, useEffect, useState } from "react";

import { DISCIPLINES, LEVELS } from "@/lib/constants";

type Team = { id: number; name: string };

type PersonRow = {
  id: number;
  name: string;
  discipline: string;
  level: string;
  teamId: number | null;
  teamName: string | null;
};

export function PeoplePanel() {
  const [people, setPeople] = useState<PersonRow[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [discipline, setDiscipline] = useState<string>(DISCIPLINES[0]);
  const [level, setLevel] = useState<string>(LEVELS[0]);
  const [teamId, setTeamId] = useState<string>("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<{
    name: string;
    discipline: string;
    level: string;
    teamId: string;
  }>({
    name: "",
    discipline: DISCIPLINES[0],
    level: LEVELS[0],
    teamId: "",
  });

  const load = useCallback(async () => {
    setError(null);
    const [pRes, tRes] = await Promise.all([
      fetch("/api/people"),
      fetch("/api/teams"),
    ]);
    if (!pRes.ok) {
      setError("Failed to load people");
      return;
    }
    if (!tRes.ok) {
      setError("Failed to load teams");
      return;
    }
    setPeople((await pRes.json()) as PersonRow[]);
    setTeams((await tRes.json()) as Team[]);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    load().finally(() => {
      if (!cancelled) {
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [load]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    setError(null);
    const body: Record<string, unknown> = {
      name: name.trim(),
      discipline,
      level,
    };
    if (teamId !== "") {
      body.teamId = Number(teamId);
    }
    const res = await fetch("/api/people", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const j = (await res.json()) as { error?: string };
      setError(j.error ?? "Create failed");
      return;
    }
    setName("");
    setTeamId("");
    await load();
  }

  function startEdit(p: PersonRow) {
    setEditingId(p.id);
    setEditForm({
      name: p.name,
      discipline: p.discipline,
      level: p.level,
      teamId: p.teamId != null ? String(p.teamId) : "",
    });
  }

  async function saveEdit() {
    if (editingId == null || !editForm.name.trim()) {
      return;
    }
    setError(null);
    const body: Record<string, unknown> = {
      name: editForm.name.trim(),
      discipline: editForm.discipline,
      level: editForm.level,
      teamId:
        editForm.teamId === "" ? null : Number(editForm.teamId),
    };
    const res = await fetch(`/api/people/${editingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const j = (await res.json()) as { error?: string };
      setError(j.error ?? "Update failed");
      return;
    }
    setEditingId(null);
    await load();
  }

  async function handleDelete(id: number) {
    if (!confirm("Remove this person from the directory?")) {
      return;
    }
    setError(null);
    const res = await fetch(`/api/people/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setError("Delete failed");
      return;
    }
    await load();
  }

  function teamSelect(
    value: string,
    onChange: (v: string) => void,
    id: string,
  ) {
    return (
      <select
        id={id}
        className="rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-1 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">No team</option>
        {teams.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    );
  }

  if (loading) {
    return <p className="text-[var(--muted)]">Loading…</p>;
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleCreate}
        className="grid gap-3 rounded border border-[var(--border)] bg-[var(--surface)] p-4 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label className="text-sm text-[var(--muted)]">Name</label>
          <input
            className="rounded border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[var(--muted)]">Discipline</label>
          <select
            className="rounded border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
          >
            {DISCIPLINES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[var(--muted)]">Level</label>
          <select
            className="rounded border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label className="text-sm text-[var(--muted)]">Team (optional)</label>
          {teamSelect(teamId, setTeamId, "new-person-team")}
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="rounded bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
          >
            Add person
          </button>
        </div>
      </form>

      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <div className="overflow-x-auto rounded border border-[var(--border)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-[var(--surface)] text-[var(--muted)]">
            <tr>
              <th className="px-3 py-2 font-medium">Name</th>
              <th className="px-3 py-2 font-medium">Discipline</th>
              <th className="px-3 py-2 font-medium">Level</th>
              <th className="px-3 py-2 font-medium">Team</th>
              <th className="px-3 py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {people.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-3 py-6 text-center text-[var(--muted)]"
                >
                  No people yet.
                </td>
              </tr>
            ) : (
              people.map((p) => (
                <tr key={p.id} className="border-t border-[var(--border)]">
                  {editingId === p.id ? (
                    <>
                      <td className="px-3 py-2">
                        <input
                          className="w-full min-w-[8rem] rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-1"
                          value={editForm.name}
                          onChange={(e) =>
                            setEditForm((f) => ({ ...f, name: e.target.value }))
                          }
                        />
                      </td>
                      <td className="px-3 py-2">
                        <select
                          className="rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-1"
                          value={editForm.discipline}
                          onChange={(e) =>
                            setEditForm((f) => ({
                              ...f,
                              discipline: e.target.value,
                            }))
                          }
                        >
                          {DISCIPLINES.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-2">
                        <select
                          className="rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-1"
                          value={editForm.level}
                          onChange={(e) =>
                            setEditForm((f) => ({ ...f, level: e.target.value }))
                          }
                        >
                          {LEVELS.map((l) => (
                            <option key={l} value={l}>
                              {l}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-2">
                        {teamSelect(
                          editForm.teamId,
                          (v) =>
                            setEditForm((f) => ({ ...f, teamId: v })),
                          `edit-team-${p.id}`,
                        )}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <button
                          type="button"
                          className="text-[var(--accent)]"
                          onClick={() => void saveEdit()}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="ml-2 text-[var(--muted)]"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-3 py-2 font-medium">{p.name}</td>
                      <td className="px-3 py-2">{p.discipline}</td>
                      <td className="px-3 py-2">{p.level}</td>
                      <td className="px-3 py-2 text-[var(--muted)]">
                        {p.teamName ?? "—"}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <button
                          type="button"
                          className="text-[var(--accent)]"
                          onClick={() => startEdit(p)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="ml-2 text-red-400"
                          onClick={() => void handleDelete(p.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
