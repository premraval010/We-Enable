import Link from "next/link";
import { HandHeart, Users, Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: HandHeart,
    title: "Donate",
    body: "One-time or monthly. Every gift is tracked to the program it funds.",
    cta: "Give now",
    href: "/donate",
    primary: true,
  },
  {
    icon: Users,
    title: "Volunteer",
    body: "Give skills and time. Our matching finds where they're needed most.",
    cta: "Get matched",
    href: "/volunteer",
    primary: false,
  },
  {
    icon: Handshake,
    title: "Partner",
    body: "Corporate ESG, government, or foundation — build inclusion into your mission.",
    cta: "Start a partnership",
    href: "/partnerships",
    primary: false,
  },
];

export function CtaTriplet() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <Reveal
            key={card.title}
            delay={i * 90}
            className={cn(
              "group flex flex-col rounded-card border p-8 transition-transform duration-300 hover:-translate-y-1.5",
              // Donate is the primary action — lift it visually above the others.
              card.primary
                ? "border-coral bg-paper ring-1 ring-coral"
                : "border-border bg-paper",
            )}
          >
            <span
              className={cn(
                "inline-flex size-12 items-center justify-center rounded-full",
                card.primary
                  ? "bg-coral text-ink"
                  : "bg-coral/10 text-coral-text",
              )}
            >
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <h3 className="mt-6 flex items-center gap-2 text-2xl font-extrabold">
              {card.title}
              {card.primary ? (
                <span className="rounded-full bg-coral px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-ink">
                  Most impact
                </span>
              ) : null}
            </h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
              {card.body}
            </p>
            <Button
              asChild
              variant={card.primary ? "primary" : "secondary"}
              size="sm"
              className="mt-6 self-start"
            >
              <Link href={card.href}>{card.cta}</Link>
            </Button>
          </Reveal>
        );
      })}
    </div>
  );
}
