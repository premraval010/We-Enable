import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { stories, featuredStory } from "@/content/stories";

export const metadata: Metadata = buildMetadata({
  title: "Stories, the proof is in the people",
  description:
    "Nine stories from inside WeEnable programs: employment, seniors, caregiving, adaptive sport, digital access, policy, and the arts, told the way they were lived.",
  path: "/stories",
});

const otherStories = stories.filter((s) => !s.featured);

export default function StoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Stories", path: "/stories" },
        ])}
      />
      <PageHero
        eyebrow="Stories"
        title="The proof isn't in the numbers. It's in the people."
      />

      {/* Featured, Yui */}
      <Section tone="paper" aria-labelledby={`story-${featuredStory.slug}`}>
        <article id={featuredStory.slug} className="scroll-mt-24">
          <Reveal className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-image">
              <Image
                src={featuredStory.image.src}
                alt={featuredStory.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow tone="teal">
                Featured · {featuredStory.program} · {featuredStory.location}
              </Eyebrow>
              <h2
                id={`story-${featuredStory.slug}`}
                className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl"
              >
                {featuredStory.headline}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                {featuredStory.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {featuredStory.quote ? (
                <blockquote className="mt-8 border-l-4 border-coral pl-6">
                  <p className="font-heading text-xl font-extrabold leading-snug text-ink">
                    &ldquo;{featuredStory.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-muted">
                    {featuredStory.name}, {featuredStory.program}, {featuredStory.location}
                  </footer>
                </blockquote>
              ) : null}
            </div>
          </Reveal>
        </article>
      </Section>

      {/* Remaining stories */}
      <Section tone="surface" aria-label="More stories">
        <div className="space-y-16 lg:space-y-24">
          {otherStories.map((story, i) => (
            <article
              key={story.slug}
              id={story.slug}
              className="scroll-mt-24"
            >
              <Reveal
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-image ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <Eyebrow tone="teal">
                    {story.program} · {story.location}
                  </Eyebrow>
                  <h2 className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
                    {story.headline}
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted">
                    {story.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {story.quote ? (
                    <blockquote className="mt-5 border-l-4 border-teal pl-5">
                      <p className="font-heading text-lg font-extrabold leading-snug text-ink">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </blockquote>
                  ) : null}
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Have a story from inside a WeEnable program?"
        body="We'd rather tell it the way you lived it than the way we'd guess it."
        links={[{ label: "Share your story", href: "/contact?topic=programs" }]}
      />
      <NewsletterBand />
    </>
  );
}
