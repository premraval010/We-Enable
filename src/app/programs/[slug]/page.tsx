import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { StatBlock } from "@/components/sections/StatBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui/container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { programs, getProgram } from "@/content/programs";
import { getStory } from "@/content/stories";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return buildMetadata({
    title: `${program.label} — ${program.tagline}`,
    description: program.summary.slice(0, 158),
    path: `/programs/${program.slug}`,
  });
}

const ctaCopy: Record<string, { title: string; body: string }> = {
  donate: {
    title: "Fund this work",
    body: "Every gift is tracked to this exact program. No middlemen, no vague promises.",
  },
  volunteer: {
    title: "Give your skills",
    body: "Our matching connects what you're good at to where this program needs it most.",
  },
  partner: {
    title: "Partner with us",
    body: "Turn commitment into measurable, reportable change alongside this program.",
  },
};

export default async function ProgramDetailPage({ params }: Params) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const story = getStory(program.relatedStorySlug);
  const accentText = program.accent === "coral" ? "text-coral-text" : "text-teal-text";
  const cta = ctaCopy[program.cta.kind];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: program.label, path: `/programs/${program.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="on-ink relative overflow-hidden bg-ink text-paper">
        <Image
          src={program.image.src}
          alt={program.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <Container className="relative z-10 py-20 lg:py-28">
          <p className={`font-mono text-sm font-semibold ${program.accent === "coral" ? "text-coral" : "text-teal"}`}>
            {program.number} / {program.label}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {program.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-dark sm:text-xl">
            {program.summary}
          </p>
        </Container>
      </section>

      {/* The barrier */}
      <Section tone="paper" aria-labelledby="barrier-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <Reveal>
            <Eyebrow tone={program.accent}>The barrier</Eyebrow>
            <div className="mt-5">
              <StatBlock
                value={program.barrier.stat}
                body={program.barrier.body}
                source={program.barrier.source}
                tone={program.accent}
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:pt-10">
            <h2 id="barrier-heading" className="text-2xl font-extrabold sm:text-3xl">
              What we do about it
            </h2>
            <div className="mt-8 space-y-8">
              {program.whatWeDo.map((item, i) => (
                <div key={item.title} className="border-l-2 border-border pl-6">
                  <p className={`font-mono text-sm ${accentText}`}>0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Related story */}
      {story ? (
        <Section tone="surface" aria-labelledby="story-heading">
          <Reveal className="overflow-hidden rounded-card-lg border border-border bg-paper">
            <div className="grid items-stretch gap-0 lg:grid-cols-2">
              <div className="relative min-h-64 lg:min-h-full">
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-12 lg:p-14">
                <Eyebrow tone="teal">A story from this program</Eyebrow>
                <h2 id="story-heading" className="mt-4 text-2xl font-extrabold sm:text-3xl">
                  {story.headline}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {story.excerpt}
                </p>
                <Link
                  href={`/stories#${story.slug}`}
                  className={`mt-6 inline-flex items-center gap-2 font-semibold ${accentText} transition-all hover:gap-3`}
                >
                  Read {story.name}&rsquo;s story
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>
      ) : null}

      {/* Relevant stat */}
      <Section tone="ink" aria-label="Program impact context">
        <Reveal className="mx-auto max-w-2xl text-center">
          <StatBlock
            value={program.stat.value}
            body={program.stat.label}
            source={program.stat.source}
            tone={program.accent}
            onDark
          />
        </Reveal>
      </Section>

      <CtaBand
        title={cta.title}
        body={cta.body}
        links={[
          { label: program.cta.label, href: program.cta.href },
          { label: "All programs", href: "/programs" },
        ]}
      />
      <NewsletterBand />
    </>
  );
}
