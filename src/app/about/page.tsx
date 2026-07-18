import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { leadership } from "@/content/leadership";

export const metadata: Metadata = buildMetadata({
  title: "About, from Creating Abilities to a global movement",
  description:
    "We started helping individuals adapt to a world with barriers. We're becoming an organisation that redesigns the world so the barriers stop existing. Our story, mission, and leadership.",
  path: "/about",
});

const values = [
  {
    title: "Dignity, not dependency",
    body: "We build independence, not reliance. Every program measures its success by how little of us people eventually need.",
  },
  {
    title: "Systems, not sympathy",
    body: "We treat exclusion as a design failure to be fixed, not a misfortune to be pitied.",
  },
  {
    title: "Access by default",
    body: "Access is designed in from the first draft, never bolted on after the complaints start.",
  },
  {
    title: "Partnership over pity",
    body: "We work with people and organisations as equals building something, not as donors rescuing victims.",
  },
  {
    title: "Scale, not slogans",
    body: "Every program is built to prove a model others can adopt. Reach matters more than rhetoric.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="Our story"
        title="From Creating Abilities to a global movement"
        intro="We started as an organisation that helped individuals adapt to a world with barriers. We're becoming one that redesigns the world so the barriers stop existing."
      />

      {/* Origin narrative */}
      <Section tone="paper" aria-labelledby="origin-heading">
        <div id="origin" className="scroll-mt-24">
          <Reveal className="mx-auto max-w-3xl">
            <h2 id="origin-heading" className="text-3xl font-extrabold sm:text-4xl">
              Where it started
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
              <p>
                It began with a handful of professionals who kept meeting the same
                wall. Person after person arrived with ability, ambition, and a
                diagnosis the world had already decided was the end of the story.
                The wall was never the person. It was everything built around them.
              </p>
              <p>
                Their first refusal was linguistic. They threw out the language of
                welfare, the vocabulary of helping, sheltering, and doing-for, and
                replaced it with the language of productivity: skills, employment,
                independence, participation. Words change what you build. These
                words pointed at a life, not a condition.
              </p>
              <p>
                Their first programme was a playing field, not a clinic. Adaptive
                sport, real competition for people the world assumed couldn&rsquo;t
                compete, proved the whole thesis in public. Give someone the right
                equipment and a fair contest, and the only question left is how
                well they play. That work became Creating Abilities.
              </p>
              <p>
                In time, the mission outgrew a single name. Helping individuals adapt
                to a broken world was never going to be enough; the world itself had
                to be redesigned. So Creating Abilities became the founding programme
                inside something larger, WeEnable, a movement built to remove the
                barriers between ability and opportunity, everywhere, at scale.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section tone="surface" aria-label="Mission and vision">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-card border border-border bg-paper p-8 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-coral-text">
              Mission
            </p>
            <p className="mt-5 font-heading text-2xl font-extrabold leading-snug sm:text-3xl">
              To remove the barriers that stand between ability and opportunity,
              for every person, in every country.
            </p>
          </Reveal>
          <Reveal
            delay={100}
            className="rounded-card border border-border bg-paper p-8 lg:p-12"
          >
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-text">
              Vision
            </p>
            <p className="mt-5 font-heading text-2xl font-extrabold leading-snug sm:text-3xl">
              A world designed for everyone from the start, where inclusion is
              the default, not the exception.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="paper" aria-labelledby="values-heading">
        <Reveal className="max-w-3xl">
          <h2 id="values-heading" className="text-3xl font-extrabold sm:text-4xl">
            Five commitments, no exceptions
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 70}
              className="rounded-card border border-border bg-surface p-7"
            >
              <p className="font-mono text-sm text-coral-text">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-extrabold">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="surface" aria-labelledby="leadership-heading">
        <div id="leadership" className="scroll-mt-24">
          <Reveal className="max-w-3xl">
            <h2 id="leadership-heading" className="text-3xl font-extrabold sm:text-4xl">
              The people building it
            </h2>
            <p className="mt-4 text-lg text-muted">
              A team that treats exclusion as a solvable design problem.
            </p>
          </Reveal>
          {leadership.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((leader, i) => (
                <Reveal
                  key={leader.name}
                  delay={i * 70}
                  className="rounded-card border border-border bg-paper p-7"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-14 items-center justify-center rounded-full bg-ink font-heading text-lg font-extrabold text-paper"
                  >
                    {leader.initials}
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold">{leader.name}</h3>
                  <p className="text-sm font-semibold text-teal-text">{leader.role}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {leader.bio}
                  </p>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mt-10 rounded-card border border-border bg-paper p-8">
              <p className="text-[15px] leading-relaxed text-muted">
                Our leadership team will be introduced here shortly. In the meantime,
                reach us at{" "}
                <a
                  href="mailto:hello@weenable.org"
                  className="font-semibold text-teal-text underline-offset-4 hover:underline"
                >
                  hello@weenable.org
                </a>
                .
              </p>
            </Reveal>
          )}
        </div>
      </Section>

      <CtaBand
        title="Want to help build this?"
        body="We're hiring people who solve exclusion, and partnering with organisations who want measurable inclusion."
        links={[
          { label: "See open roles", href: "/careers" },
          { label: "Explore partnership", href: "/partnerships" },
        ]}
      />
      <NewsletterBand />
    </>
  );
}
