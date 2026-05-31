import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const teams = sqliteTable("teams", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});

export const people = sqliteTable("people", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  discipline: text("discipline").notNull(),
  level: text("level").notNull(),
  teamId: integer("team_id").references(() => teams.id, {
    onDelete: "set null",
  }),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});

export const teamsRelations = relations(teams, ({ many }) => ({
  people: many(people),
}));

export const peopleRelations = relations(people, ({ one }) => ({
  team: one(teams, {
    fields: [people.teamId],
    references: [teams.id],
  }),
}));

export type Team = typeof teams.$inferSelect;
export type NewTeam = typeof teams.$inferInsert;
export type Person = typeof people.$inferSelect;
export type NewPerson = typeof people.$inferInsert;
