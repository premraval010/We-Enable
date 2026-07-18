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
 * "The Doorway" mark + wordmark. Exact SVG geometry — never redraw.
 * The mark is always coral; "We" follows variant, "Enable" is always coral.
 */
export function Logo({
  variant = "dark",
  size = 22,
  href = "/",
  className,
}: LogoProps) {
  const markSize = Math.round(size * 1.18);
  const weColor = variant === "light" ? "text-paper" : "text-ink";

  const content = (
    <span className={cn("inline-flex items-center gap-[3px]", className)}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="-3 -9 60 60"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M 6 27.5 A 21.5 21.5 0 1 1 48 27.5"
          fill="none"
          stroke="var(--color-coral)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="27.5"
          x2="6"
          y2="44"
          stroke="var(--color-coral)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <line
          x1="48"
          y1="27.5"
          x2="48"
          y2="44"
          stroke="var(--color-coral)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
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
      aria-label="WeEnable — home"
      className="inline-flex items-center rounded-md focus-visible:outline-2"
    >
      {content}
    </Link>
  );
}
