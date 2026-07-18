import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/Reveal";
import { GiveForm } from "@/components/forms/GiveForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { otherWaysToGive } from "@/content/donate";
import { org } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Donate, give with confidence",
  description:
    "Every contribution is tracked to the exact program it funds. No middlemen, no vague promises. Arrange a gift by form or email while online giving is finalised.",
  path: "/donate",
});

export default function DonatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Donate", path: "/donate" },
        ])}
      />
      <PageHero
        eyebrow="Donate"
        title="Give with confidence"
        intro="Every contribution is tracked to the exact program it funds. No middlemen, no vague promises."
      />

      <Section tone="paper" aria-label="Make a gift">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          {/* Form */}
          <Reveal>
            <h2 className="text-2xl font-extrabold">Arrange your gift</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Tell us how you&rsquo;d like to give and which program to support. Our
              team will email you within two business days to complete it securely.
              One-click online checkout is on the way.
            </p>
            <div className="mt-6">
              <GiveForm />
            </div>
          </Reveal>

          {/* Aside: email + transparency */}
          <Reveal delay={100} className="space-y-6">
            <div className="rounded-card border border-border bg-surface p-6">
              <Mail aria-hidden="true" className="size-6 text-teal-text" />
              <h2 className="mt-3 text-lg font-extrabold">Prefer email?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Write to us directly and we&rsquo;ll take care of the rest.
              </p>
              <a
                href={`mailto:${org.emails.general}?subject=I'd like to donate to WeEnable`}
                className="mt-3 inline-block font-semibold text-teal-text underline-offset-4 hover:underline"
              >
                {org.emails.general}
              </a>
            </div>

            <div className="rounded-card border border-border bg-surface p-6">
              <ShieldCheck aria-hidden="true" className="size-6 text-coral-text" />
              <h2 className="mt-3 text-lg font-extrabold">Where your money goes</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                You choose the program. We track your gift to it and report back, the
                same transparency standard we ask of our partners.
              </p>
              <Link
                href="/impact#reports"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-coral-text transition-all hover:gap-3"
              >
                See our impact reports
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Other ways to give */}
      <Section tone="surface" aria-labelledby="other-heading">
        <Reveal className="max-w-3xl">
          <h2 id="other-heading" className="text-3xl font-extrabold sm:text-4xl">
            Other ways to give
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {otherWaysToGive.map((way, i) => (
            <Reveal
              key={way.title}
              delay={i * 80}
              className="flex flex-col rounded-card border border-border bg-paper p-8"
            >
              <h3 className="text-xl font-extrabold">{way.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {way.body}
              </p>
              <Link
                href={way.href}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-coral-text transition-all hover:gap-3"
              >
                {way.cta}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
