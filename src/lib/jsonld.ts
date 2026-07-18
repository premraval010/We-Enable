import { org } from "@/content/site";
import { SITE_URL, SITE_DESCRIPTION } from "./seo";

/** Sitewide NGO schema — rendered once in the root layout. */
export function ngoJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: org.name,
    alternateName: org.formerName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-mark.svg`,
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.line,
      addressLocality: org.address.city,
      addressRegion: org.address.region,
      postalCode: org.address.postalCode,
      addressCountry: org.address.countryCode,
    },
    email: org.emails.general,
    telephone: org.phones[0],
    sameAs: [
      org.social.facebook,
      org.social.twitter,
      org.social.instagram,
      org.social.linkedin,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "general",
        email: org.emails.general,
      },
      {
        "@type": "ContactPoint",
        contactType: "partnerships",
        email: org.emails.partners,
      },
      {
        "@type": "ContactPoint",
        contactType: "media",
        email: org.emails.press,
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: org.name,
    url: SITE_URL,
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function articleJsonLd(a: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    author: { "@type": "Organization", name: a.author ?? org.name },
    publisher: {
      "@type": "Organization",
      name: org.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/logo-mark.svg` },
    },
    mainEntityOfPage: `${SITE_URL}/newsroom/${a.slug}`,
    ...(a.image ? { image: `${SITE_URL}${a.image}` } : {}),
  };
}

export function eventJsonLd(e: {
  title: string;
  description: string;
  startDate: string;
  city: string;
  venue?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    description: e.description,
    startDate: e.startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: e.venue ?? e.city,
      address: e.city,
    },
    organizer: { "@type": "Organization", name: org.name, url: SITE_URL },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Render helper: <JsonLd data={...} /> */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data);
}
