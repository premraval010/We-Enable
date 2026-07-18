import type { Metadata } from "next";

/**
 * Site-wide SEO constants and a per-page metadata builder.
 * metadataBase is read from env so previews and production resolve correctly.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://weenable.org"
).replace(/\/$/, "");

export const SITE_NAME = "WeEnable";
export const SITE_TAGLINE = "Ability was never the barrier.";
export const SITE_DESCRIPTION =
  "WeEnable is a global movement removing the barriers between ability and opportunity — across disability, aging, caregiving, employment, digital access, policy, sport, and the arts.";

type BuildMetadataInput = {
  /** Page title without the site suffix. Omit on the homepage. */
  title?: string;
  description: string;
  /** Path beginning with "/". Used for canonical + OG url. */
  path: string;
  /** Override the OG image (defaults to the route's generated opengraph-image). */
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
};

/** Build per-page metadata with canonical, OG and Twitter cards. */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | ${SITE_TAGLINE}`;

  return {
    // `absolute` bypasses the root layout's "%s | WeEnable" template so the
    // suffix is never doubled (fullTitle already carries the site name).
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url,
      locale: "en_US",
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
