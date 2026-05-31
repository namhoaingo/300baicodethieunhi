import { z } from "zod";

import { DISCIPLINES, LEVELS } from "./constants";

const [d0, ...dRest] = DISCIPLINES;
const discipline = z.enum([d0, ...dRest]);

const [l0, ...lRest] = LEVELS;
const level = z.enum([l0, ...lRest]);

export const teamCreateSchema = z.object({
  name: z.string().min(1).max(200),
});

export const teamUpdateSchema = teamCreateSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: "At least one field required" },
);

export const personCreateSchema = z.object({
  name: z.string().min(1).max(200),
  discipline,
  level,
  teamId: z.number().int().positive().nullable().optional(),
});

export const personUpdateSchema = z
  .object({
    name: z.string().min(1).max(200).optional(),
    discipline: discipline.optional(),
    level: level.optional(),
    teamId: z.number().int().positive().nullable().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field required",
  });
