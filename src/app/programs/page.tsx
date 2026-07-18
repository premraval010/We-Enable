import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { ProgramRow } from "@/components/sections/ProgramRow";
import { StatBlock } from "@/components/sections/StatBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { programs } from "@/content/programs";

export const metadata: Metadata = buildMetadata({
  title: "Programs — eight programs, one mission",
  description:
    "Eight WeEnable programs, each removing one specific barrier: disability, adaptive sport, seniors, caregivers, employment, digital and AI access, policy, and the arts.",
  path: "/programs",
});

const scaleStats = [
  { value: "1.3B", body: "people live with a significant disability.", source: "World Health Organization" },
  { value: "360M", body: "have moderate-to-profound hearing loss.", source: "World Health Organization" },
  { value: "285M", body: "are visually impaired, and 39 million are blind.", source: "World Health Organization" },
  { value: "1 in 10", body: "of the 75 million who need a wheelchair have one.", source: "World Health Organization" },
];

export default function ProgramsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
        ])}
      />
      <PageHero
        eyebrow="What we do"
        title="Eight programs. One mission."
        intro="Every program below exists to remove one specific barrier — and to prove a model that governments, companies, and communities can adopt at scale."
      />

      <Section tone="paper" aria-label="All programs">
        <div className="space-y-20 lg:space-y-28">
          {programs.map((program, i) => (
            <ProgramRow
              key={program.slug}
              number={program.number}
              label={program.label}
              tagline={program.tagline}
              description={program.summary}
              bullets={program.bullets}
              href={`/programs/${program.slug}`}
              image={program.image}
              accent={program.accent}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </Section>

      {/* Scale band */}
      <Section tone="ink" aria-labelledby="scale-heading">
        <Reveal className="max-w-3xl">
          <h2 id="scale-heading" className="text-3xl font-extrabold sm:text-4xl">
            The scale of the barrier
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {scaleStats.map((s, i) => (
            <Reveal key={s.value} delay={i * 80}>
              <StatBlock
                value={s.value}
                body={s.body}
                source={s.source}
                tone={i % 2 === 0 ? "coral" : "teal"}
                onDark
              />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 font-mono text-xs text-muted-dark/80">
          Sources: World Health Organization, UNESCO.
        </p>
      </Section>

      <CtaBand
        title="Don't see your community here?"
        body="Tell us where the barrier is. We'll tell you how we can help remove it."
        links={[{ label: "Get in touch", href: "/contact" }]}
      />
      <NewsletterBand />
    </>
  );
}
