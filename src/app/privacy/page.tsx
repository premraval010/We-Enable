import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { org } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "How WeEnable collects, uses, and protects your personal data, what we gather, how we use it, who we share it with, and the rights you have.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="We collect as little as we can, use it only for what you asked, and never sell it. Here is exactly how that works."
      />

      <Section tone="paper" aria-label="Privacy policy">
        <Reveal className="max-w-3xl space-y-10">
          <p className="text-sm font-semibold text-muted">
            Last updated:{" "}
            <time dateTime="2026-07-18">18 July 2026</time>
          </p>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              What we collect
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We collect the information you give us directly, your name and
                email when you subscribe, donate, volunteer, or contact us, and
                any details you include in a message. When you make a donation,
                our payment processor handles your card details; we never see or
                store them.
              </p>
              <p>
                We also collect limited technical data automatically, such as
                your browser type and the pages you visit, so we can keep the
                site working and understand what is useful.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              How we use it
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We use your information to do the thing you came here to do: send
                the newsletter you asked for, process and receipt your donation,
                match your volunteering, answer your message, and report back on
                the impact of your support. We do not use it to profile you or to
                make decisions about you automatically.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              How we share it
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We do not sell your data, and we never will. We share it only with
                the service providers who help us operate, payment processors,
                email delivery, and hosting, and only to the extent they need it
                to do that job. We may disclose information where the law requires
                it. That is the whole list.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Your rights</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                You can ask us for a copy of the data we hold about you, correct
                it, or have it deleted. You can unsubscribe from any email with one
                click, and change or cancel a recurring donation at any time. To
                exercise any of these rights, email us and we will act on it.
              </p>
              <p>
                Depending on where you live, you may have additional rights under
                laws such as the EU/UK General Data Protection Regulation (GDPR)
                and the California Consumer Privacy Act (CCPA/CPRA). We honour those
                rights regardless of where you are based, including access,
                correction, deletion, and the right to object.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              For institutional partners
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Corporate, government, and foundation partners whose legal or
                procurement teams require a Data Processing Agreement (DPA) can
                request one from{" "}
                <a
                  href={`mailto:${org.emails.privacy}?subject=Data Processing Agreement`}
                  className="font-semibold text-teal-text underline underline-offset-4"
                >
                  {org.emails.privacy}
                </a>
                . We can also share our security posture and sub-processor list on
                request.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Cookies</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We use only the cookies needed to run the site and to understand,
                in aggregate, how it is used. We do not use advertising or
                cross-site tracking cookies. You can block cookies in your browser
                settings; the site will still work.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Contact</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Questions about your data, or want to exercise a right? Email{" "}
                <a
                  href={`mailto:${org.emails.privacy}`}
                  className="font-semibold text-teal-text underline underline-offset-4"
                >
                  {org.emails.privacy}
                </a>{" "}
                and a person will reply.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
