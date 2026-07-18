import Link from "next/link";
import { HandHeart, Users, Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: HandHeart,
    title: "Donate",
    body: "One-time or monthly. Every gift is tracked to the program it funds.",
    cta: "Give now",
    href: "/donate",
  },
  {
    icon: Users,
    title: "Volunteer",
    body: "Give skills and time. Our matching finds where they're needed most.",
    cta: "Get matched",
    href: "/volunteer",
  },
  {
    icon: Handshake,
    title: "Partner",
    body: "Corporate ESG, government, or foundation — build inclusion into your mission.",
    cta: "Start a partnership",
    href: "/partnerships",
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
            className="group flex flex-col rounded-card border border-border bg-paper p-8 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-coral/10 text-coral-text">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <h3 className="mt-6 text-2xl font-extrabold">{card.title}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
              {card.body}
            </p>
            <Button asChild variant="secondary" size="sm" className="mt-6 self-start">
              <Link href={card.href}>{card.cta}</Link>
            </Button>
          </Reveal>
        );
      })}
    </div>
  );
}
