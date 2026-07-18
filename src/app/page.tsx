import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { Section, ChapterHeading } from "@/components/sections/Section";
import { StatBlock } from "@/components/sections/StatBlock";
import { ProgramRow } from "@/components/sections/ProgramRow";
import { CtaTriplet } from "@/components/sections/CtaTriplet";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { IconReader, IconMatching, IconReporting } from "@/components/illustrations";
import { getProgram } from "@/content/programs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  description:
    "WeEnable is a global movement removing the barriers between ability and opportunity — across disability, aging, caregiving, employment, digital access, policy, sport, and the arts.",
  path: "/",
});

// First four programs, so the row numbering reads 01–04 sequentially (no gap).
// Digital & AI Accessibility is spotlighted separately in the Platform chapter.
const homepagePrograms = [
  "people-with-disabilities",
  "adaptive-sports",
  "senior-citizens",
  "caregivers",
].map((slug) => getProgram(slug)!);

const platformCards = [
  {
    Icon: IconReader,
    title: "AI Accessibility Assistant",
    body: "Reads documents aloud, describes images, and translates language and intent in real time.",
  },
  {
    Icon: IconMatching,
    title: "Volunteer & Employment Matching",
    body: "Connects skills and time to the roles and employers that need them most, instantly.",
  },
  {
    Icon: IconReporting,
    title: "Real-Time Impact Reporting",
    body: "Every partner and donor sees exactly where support goes, and what it changes.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Chapter 01 — The Barrier */}
      <Section tone="ink" aria-labelledby="ch01">
        <Reveal>
          <ChapterHeading chapter="01" label="The Barrier" onDark />
          <h2 id="ch01" className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            These aren&rsquo;t stories about people who can&rsquo;t. They&rsquo;re
            stories about systems that didn&rsquo;t.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
          <Reveal>
            <StatBlock
              tone="coral"
              onDark
              value="1.3B"
              body="people live with a significant disability — roughly one in six of us, at some point in life."
              source="World Health Organization"
            />
          </Reveal>
          <Reveal delay={120}>
            <StatBlock
              tone="teal"
              onDark
              value="9/10"
              body="children with disabilities in the developing world are still out of school — not for lack of ability, but of access."
              source="UNESCO"
            />
          </Reveal>
          <Reveal delay={240}>
            <StatBlock
              tone="coral"
              onDark
              value="1 in 10"
              body="is roughly how many of the 75 million people who need a wheelchair actually have access to one."
              source="World Health Organization"
            />
          </Reveal>
        </div>
      </Section>

      {/* Chapter 02 — The Shift */}
      <Section tone="paper" aria-labelledby="ch02">
        <Reveal className="mx-auto max-w-3xl text-center">
          <ChapterHeading chapter="02" label="The Shift" className="justify-center" />
          <h2 id="ch02" className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            We stopped asking the world to feel sorry. We started asking it to
            build better.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Dignity instead of dependency. Systems instead of sympathy. Access
            designed in from the first draft, not bolted on after the complaints
            start. That reframing is the whole difference between a charity and a
            movement — and it&rsquo;s the only version of this work we&rsquo;re
            interested in doing.
          </p>
        </Reveal>

        {/* Three-image mosaic with staggered offsets */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            {
              src: "/images/mosaic-1.jpg",
              alt: "People connecting in a community space, engaged in conversation.",
              offset: "sm:mt-0",
            },
            {
              src: "/images/mosaic-2.jpg",
              alt: "Hands using assistive technology on a laptop, close-up.",
              offset: "sm:mt-10",
            },
            {
              src: "/images/mosaic-3.jpg",
              alt: "An everyday moment of independence in a bright home setting.",
              offset: "sm:mt-4",
            },
          ].map((m, i) => (
            <Reveal
              key={m.src}
              delay={i * 100}
              className={`relative aspect-[3/4] overflow-hidden rounded-image ${m.offset}`}
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Chapter 03 — Where It Started */}
      <Section tone="paper" aria-labelledby="ch03" className="pt-0 sm:pt-0 lg:pt-0">
        <Reveal className="overflow-hidden rounded-card-lg bg-ink text-paper">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="order-2 p-8 sm:p-12 lg:order-1 lg:p-16">
              <ChapterHeading chapter="03" label="Where It Started" onDark />
              <h2 id="ch03" className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                A playing field, not a clinic
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-dark">
                A handful of professionals refused to accept that a diagnosis
                should decide a life&rsquo;s ceiling. Their first programme
                wasn&rsquo;t treatment — it was adaptive sports, competition for
                people the world assumed couldn&rsquo;t compete. That one act
                became Creating Abilities, now the founding programme inside
                WeEnable.
              </p>
              <Link
                href="/about#origin"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-coral transition-all hover:gap-3"
              >
                Read the full story
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="relative order-1 min-h-64 lg:order-2 lg:min-h-[520px]">
              <Image
                src="/images/origin.jpg"
                alt="An adaptive athlete in action on the court, focused and competitive."
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Chapter 04 — The Work */}
      <Section tone="surface" aria-labelledby="ch04">
        <Reveal className="max-w-3xl">
          <ChapterHeading chapter="04" label="The Work" />
          <h2 id="ch04" className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Eight programs, each answering one stubborn statistic
          </h2>
        </Reveal>
        <div className="mt-16 space-y-20 lg:space-y-28">
          {homepagePrograms.map((program, i) => (
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
        <Reveal className="mt-16 flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/programs">See all eight programs</Link>
          </Button>
        </Reveal>
      </Section>

      {/* Chapter 05 — Proof */}
      <Section tone="paper" aria-labelledby="ch05">
        <Reveal className="overflow-hidden rounded-card-lg border border-border bg-surface">
          <div className="grid items-stretch gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="relative min-h-72 lg:min-h-full">
              <Image
                src="/images/story-ananya.jpg"
                alt="Ananya working at a computer with an adaptive keyboard, focused on her screen."
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-12 lg:p-16">
              <ChapterHeading chapter="05" label="Proof" />
              <blockquote className="mt-6">
                <p id="ch05" className="font-heading text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
                  &ldquo;I never needed anyone to feel sorry for me. I needed a
                  keyboard that understood how I type, and a manager who
                  understood the rest.&rdquo;
                </p>
                <footer className="mt-6 text-[15px] font-semibold text-muted">
                  Ananya — Employment &amp; Livelihoods, Bengaluru
                </footer>
              </blockquote>
              <Link
                href="/stories"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-coral-text transition-all hover:gap-3"
              >
                Read the stories
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Chapter 06 — The Platform */}
      <Section tone="ink" aria-labelledby="ch06">
        <Reveal className="max-w-3xl">
          <ChapterHeading chapter="06" label="The Platform" onDark />
          <h2 id="ch06" className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Technology is how one program becomes a million
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {platformCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 90}
              className="glass-card rounded-card p-8"
            >
              <card.Icon className="size-11" />
              <h3 className="mt-6 text-xl font-extrabold text-paper">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-dark">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Chapter 07 — Who's With Us */}
      <Section tone="paper" aria-label="Partners">
        <Reveal className="mx-auto max-w-4xl">
          <ChapterHeading chapter="07" label="Who's With Us" className="justify-center" />
          <div className="mt-10">
            <PartnerStrip />
          </div>
        </Reveal>
      </Section>

      {/* Chapter 08 — Join */}
      <Section tone="surface" aria-labelledby="ch08">
        <Reveal className="mx-auto max-w-3xl text-center">
          <ChapterHeading chapter="08" label="Join" className="justify-center" />
          <h2 id="ch08" className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            There&rsquo;s a place for you in this
          </h2>
        </Reveal>
        <div className="mt-12">
          <CtaTriplet />
        </div>
      </Section>

      <NewsletterBand />
    </>
  );
}
