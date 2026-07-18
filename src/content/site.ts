/**
 * Single source of truth for organisation-level facts, navigation and contact.
 * Verified legacy facts (address, phones, socials) carried from Creating Abilities.
 */

export const org = {
  name: "WeEnable",
  legalName: "WeEnable",
  formerName: "Creating Abilities",
  tagline: "Ability was never the barrier.",
  description:
    "A global movement removing the barriers between ability and opportunity.",
  founded: "2016",
  address: {
    line: "WeWork, 524 Broadway",
    city: "New York",
    region: "NY",
    postalCode: "10012",
    country: "United States",
    countryCode: "US",
  },
  phones: ["+91 7020111060", "+44 777 6266 375"],
  emails: {
    general: "hello@weenable.org",
    partners: "partners@weenable.org",
    press: "press@weenable.org",
    privacy: "privacy@weenable.org",
    legal: "legal@weenable.org",
    accessibility: "accessibility@weenable.org",
  },
  social: {
    facebook: "https://facebook.com/creatingabilities.org",
    twitter: "https://twitter.com/creatingability",
    instagram: "https://instagram.com/creatingabilities",
    linkedin: "https://linkedin.com/company/creating-abilities",
  },
} as const;

/**
 * Verified, non-fabricated org facts only. The eight programs are real; other
 * headline metrics (people reached, countries, partners) will be added once
 * confirmed and are intentionally omitted until then.
 */
export const orgMetrics = {
  activePrograms: "8",
} as const;

/** Primary header navigation. Donate is rendered separately as a pill. */
export const primaryNav = [
  { label: "Mission", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Stories", href: "/stories" },
  { label: "Impact", href: "/impact" },
  { label: "Partner", href: "/partnerships" },
] as const;

export const footerNav = {
  organisation: {
    title: "Organisation",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Stories", href: "/stories" },
    ],
  },
  programs: {
    title: "Programs",
    links: [
      { label: "Disability", href: "/programs/people-with-disabilities" },
      { label: "Adaptive Sports", href: "/programs/adaptive-sports" },
      { label: "Senior Citizens", href: "/programs/senior-citizens" },
      { label: "Caregivers", href: "/programs/caregivers" },
      { label: "Employment", href: "/programs/employment-livelihoods" },
      { label: "Digital & AI", href: "/programs/digital-ai-accessibility" },
      { label: "Policy", href: "/programs/policy-research" },
      { label: "Arts", href: "/programs/arts" },
    ],
  },
  involved: {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Corporate Partnership", href: "/partnerships#corporate" },
      { label: "Government Partnership", href: "/partnerships#government" },
      { label: "Events", href: "/events" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Impact Reports", href: "/impact#reports" },
      { label: "Research", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Accessibility Statement", href: "/accessibility" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;

export const socialLinks = [
  { label: "Facebook", href: org.social.facebook, icon: "facebook" as const },
  { label: "X", href: org.social.twitter, icon: "twitter" as const },
  { label: "Instagram", href: org.social.instagram, icon: "instagram" as const },
  { label: "LinkedIn", href: org.social.linkedin, icon: "linkedin" as const },
];
