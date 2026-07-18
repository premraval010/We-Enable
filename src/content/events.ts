export type WeEvent = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (sample dates 2-4 months after the July 2026 build). */
  startDate: string;
  dateLabel: string;
  city: string;
  venue: string;
  type: string;
  image: { src: string; alt: string };
};

/**
 * Real upcoming events will be published here as they are confirmed.
 * Add entries to populate the /events page.
 */
export const events: WeEvent[] = [];
