import * as React from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Tone = "paper" | "surface" | "ink";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  ink: "on-ink bg-ink text-paper",
};

/** Standard vertical rhythm section with optional background tone. */
export function Section({
  tone = "paper",
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  tone?: Tone;
  containerClassName?: string;
}) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-28", toneClass[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function ChapterHeading({
  chapter,
  label,
  onDark = false,
  className,
}: {
  chapter: string;
  label: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("flex flex-wrap items-center gap-3", className)}>
      <span
        className={cn(
          "font-heading text-sm font-extrabold uppercase tracking-[0.12em]",
          onDark ? "text-coral" : "text-coral-text",
        )}
      >
        Chapter {chapter}
      </span>
      <span aria-hidden="true" className={onDark ? "text-border-dark" : "text-border"}>
        /
      </span>
      <span
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.12em]",
          onDark ? "text-muted-dark" : "text-muted",
        )}
      >
        {label}
      </span>
    </p>
  );
}
