import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { featuredArticle, gridArticles, pressItems } from "@/content/news";

export const metadata: Metadata = buildMetadata({
  title: "Newsroom — stories, research, and news",
  description:
    "Stories, research, and news from the movement — why we rebuilt into WeEnable, what makes a standard work, and reporting from inside our programs.",
  path: "/newsroom",
});

export default function NewsroomPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
        ])}
      />
      <PageHero
        eyebrow="Newsroom"
        title="Stories, research, and news from the movement"
        intro="What we're learning, what we're publishing, and what's changing — reported the way we report everything else."
      />

      {/* Featured */}
      <Section tone="paper" aria-labelledby="featured-heading">
        <Reveal
          as="article"
          className="rounded-card-lg border border-border bg-surface p-8 sm:p-12 lg:p-14"
        >
          <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-paper">
            {featuredArticle.category}
          </span>
          <h2
            id="featured-heading"
            className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl"
          >
            <Link
              href={`/newsroom/${featuredArticle.slug}`}
              className="transition-colors hover:text-coral-text"
            >
              {featuredArticle.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {featuredArticle.dek}
          </p>
          <p className="mt-5 text-sm text-muted">
            <time dateTime={featuredArticle.date}>{featuredArticle.dateLabel}</time>{" "}
            · {featuredArticle.readingTime}
          </p>
          <Link
            href={`/newsroom/${featuredArticle.slug}`}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-text transition-all hover:gap-3"
          >
            Read the story
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Section>

      {/* Grid */}
      <Section tone="surface" aria-labelledby="latest-heading">
        <Reveal className="max-w-3xl">
          <h2 id="latest-heading" className="text-3xl font-extrabold sm:text-4xl">
            Latest
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gridArticles.map((article, i) => (
            <Reveal
              key={article.slug}
              delay={i * 70}
              as="article"
              className="flex flex-col rounded-card border border-border bg-paper p-7"
            >
              <span className="inline-block w-fit rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-paper">
                {article.category}
              </span>
              <h3 className="mt-4 text-xl font-extrabold leading-snug">
                <Link
                  href={`/newsroom/${article.slug}`}
                  className="transition-colors hover:text-coral-text"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {article.dek}
              </p>
              <p className="mt-5 text-sm text-muted">
                <time dateTime={article.date}>{article.dateLabel}</time> ·{" "}
                {article.readingTime}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* In the press */}
      <Section tone="paper" aria-labelledby="press-heading">
        <Reveal className="max-w-3xl">
          <h2 id="press-heading" className="text-3xl font-extrabold sm:text-4xl">
            In the press
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {pressItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-teal-text">
                  {item.outlet}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">
                  {item.title}
                </p>
              </div>
              <p className="shrink-0 text-sm text-muted">{item.date}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Media kit */}
      <Section tone="surface" aria-labelledby="mediakit-heading">
        <Reveal className="flex flex-col items-start gap-6 rounded-card-lg border border-border bg-paper p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12">
          <div className="max-w-xl">
            <h2 id="mediakit-heading" className="text-2xl font-extrabold sm:text-3xl">
              Download the media kit
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Brand assets, logos, program data, and spokesperson details — everything
              you need to feature the movement accurately.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a href="/press/weenable-media-kit.zip" download>
              <Download aria-hidden="true" className="size-5" />
              Download media kit
            </a>
          </Button>
        </Reveal>
      </Section>

      <NewsletterBand />
    </>
  );
}
