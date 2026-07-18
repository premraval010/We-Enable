import type { Metadata } from "next";
import { BadgeCheck, Users, LineChart, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/Reveal";
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Partnerships, inclusion works better with you in it",
  description:
    "Corporations, governments, and foundations partner with WeEnable to turn commitments into measurable, reportable change. Corporate tiers, government tracks, and how we work.",
  path: "/partnerships",
});

const valueProps = [
  {
    icon: BadgeCheck,
    title: "A credible mandate",
    body: "Inclusion backed by evidence and standards, not slogans, something your board and the public can trust.",
  },
  {
    icon: Users,
    title: "Access to talent",
    body: "A pipeline of capable, overlooked people, and the workplace changes that let them do their best work.",
  },
  {
    icon: LineChart,
    title: "Measurable impact",
    body: "Real-time reporting tracked to the program you fund. You get evidence, not just a thank-you letter.",
  },
];

const tiers = [
  {
    name: "Ally",
    highlight: false,
    features: ["Employee volunteering", "Awareness campaigns", "In-kind support"],
  },
  {
    name: "Champion",
    highlight: true,
    tag: "Most common",
    features: [
      "Program co-funding",
      "Hiring pipeline access",
      "Quarterly impact reporting",
    ],
  },
  {
    name: "Founding Partner",
    highlight: false,
    tag: "By conversation",
    features: [
      "Co-design programs",
      "Technology partnership",
      "Joint public commitments",
    ],
  },
];

const process = [
  { n: "01", title: "Discovery", body: "We learn your goals, constraints, and where inclusion can move the needle." },
  { n: "02", title: "Design", body: "We co-design a program with clear metrics and a delivery plan." },
  { n: "03", title: "Launch", body: "We deliver, training, hiring, technology, or policy, on the ground." },
  { n: "04", title: "Report", body: "You get evidence, not just a thank-you letter. Reported openly, on schedule." },
];

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Partnerships", path: "/partnerships" },
        ])}
      />
      <PageHero
        eyebrow="Partner with us"
        title="Inclusion works better with you in it"
        intro="Corporations, governments, and foundations partner with WeEnable to turn commitments into measurable, reportable change."
      />

      {/* Value props */}
      <Section tone="paper" aria-label="Why partner">
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="rounded-card border border-border bg-surface p-8"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-coral/10 text-coral-text">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h2 className="mt-5 text-xl font-extrabold">{v.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Corporate tiers */}
      <Section tone="surface" aria-labelledby="corporate-heading">
        <div id="corporate" className="scroll-mt-24">
          <Reveal className="max-w-3xl">
            <h2 id="corporate-heading" className="text-3xl font-extrabold sm:text-4xl">
              Corporate partnership
            </h2>
            <p className="mt-4 text-lg text-muted">
              Three ways in, each with reportable outcomes.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal
                key={tier.name}
                delay={i * 80}
                className={`flex flex-col rounded-card border p-8 ${
                  tier.highlight
                    ? "border-coral bg-paper ring-1 ring-coral"
                    : "border-border bg-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-extrabold">{tier.name}</h3>
                  {tier.tag ? (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                        tier.highlight ? "bg-coral text-ink" : "bg-surface text-muted"
                      }`}
                    >
                      {tier.tag}
                    </span>
                  ) : null}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal-text" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Government & foundations */}
      <Section tone="paper" aria-labelledby="government-heading">
        <div id="government" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 id="government-heading" className="text-3xl font-extrabold sm:text-4xl">
                Infrastructure for public inclusion policy
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Governments and foundations work with us to make inclusion durable, 
                built into standards, procurement, and law rather than dependent on
                the next budget cycle.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Policy research and accessibility standards",
                  "Grant-funded program design and delivery",
                  "Independent monitoring and evaluation",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px]">
                    <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal-text" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="rounded-card-lg bg-ink p-8 text-paper lg:p-12">
              <h3 className="text-xl font-extrabold">Working with national agencies</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-dark">
                We support public agencies on aging and disability inclusion, two of
                the fastest-growing priorities for governments worldwide. That means
                independent research a ministry can cite, accessibility standards that
                can be audited, program delivery with clear metrics, and evaluation
                done at arm&rsquo;s length. We name partners only once they are
                confirmed, and we put nothing to a government&rsquo;s name it has not
                agreed to.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="surface" aria-labelledby="process-heading">
        <Reveal className="max-w-3xl">
          <h2 id="process-heading" className="text-3xl font-extrabold sm:text-4xl">
            How partnership works
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <p className="font-heading text-4xl font-extrabold text-coral-text">{s.n}</p>
              <h3 className="mt-3 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Inquiry form */}
      <Section tone="ink" aria-labelledby="inquiry-heading">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 id="inquiry-heading" className="text-3xl font-extrabold text-paper sm:text-4xl">
              Start a partnership
            </h2>
            <p className="mt-4 text-lg text-muted-dark">
              Tell us who you are and what you want to build. We&rsquo;ll take it from there.
            </p>
            <div className="mt-8 rounded-card-lg bg-paper p-6 text-ink sm:p-8">
              <PartnershipForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
