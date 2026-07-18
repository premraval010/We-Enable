import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, eventJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { events } from "@/content/events";

export const metadata: Metadata = buildMetadata({
  title: "Events — where the movement shows up in person",
  description:
    "Fellowships, roundtables, hackathons, and community days across every place we work. See what's coming up and where.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ])}
      />
      {events.map((event) => (
        <JsonLd
          key={event.slug}
          data={eventJsonLd({
            title: event.title,
            description: event.description,
            startDate: event.startDate,
            city: event.city,
            venue: event.venue,
          })}
        />
      ))}
      <PageHero
        eyebrow="Events"
        title="Where the movement shows up in person"
        intro="Fellowships, roundtables, hackathons, and community days — across every place we work."
      />

      <Section tone="paper" aria-label="Upcoming events">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal
              key={event.slug}
              delay={i * 80}
              as="article"
              className="flex flex-col overflow-hidden rounded-card border border-border bg-surface"
            >
              <div className="relative aspect-video overflow-hidden rounded-image">
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-paper">
                    {event.type}
                  </span>
                  <time
                    dateTime={event.startDate}
                    className="text-sm font-semibold text-teal-text"
                  >
                    {event.dateLabel}
                  </time>
                </div>
                <h2 className="mt-4 text-xl font-extrabold leading-snug">
                  {event.title}
                </h2>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin aria-hidden="true" className="size-4 shrink-0" />
                  {event.city} · {event.venue}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {event.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <NewsletterBand />
    </>
  );
}
