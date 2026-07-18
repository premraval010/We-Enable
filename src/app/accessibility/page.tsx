import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { org } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility — held to our own standard",
  description:
    "We target WCAG 2.2 AA on every page, and AAA where content allows. What's built in, where we're still working, and how to tell us when we fall short.",
  path: "/accessibility",
});

const builtIn = [
  "Full keyboard navigation, with a visible focus indicator on every interactive element.",
  "Semantic structure and labelling that screen readers can navigate and announce.",
  "A minimum 4.5:1 contrast ratio between text and its background.",
  "Text that resizes up to 200% without loss of content or function.",
  "Captions and transcripts for the audio and video we publish.",
  "Reduced-motion support that respects your system preference.",
];

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility" },
        ])}
      />
      <PageHero
        eyebrow="Accessibility statement"
        title="Held to our own standard"
        intro="We build the case for accessible systems everywhere. This site is where we prove we mean it."
      />

      <Section tone="paper" aria-label="Accessibility statement">
        <Reveal className="max-w-3xl space-y-12">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              WeEnable targets WCAG 2.2 AA on every page, and AAA wherever the
              content allows. Access is designed in from the first draft, never
              bolted on after the complaints start. We test with real assistive
              technology, not only automated checkers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              What&rsquo;s built in
            </h2>
            <ul className="mt-6 space-y-3">
              {builtIn.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-lg leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-2 shrink-0 rounded-full bg-coral"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Where we&rsquo;re still working
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We are honest about the gaps. Some older documents, embedded
                third-party content, and media published before our current
                standard do not yet fully meet it. We are working through them,
                and we prioritise the fixes that remove the most friction for the
                most people first. Accessibility is a standard we hold, not a box
                we have finished ticking.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Tell us where we fall short
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                If you hit a barrier anywhere on this site, we want to know. Email{" "}
                <a
                  href={`mailto:${org.emails.accessibility}`}
                  className="font-semibold text-teal-text underline underline-offset-4"
                >
                  {org.emails.accessibility}
                </a>{" "}
                and tell us what happened and where. We treat access reports as
                bugs to fix, and we will get back to you.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
