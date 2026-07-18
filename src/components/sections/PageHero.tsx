import * as React from "react";
import { Container, Eyebrow } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "paper" | "ink";
  children?: React.ReactNode;
};

/** Standard interior-page hero: eyebrow + H1 + intro paragraph. */
export function PageHero({
  eyebrow,
  title,
  intro,
  tone = "paper",
  children,
}: PageHeroProps) {
  const dark = tone === "ink";
  return (
    <section
      className={cn(
        "pt-16 sm:pt-20 lg:pt-28",
        dark ? "on-ink bg-ink pb-16 text-paper lg:pb-24" : "bg-paper pb-4",
      )}
    >
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <Eyebrow tone={dark ? "teal" : "coral"}>{eyebrow}</Eyebrow>
          ) : null}
          <h1
            className={cn(
              "mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
            )}
          >
            {title}
          </h1>
          {intro ? (
            <p
              className={cn(
                "mt-6 text-lg leading-relaxed sm:text-xl",
                dark ? "text-muted-dark" : "text-muted",
              )}
            >
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
