import * as React from "react";
import { cn } from "@/lib/utils";

/** Max-width 1180px content wrapper with responsive horizontal padding. */
export function Container({
  className,
  as: Comp = "div",
  ...props
}: React.ComponentProps<"div"> & { as?: React.ElementType }) {
  return (
    <Comp
      className={cn("mx-auto w-full max-w-content px-5 sm:px-8 lg:px-16", className)}
      {...props}
    />
  );
}

/** Uppercase eyebrow label. */
export function Eyebrow({
  className,
  tone = "coral",
  ...props
}: React.ComponentProps<"p"> & { tone?: "coral" | "teal" | "muted" }) {
  const color =
    tone === "coral"
      ? "text-coral-text"
      : tone === "teal"
        ? "text-teal-text"
        : "text-muted";
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.12em]",
        color,
        className,
      )}
      {...props}
    />
  );
}
