/** Aligns with squad composition in docs/requirements/README.md */
export const DISCIPLINES = [
  "Frontend",
  "Backend",
  "QE",
  "BA",
  "Other",
] as const;

export const LEVELS = [
  "Senior",
  "Mid",
  "Associate",
  "Intern",
] as const;

export type Discipline = (typeof DISCIPLINES)[number];
export type Level = (typeof LEVELS)[number];
