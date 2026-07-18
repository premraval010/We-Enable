import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { featuredArticle, gridArticles, pressItems } from "@/content/news";
import { org } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Newsroom, stories, research, and news",
  description:
    "Stories, research, and news from the movement. Our newsroom is launching soon, for press enquiries, reach the WeEnable team directly.",
  path: "/newsroom",
});

const hasArticles = featuredArticle !== undefined || gridArticles.length > 0;

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
        intro="What we're learning, what we're publishing, and what's changing, reported the way we report everything else."
      />

      {/* Articles (empty state until published) */}
      <Section tone="paper" aria-labelledby="latest-heading">
        <Reveal className="max-w-3xl">
          <h2 id="latest-heading" className="text-3xl font-extrabold sm:text-4xl">
            {hasArticles ? "Latest" : "Publishing soon"}
          </h2>
        </Reveal>

        {hasArticles ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[featuredArticle, ...gridArticles]
              .filter((a): a is NonNullable<typeof a> => Boolean(a))
              .map((article, i) => (
                <Reveal
                  key={article.slug}
                  delay={i * 70}
                  as="article"
                  className="flex flex-col rounded-card border border-border bg-surface p-7"
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
        ) : (
          <Reveal className="mt-8 max-w-2xl rounded-card border border-border bg-surface p-8">
            <p className="text-lg leading-relaxed text-muted">
              We&rsquo;re preparing our first stories and research to publish here.
              For press enquiries, interviews, or brand assets in the meantime, reach
              our team directly.
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href={`mailto:${org.emails.press}?subject=Press enquiry`}>
                {org.emails.press}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
          </Reveal>
        )}
      </Section>

      {/* In the press */}
      {pressItems.length > 0 ? (
        <Section tone="surface" aria-labelledby="press-heading">
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
      ) : null}

      <NewsletterBand />
    </>
  );
}
