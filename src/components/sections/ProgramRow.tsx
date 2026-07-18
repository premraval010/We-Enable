import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type ProgramRowProps = {
  number: string;
  label: string;
  tagline: string;
  description: string;
  bullets?: string[];
  href: string;
  image: { src: string; alt: string };
  accent: "coral" | "teal";
  /** Reverse column order on desktop for alternating rhythm. */
  reversed?: boolean;
  priority?: boolean;
};

export function ProgramRow({
  number,
  label,
  tagline,
  description,
  bullets,
  href,
  image,
  accent,
  reversed,
  priority,
}: ProgramRowProps) {
  const accentText = accent === "coral" ? "text-coral-text" : "text-teal-text";
  return (
    <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={cn("order-1", reversed ? "lg:order-2" : "lg:order-1")}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-image">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
            priority={priority}
          />
        </div>
      </div>
      <div className={cn("order-2", reversed ? "lg:order-1" : "lg:order-2")}>
        <p className={cn("font-mono text-sm font-semibold", accentText)}>
          {number} / {label}
        </p>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight lg:text-4xl">
          {tagline}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        {bullets && bullets.length > 0 ? (
          <ul className="mt-5 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[15px] text-ink">
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-2 size-1.5 shrink-0 rounded-full",
                    accent === "coral" ? "bg-coral" : "bg-teal",
                  )}
                />
                {b}
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          href={href}
          className={cn(
            "mt-6 inline-flex items-center gap-2 font-semibold transition-colors hover:gap-3",
            accentText,
          )}
        >
          Explore this program
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </Reveal>
  );
}
