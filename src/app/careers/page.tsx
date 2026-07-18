import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { jobs, benefits } from "@/content/jobs";

export const metadata: Metadata = buildMetadata({
  title: "Careers — build the systems that build access",
  description:
    "We hire people who treat exclusion as a solvable design problem, not a fact of life. See open roles across programs, technology, partnerships, and research.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <PageHero
        eyebrow="Careers"
        title="Build the systems that build access"
        intro="We hire people who treat exclusion as a solvable design problem — not a fact of life."
      />

      {/* Open roles */}
      <Section tone="paper" aria-labelledby="roles-heading">
        <Reveal className="max-w-3xl">
          <h2 id="roles-heading" className="text-3xl font-extrabold sm:text-4xl">
            Open roles
          </h2>
        </Reveal>
        {jobs.length > 0 ? (
          <div className="mt-12 space-y-5">
            {jobs.map((job, i) => (
              <Reveal
                key={job.slug}
                delay={i * 70}
                className="flex flex-col gap-6 rounded-card border border-border bg-surface p-7 sm:flex-row sm:items-center sm:justify-between lg:p-8"
              >
                <div className="max-w-2xl">
                  <h3 className="text-xl font-extrabold">{job.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-teal-text">
                    {job.team} · {job.location} · {job.type}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {job.summary}
                  </p>
                </div>
                <Button asChild variant="secondary" size="md" className="shrink-0">
                  <Link href="/contact?topic=general">
                    Apply
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-8 max-w-2xl rounded-card border border-border bg-surface p-8">
            <p className="text-lg leading-relaxed text-muted">
              We don&rsquo;t have open roles posted right now — but we&rsquo;re always
              glad to meet people who treat exclusion as a solvable design problem.
              Tell us what you&rsquo;re good at and where you&rsquo;d remove a barrier.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact?topic=general">
                Introduce yourself
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </Reveal>
        )}
      </Section>

      {/* Benefits */}
      <Section tone="surface" aria-labelledby="benefits-heading">
        <Reveal className="max-w-3xl">
          <h2 id="benefits-heading" className="text-3xl font-extrabold sm:text-4xl">
            How we work
          </h2>
          <p className="mt-4 text-lg text-muted">
            The workplace is designed for access from the first draft — the same
            standard we ask of everyone else.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 70}
              className="rounded-card border border-border bg-paper p-7"
            >
              <h3 className="text-lg font-extrabold">{benefit.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {benefit.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Don't see your role?"
        body="Tell us what you're good at and where you'd remove a barrier. We'd rather meet the right person than fill a fixed seat."
        links={[{ label: "Get in touch", href: "/contact" }]}
      />
      <NewsletterBand />
    </>
  );
}
