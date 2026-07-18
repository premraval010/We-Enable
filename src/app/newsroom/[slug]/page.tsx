import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { articles, getArticle } from "@/content/news";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.dek.slice(0, 158),
    path: `/newsroom/${slug}`,
  });
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
          { name: article.title, path: `/newsroom/${article.slug}` },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.dek,
          slug: article.slug,
          datePublished: article.date,
          author: article.author,
        })}
      />

      <article>
        {/* Header */}
        <section className="bg-paper pt-16 sm:pt-20 lg:pt-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-paper">
                {article.category}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                {article.dek}
              </p>
              <p className="mt-6 text-sm font-semibold text-muted">
                {article.author} ·{" "}
                <time dateTime={article.date}>{article.dateLabel}</time> ·{" "}
                {article.readingTime}
              </p>
            </div>
          </Container>
        </section>

        {/* Body */}
        <Section tone="paper" aria-label="Article body">
          <Reveal className="mx-auto max-w-3xl space-y-6">
            {article.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-4 text-2xl font-extrabold sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-coral pl-6"
                  >
                    <p className="font-heading text-xl font-extrabold leading-snug text-ink sm:text-2xl">
                      &ldquo;{block.text}&rdquo;
                    </p>
                  </blockquote>
                );
              }
              return (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-muted"
                >
                  {block.text}
                </p>
              );
            })}

            <div className="pt-8">
              <Link
                href="/newsroom"
                className="inline-flex items-center gap-2 font-semibold text-teal-text transition-all hover:gap-3"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Back to newsroom
              </Link>
            </div>
          </Reveal>
        </Section>
      </article>

      <NewsletterBand />
    </>
  );
}
