export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

/**
 * SAMPLE open roles — realistic for a growing global non-profit.
 * See FICTIONAL-CONTENT.md; replace with the real ATS feed before launch.
 */
export const jobs: Job[] = [
  {
    slug: "program-manager-disability-inclusion",
    title: "Program Manager, Disability Inclusion",
    team: "Programs",
    location: "Singapore (hybrid)",
    type: "Full-time",
    summary:
      "Lead delivery of our disability and independent-living programs in the Asia-Pacific region, working directly with agencies and partners.",
  },
  {
    slug: "accessibility-engineer",
    title: "Accessibility Engineer",
    team: "Technology",
    location: "Remote (global)",
    type: "Full-time",
    summary:
      "Build and audit the AI accessibility platform to WCAG 2.2 AA and beyond. You treat exclusion as a solvable design problem.",
  },
  {
    slug: "partnerships-lead",
    title: "Partnerships Lead",
    team: "Partnerships",
    location: "Remote (global)",
    type: "Full-time",
    summary:
      "Turn corporate, government, and foundation commitments into measurable, reportable programs. Evidence over thank-you letters.",
  },
  {
    slug: "research-associate",
    title: "Research Associate, Policy",
    team: "Policy & Research",
    location: "New York or remote",
    type: "Full-time",
    summary:
      "Produce independent research and impact studies that governments can adopt with confidence. Honest methodology, published openly.",
  },
];

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
