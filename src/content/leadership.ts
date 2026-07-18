export type Leader = {
  name: string;
  role: string;
  bio: string;
  /** Two initials for the avatar glyph. */
  initials: string;
};

/**
 * SAMPLE leadership — realistic, globally diverse, fictional names.
 * See FICTIONAL-CONTENT.md; replace with real leadership before public launch.
 */
export const leadership: Leader[] = [
  {
    name: "Amara Okonkwo",
    role: "Chief Executive Officer",
    bio: "Two decades building inclusive public systems across three continents. Leads WeEnable's shift from service to systems change.",
    initials: "AO",
  },
  {
    name: "Rajiv Menon",
    role: "Chief Program Officer",
    bio: "Former disability-rights litigator turned program builder. Owns the standard that every WeEnable program must prove a model others can adopt.",
    initials: "RM",
  },
  {
    name: "Lena Fischer",
    role: "Chief Technology Officer",
    bio: "Accessibility engineer by training. Built the platform behind the AI reader, matching engine, and real-time impact reporting.",
    initials: "LF",
  },
  {
    name: "Daniel Tan",
    role: "Board Chair",
    bio: "Public-sector leader focused on aging and disability policy across Asia. Chairs WeEnable's governance and accountability committee.",
    initials: "DT",
  },
];
