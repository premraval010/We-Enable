export type Leader = {
  name: string;
  role: string;
  bio: string;
  /** Two initials for the avatar glyph. */
  initials: string;
};

/**
 * Real leadership is being finalised and will be published before launch.
 * Add entries here (name, role, bio, initials) to populate the /about grid.
 */
export const leadership: Leader[] = [];
