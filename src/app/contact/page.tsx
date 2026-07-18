import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { org } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact — talk to a person, not a form",
  description:
    "Whichever door you knock on, someone on our team answers within two business days. Reach WeEnable by email, phone, or our contact form.",
  path: "/contact",
});

const directEmails = [
  { label: "General & programs", email: org.emails.general },
  { label: "Partnerships", email: org.emails.partners },
  { label: "Media & press", email: org.emails.press },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to a person, not a form"
        intro="Whichever door you knock on, someone on our team will answer within two business days."
      />

      <Section tone="paper" aria-label="Contact form and details">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold">Send us a message</h2>
            <div className="mt-6">
              <Suspense fallback={<div className="h-96 rounded-xl bg-surface" />}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold">Direct lines</h2>
              <ul className="mt-5 space-y-4">
                {directEmails.map((d) => (
                  <li key={d.email} className="flex items-start gap-3">
                    <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal-text" />
                    <span>
                      <span className="block text-sm text-muted">{d.label}</span>
                      <a
                        href={`mailto:${d.email}`}
                        className="font-semibold text-ink underline-offset-4 hover:text-coral-text hover:underline"
                      >
                        {d.email}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-border bg-surface p-6">
              <h2 className="text-lg font-extrabold">Registered office</h2>
              <address className="mt-4 space-y-4 not-italic text-[15px] text-muted">
                <span className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-coral-text" />
                  <span>
                    {org.address.line}
                    <br />
                    {org.address.city}, {org.address.region} {org.address.postalCode}
                    <br />
                    {org.address.country}
                  </span>
                </span>
                <span className="flex items-start gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-coral-text" />
                  <span className="flex flex-col">
                    {org.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="hover:text-coral-text"
                      >
                        {p}
                      </a>
                    ))}
                  </span>
                </span>
              </address>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
