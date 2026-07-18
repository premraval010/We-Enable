import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { faqGroups, allFaqs } from "@/content/faq";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — questions, answered",
  description:
    "Straight answers for donors, volunteers, and partners — where your money goes, how matching works, and what changed when Creating Abilities became WeEnable.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        intro="Straight answers for donors, volunteers, and partners. If yours isn't here, ask us directly."
      />

      <Section tone="paper" aria-label="Frequently asked questions">
        <div className="space-y-16 lg:space-y-20">
          {faqGroups.map((group, g) => (
            <div key={group.title}>
              <Reveal className="max-w-3xl">
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  {group.title}
                </h2>
              </Reveal>
              <Reveal className="mt-6 max-w-3xl">
                <Accordion type="single" collapsible>
                  {group.items.map((item, i) => (
                    <AccordionItem key={item.question} value={`faq-${g}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Still have a question?"
        body="Tell us where the barrier is. We'll point you to the right program, partner, or person."
        links={[{ label: "Get in touch", href: "/contact" }]}
      />
      <NewsletterBand />
    </>
  );
}
