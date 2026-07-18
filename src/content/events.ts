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
 * SAMPLE upcoming events. Dates/cities plausible for July 2026 build.
 * See FICTIONAL-CONTENT.md; replace with the real events calendar before launch.
 */
export const events: WeEvent[] = [
  {
    slug: "accessibility-ai-roundtable",
    title: "Accessibility & AI Roundtable",
    description:
      "Policymakers and technologists on the future of assistive AI — what to build, what to regulate, and what to standardise.",
    startDate: "2026-09-24",
    dateLabel: "24 September 2026",
    city: "Singapore",
    venue: "Marina Bay Conference Centre",
    type: "Roundtable",
    image: {
      src: "/images/event-roundtable.jpg",
      alt: "A roundtable discussion in progress in a bright conference room.",
    },
  },
  {
    slug: "inclusive-hiring-summit",
    title: "Inclusive Hiring Summit",
    description:
      "Employers and job seekers meet, mentor, and match in one day — with workplace accessibility audits on site.",
    startDate: "2026-10-15",
    dateLabel: "15 October 2026",
    city: "Bengaluru",
    venue: "WeEnable Hub, Bengaluru",
    type: "Summit",
    image: {
      src: "/images/event-summit.jpg",
      alt: "People networking and talking at a professional summit.",
    },
  },
  {
    slug: "community-day-digital-literacy-seniors",
    title: "Community Day: Digital Literacy for Seniors",
    description:
      "Drop-in device help and one-on-one coaching sessions for older adults, with scam-safety clinics throughout the day.",
    startDate: "2026-11-08",
    dateLabel: "8 November 2026",
    city: "Nairobi",
    venue: "Community Centre, Nairobi",
    type: "Community Day",
    image: {
      src: "/images/event-community.jpg",
      alt: "An older adult being coached one-on-one on a tablet at a community event.",
    },
  },
];
