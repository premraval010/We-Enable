import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { org } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of use",
  description:
    "The terms that govern your use of the WeEnable website, donations, volunteering and accounts, intellectual property, and the usual disclaimers.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of use", path: "/terms" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        intro="The plain-language terms for using this site, giving, and volunteering with us."
      />

      <Section tone="paper" aria-label="Terms of use">
        <Reveal className="max-w-3xl space-y-10">
          <p className="text-sm font-semibold text-muted">
            Last updated:{" "}
            <time dateTime="2026-07-18">18 July 2026</time>
          </p>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Use of the site
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                You are welcome to use this site to learn about our work, give,
                volunteer, and get in touch. In return, please use it lawfully and
                do not attempt to disrupt it, misuse it, or access it in ways it
                was not designed for. We may update or suspend parts of the site as
                the work evolves.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Donations</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Donations are processed securely through our payment provider. Every
                gift is tracked to the program you choose, and you receive a receipt.
                You can change or cancel a recurring gift at any time. Where a gift
                is refundable, we will process a refund promptly on request. Tax
                treatment depends on your country of residence.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Volunteering &amp; accounts
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                If you volunteer or create an account, you agree to give accurate
                information and to keep your login details secure. You are
                responsible for activity under your account. We may pause or close
                an account that is misused or that puts the people in our programs
                at risk.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Intellectual property
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                The content on this site, text, design, logos, and images, belongs
                to WeEnable or its licensors, unless stated otherwise. You may share
                and quote it with attribution. You may not reuse our branding or
                present our work as your own without our written permission.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Liability &amp; disclaimer
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We work to keep the site accurate and available, but we provide it
                as is. Some pages link to external organisations we do not control,
                and we are not responsible for their content. To the extent the law
                allows, we are not liable for loss arising from your use of the site
                or reliance on its content.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Changes</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We may update these terms as our work and the law change. When we do,
                we will revise the date at the top of this page. Continuing to use
                the site after a change means you accept the updated terms.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Contact</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Questions about these terms? Email{" "}
                <a
                  href={`mailto:${org.emails.legal}`}
                  className="font-semibold text-teal-text underline underline-offset-4"
                >
                  {org.emails.legal}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
