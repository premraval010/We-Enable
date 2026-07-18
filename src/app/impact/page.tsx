import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { StatBlock } from "@/components/sections/StatBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { orgMetrics } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Impact, measured honestly, reported openly",
  description:
    "We publish what worked, what didn't, and what we're changing, the same standard we ask of our partners. Our reach, our results, and our full impact report.",
  path: "/impact",
});

const quoteCards = [
  {
    quote:
      "I never needed anyone to feel sorry for me. I needed a keyboard that understood how I type, and a manager who understood the rest.",
    name: "Yui",
    place: "Employment & Livelihoods · Tokyo",
  },
  {
    quote: "My grandmother video-calls me every Sunday now. That's the whole program, working.",
    name: "Grace's family",
    place: "Senior Citizens · Nairobi",
  },
  {
    quote: "Respite care gave me back two hours a week that were just mine.",
    name: "Marisa",
    place: "Caregivers · São Paulo",
  },
];

export default function ImpactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Impact", path: "/impact" },
        ])}
      />
      <PageHero
        eyebrow="Impact"
        title="Measured honestly, reported openly"
        intro="We publish what worked, what didn't, and what we're changing, the same standard we ask of our partners."
      />

      {/* Global context */}
      <Section tone="paper" aria-labelledby="context-heading">
        <Reveal className="max-w-3xl">
          <h2 id="context-heading" className="text-3xl font-extrabold sm:text-4xl">
            The problem, in context
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:gap-16">
          <Reveal>
            <StatBlock
              value="1.3B"
              body="people live with a significant disability, roughly one in six of us."
              source="World Health Organization"
              tone="coral"
            />
          </Reveal>
          <Reveal delay={120}>
            <StatBlock
              value="9/10"
              body="children with disabilities in the developing world are still out of school."
              source="UNESCO"
              tone="teal"
            />
          </Reveal>
        </div>
      </Section>

      {/* WeEnable so far */}
      <Section tone="ink" aria-labelledby="sofar-heading">
        <Reveal className="max-w-3xl">
          <h2 id="sofar-heading" className="text-3xl font-extrabold sm:text-4xl">
            WeEnable, so far
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-dark">
            We run{" "}
            <span className="font-semibold text-paper">
              {orgMetrics.activePrograms} programs
            </span>{" "}
            across disability, aging, caregiving, employment, digital access,
            policy, adaptive sport, and the arts. We would rather publish verified
            numbers than round ones, so our headline reach, countries, and partner
            figures will appear here as our first impact report is finalised.
          </p>
        </Reveal>
      </Section>

      {/* Stories, not statistics */}
      <Section tone="paper" aria-labelledby="stories-heading">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-coral-text">
            Stories, not statistics
          </p>
          <h2 id="stories-heading" className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Behind every number is a person
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quoteCards.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 90}
              className="flex flex-col rounded-card border border-border bg-surface p-8"
            >
              <p className="flex-1 font-heading text-lg font-extrabold leading-snug">
                &ldquo;{c.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-muted">{c.place}</p>
              </footer>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Report */}
      <Section tone="surface" aria-labelledby="reports-heading">
        <div id="reports" className="scroll-mt-24">
          <Reveal className="rounded-card-lg border border-border bg-paper p-8 lg:p-12">
            <h2 id="reports-heading" className="text-2xl font-extrabold sm:text-3xl">
              Our first impact report
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              We&rsquo;re preparing our first full impact report, methodology,
              program-by-program results, and financials, including what
              didn&rsquo;t work and what we&rsquo;re changing. It will be published
              here. Want a copy the day it lands?{" "}
              <a
                href="mailto:hello@weenable.org?subject=Impact report"
                className="font-semibold text-teal-text underline-offset-4 hover:underline"
              >
                Ask us to send it
              </a>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Hold us to it"
        body="Transparency is a promise, not a page. Partner with us, or see where your support goes."
        links={[
          { label: "Partner with us", href: "/partnerships" },
          { label: "Donate", href: "/donate" },
        ]}
      />
      <NewsletterBand />
    </>
  );
}
