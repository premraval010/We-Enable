export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

/**
 * Open roles are published here as they open. Empty = no current openings
 * (the /careers page shows an honest "no open roles right now" state).
 */
export const jobs: Job[] = [];

export const benefits = [
  {
    title: "Flexible by default",
    body: "Remote-first, outcome-focused, and built around how you actually work best.",
  },
  {
    title: "Accessible workplace",
    body: "Every tool, space, and process is designed for access from the first draft.",
  },
  {
    title: "Learning budget",
    body: "An annual budget to grow your skills, because the work keeps evolving.",
  },
  {
    title: "Comprehensive healthcare",
    body: "Full medical cover for you and your dependents, wherever you are based.",
  },
];
