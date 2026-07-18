import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { resourceGroups } from "@/content/resources";

export const metadata: Metadata = buildMetadata({
  title: "Resources — the research and tools we point to most",
  description:
    "A curated library of the reports, standards, and services we send people to most often — from the WHO and UNESCO to government disability agencies.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="The research and tools we point people to most often."
        intro="Trusted, established sources on disability, aging, employment, and access — the ones we reach for when someone needs a solid starting point."
      />

      <Section tone="paper" aria-label="Curated resources">
        <div className="space-y-16 lg:space-y-20">
          {resourceGroups.map((group) => (
            <div key={group.title}>
              <Reveal className="max-w-3xl">
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  {group.title}
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {group.resources.map((resource, i) => (
                  <Reveal key={resource.href} delay={i * 60}>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-card border border-border bg-surface p-7 transition-colors hover:border-border-dark"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-extrabold leading-snug">
                          {resource.title}
                        </h3>
                        <ExternalLink
                          aria-hidden="true"
                          className="mt-1 size-5 shrink-0 text-teal-text transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                      <p className="mt-2 text-sm font-semibold text-teal-text">
                        {resource.org}
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">
                        {resource.description}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Can't find what you need?"
        body="Tell us what you're looking for and we'll point you to the right source — or the right program."
        links={[{ label: "Get in touch", href: "/contact" }]}
      />
      <NewsletterBand />
    </>
  );
}
