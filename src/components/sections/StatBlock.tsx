"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type StatBlockProps = {
  value: string;
  body: string;
  source?: string;
  /** Visual tone for the numeral. */
  tone?: "coral" | "teal" | "ink" | "paper";
  onDark?: boolean;
};

type Parsed = { target: number; decimals: number; suffix: string };

/** Split "1.3B" → { target: 1.3, decimals: 1, suffix: "B" }. Null if not numeric-led. */
function parseValue(value: string): Parsed | null {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (!match) return null;
  const numeric = parseFloat(match[1].replace(/,/g, ""));
  if (Number.isNaN(numeric)) return null;
  const decimals = (match[1].split(".")[1] ?? "").length;
  return { target: numeric, decimals, suffix: match[2] };
}

function format(parsed: Parsed, n: number) {
  return (
    n.toLocaleString("en-US", {
      minimumFractionDigits: parsed.decimals,
      maximumFractionDigits: parsed.decimals,
    }) + parsed.suffix
  );
}

export function StatBlock({
  value,
  body,
  source,
  tone = "coral",
  onDark = false,
}: StatBlockProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const parsed = React.useMemo(() => parseValue(value), [value]);
  // Initial (and server-rendered) display is the REAL number, so crawlers,
  // no-JS visitors, and screen readers never see a meaningless "0". Motion-OK
  // users get a count-up on scroll; the value simply animates up to itself.
  const [display, setDisplay] = React.useState(
    parsed ? format(parsed, parsed.target) : value,
  );

  React.useEffect(() => {
    const node = ref.current;
    if (!node || !parsed) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // keep the real number, no animation

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();
          const duration = 1400;
          let start: number | null = null;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setDisplay(format(parsed, parsed.target * eased));
            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(format(parsed, parsed.target));
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [parsed]);

  // On dark backgrounds the bright accents clear contrast; on light backgrounds
  // large numerals use the darkened -text tokens to meet WCAG (≥3:1 large text).
  const numeralColor = {
    coral: onDark ? "text-coral" : "text-coral-text",
    teal: onDark ? "text-teal" : "text-teal-text",
    ink: "text-ink",
    paper: "text-paper",
  }[tone];

  return (
    <div ref={ref}>
      <div
        className={cn(
          "font-heading text-6xl font-extrabold leading-none tracking-tight lg:text-7xl",
          numeralColor,
        )}
      >
        {display}
      </div>
      <p
        className={cn(
          "mt-5 text-lg leading-relaxed",
          onDark ? "text-muted-dark" : "text-muted",
        )}
      >
        {body}
      </p>
      {source ? (
        <p
          className={cn(
            "mt-4 font-mono text-xs",
            onDark ? "text-muted-dark" : "text-muted",
          )}
        >
          Source: {source}
        </p>
      ) : null}
    </div>
  );
}
