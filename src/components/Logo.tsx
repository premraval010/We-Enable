import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "light" for dark backgrounds (Paper wordmark), "dark" for light backgrounds (Ink wordmark). */
  variant?: "light" | "dark";
  /** Wordmark font size in px. Mark scales with it. */
  size?: number;
  href?: string | null;
  className?: string;
};

/**
 * "The Threshold" mark + wordmark. Exact SVG geometry (120-unit grid), never
 * redraw: an arch drawn as one continuous stroke with two arms set inside it,
 * so an E (and a W's rhythm) is discovered rather than announced.
 * The mark is always coral; "We" follows variant, "Enable" is always coral.
 */
export function ThresholdMark({
  size = 26,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <g fill="none" stroke="var(--color-coral)">
        <path d="M26 106V57a34 34 0 0 1 68 0v49" strokeWidth="13" />
        <path d="M33 63H72" strokeWidth="11" />
        <path d="M33 87H72" strokeWidth="11" />
      </g>
    </svg>
  );
}

export function Logo({
  variant = "dark",
  size = 22,
  href = "/",
  className,
}: LogoProps) {
  const markSize = Math.round(size * 1.28);
  const weColor = variant === "light" ? "text-paper" : "text-ink";

  const content = (
    <span
      className={cn("inline-flex items-center", className)}
      style={{ gap: Math.round(size * 0.28) }}
    >
      <ThresholdMark size={markSize} />
      <span
        className={cn("font-heading font-extrabold tracking-[-0.01em]", weColor)}
        style={{ fontSize: size, lineHeight: 1 }}
      >
        We<span className="text-coral">Enable</span>
      </span>
    </span>
  );

  if (href === null) return content;

  return (
    <Link
      href={href}
      aria-label="WeEnable, home"
      className="inline-flex items-center rounded-md focus-visible:outline-2"
    >
      {content}
    </Link>
  );
}
