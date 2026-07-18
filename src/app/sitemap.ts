import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { programs } from "@/content/programs";
import { articles } from "@/content/news";

/** Static sitemap covering all public routes (portals excluded via robots). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-18");

  const staticPaths = [
    "/",
    "/about",
    "/programs",
    "/impact",
    "/stories",
    "/partnerships",
    "/donate",
    "/volunteer",
    "/careers",
    "/newsroom",
    "/events",
    "/contact",
    "/accessibility",
    "/privacy",
    "/terms",
    "/faq",
    "/resources",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const p of programs) {
    entries.push({
      url: `${SITE_URL}/programs/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const a of articles) {
    entries.push({
      url: `${SITE_URL}/newsroom/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}
