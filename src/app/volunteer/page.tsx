import type { Metadata } from "next";
import { Wrench, GraduationCap, CalendarDays, Laptop } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/Reveal";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Volunteer — give your time and skill, not just your sympathy",
  description:
    "We match what you're good at to where it's needed most — in hours, not months. Skills-based projects, mentorship, events, and remote micro-tasks.",
  path: "/volunteer",
});

const paths = [
  {
    icon: Wrench,
    title: "Skills-based projects",
    body: "Put professional expertise to work — engineering, design, research, comms — on a defined project with a real outcome.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    body: "Coach a job seeker through interviews, or mentor someone building independence. One hour a week changes a trajectory.",
  },
  {
    icon: CalendarDays,
    title: "Events & campaigns",
    body: "Show up in person for community days, summits, and drives — the moments where the movement meets people.",
  },
  {
    icon: Laptop,
    title: "Remote micro-tasks",
    body: "Test accessibility, translate, transcribe, or review — small, remote tasks that add up across thousands of hands.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us your skills",
    body: "A five-minute profile. No résumé required — just what you're good at and when you're free.",
  },
  {
    n: "02",
    title: "We match you",
    body: "Our matching connects your skills and time to the roles and communities that need them most.",
  },
  {
    n: "03",
    title: "Start contributing",
    body: "You begin on real work quickly — hours, not months — with support the whole way.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Volunteer", path: "/volunteer" },
        ])}
      />
      <PageHero
        eyebrow="Volunteer"
        title="Give your time and skill, not just your sympathy"
        intro="We match what you're good at to where it's needed most — in hours, not months."
      />

      {/* Paths */}
      <Section tone="paper" aria-labelledby="paths-heading">
        <Reveal className="max-w-3xl">
          <h2 id="paths-heading" className="text-3xl font-extrabold sm:text-4xl">
            Four ways to help
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {paths.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.title}
                delay={i * 70}
                className="rounded-card border border-border bg-surface p-7"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-teal/10 text-teal-text">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* How matching works */}
      <Section tone="ink" aria-labelledby="matching-heading">
        <Reveal className="max-w-3xl">
          <h2 id="matching-heading" className="text-3xl font-extrabold sm:text-4xl">
            How matching works
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <p className="font-heading text-4xl font-extrabold text-coral">{s.n}</p>
              <h3 className="mt-4 text-xl font-extrabold text-paper">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-dark">{s.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 border-l-4 border-coral pl-6">
          <p className="max-w-2xl font-heading text-xl font-extrabold leading-snug text-paper sm:text-2xl">
            &ldquo;Two hours a week turned into the most useful part of my calendar.&rdquo;
          </p>
          <p className="mt-3 text-sm font-semibold text-muted-dark">
            A WeEnable Volunteer, remote
          </p>
        </Reveal>
      </Section>

      {/* Application form */}
      <Section tone="paper" aria-labelledby="apply-heading">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 id="apply-heading" className="text-3xl font-extrabold sm:text-4xl">
              Start your profile
            </h2>
            <p className="mt-4 text-lg text-muted">
              Five minutes. We&rsquo;ll take it from there.
            </p>
            <div className="mt-8">
              <VolunteerForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
