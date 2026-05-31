"use client";

import { useCallback, useEffect, useState } from "react";

type Team = {
  id: number;
  name: string;
  createdAt: string | number | Date;
};

export function TeamsPanel() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const load = useCallback(async () => {
    setError(null);
    const res = await fetch("/api/teams");
    if (!res.ok) {
      setError("Failed to load teams");
      return;
    }
    const data = (await res.json()) as Team[];
    setTeams(data);
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
    if (!newName.trim()) {
      return;
    }
    setError(null);
    const res = await fetch("/api/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim() }),
    });
    if (!res.ok) {
      const j = (await res.json()) as { error?: string };
      setError(j.error ?? "Create failed");
      return;
    }
    setNewName("");
    await load();
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this team? People on this team will be unassigned.")) {
      return;
    }
    setError(null);
    const res = await fetch(`/api/teams/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setError("Delete failed");
      return;
    }
    await load();
  }

  function startEdit(t: Team) {
    setEditingId(t.id);
    setEditName(t.name);
  }

  async function saveEdit() {
    if (editingId == null || !editName.trim()) {
      return;
    }
    setError(null);
    const res = await fetch(`/api/teams/${editingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName.trim() }),
    });
    if (!res.ok) {
      const j = (await res.json()) as { error?: string };
      setError(j.error ?? "Update failed");
      return;
    }
    setEditingId(null);
    await load();
  }

  if (loading) {
    return <p className="text-[var(--muted)]">Loading…</p>;
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleCreate} className="flex flex-wrap items-end gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="new-team" className="text-sm text-[var(--muted)]">
            New squad name
          </label>
          <input
            id="new-team"
            className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--text)]"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="e.g. Payments squad"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
        >
          Add team
        </button>
      </form>

      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <ul className="divide-y divide-[var(--border)] rounded border border-[var(--border)] bg-[var(--surface)]">
        {teams.length === 0 ? (
          <li className="px-4 py-6 text-[var(--muted)]">No teams yet.</li>
        ) : (
          teams.map((t) => (
            <li
              key={t.id}
              className="flex flex-wrap items-center justify-between gap-2 px-4 py-3"
            >
              {editingId === t.id ? (
                <>
                  <input
                    className="min-w-[12rem] flex-1 rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-1"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="text-sm text-[var(--accent)]"
                      onClick={() => void saveEdit()}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="text-sm text-[var(--muted)]"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="font-medium">{t.name}</span>
                  <div className="flex gap-3 text-sm">
                    <button
                      type="button"
                      className="text-[var(--accent)]"
                      onClick={() => startEdit(t)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-red-400"
                      onClick={() => void handleDelete(t.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
