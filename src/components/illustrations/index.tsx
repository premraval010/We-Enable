/**
 * Brand-matched SVG illustrations: coral/teal strokes, rounded line quality
 * echoing the Doorway mark. All decorative unless a title is provided.
 */
import * as React from "react";

type IlloProps = React.SVGProps<SVGSVGElement> & { title?: string };

function svgProps(title?: string) {
  return title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true as const };
}

const coral = "var(--color-coral)";
const teal = "var(--color-teal)";

/** Concentric doorways — the ripple: one door opening many. */
export function DoorwayRipple({ title, ...props }: IlloProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...svgProps(title)} {...props}>
      {[0, 1, 2].map((i) => {
        const s = 14 + i * 16;
        return (
          <g key={i} opacity={1 - i * 0.28}>
            <path
              d={`M ${s} 96 A ${60 - s} ${60 - s} 0 0 1 ${120 - s} 96`}
              stroke={i === 0 ? coral : teal}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <line x1={s} y1="96" x2={s} y2="108" stroke={i === 0 ? coral : teal} strokeWidth="6" strokeLinecap="round" />
            <line x1={120 - s} y1="96" x2={120 - s} y2="108" stroke={i === 0 ? coral : teal} strokeWidth="6" strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}

/** Ascending arcs — momentum, progress. */
export function AscentArcs({ title, ...props }: IlloProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...svgProps(title)} {...props}>
      <path d="M 12 100 A 24 24 0 0 1 60 100" stroke={teal} strokeWidth="6" strokeLinecap="round" />
      <path d="M 44 76 A 24 24 0 0 1 92 76" stroke={coral} strokeWidth="6" strokeLinecap="round" />
      <path d="M 72 52 A 24 24 0 0 1 120 52" stroke={teal} strokeWidth="6" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/** AI Accessibility — a document with sound waves. */
export function IconReader({ title, ...props }: IlloProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...svgProps(title)} {...props}>
      <rect x="8" y="6" width="22" height="30" rx="4" stroke={coral} strokeWidth="3" />
      <line x1="13" y1="14" x2="25" y2="14" stroke={coral} strokeWidth="3" strokeLinecap="round" />
      <line x1="13" y1="21" x2="25" y2="21" stroke={coral} strokeWidth="3" strokeLinecap="round" />
      <path d="M 34 16 A 8 8 0 0 1 34 30" stroke={teal} strokeWidth="3" strokeLinecap="round" />
      <path d="M 38 11 A 14 14 0 0 1 38 35" stroke={teal} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/** Matching — two nodes connecting. */
export function IconMatching({ title, ...props }: IlloProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...svgProps(title)} {...props}>
      <circle cx="12" cy="14" r="6" stroke={coral} strokeWidth="3" />
      <circle cx="36" cy="34" r="6" stroke={teal} strokeWidth="3" />
      <path d="M 16 18 C 24 24, 24 24, 32 30" stroke={coral} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Reporting — a bar chart glyph. */
export function IconReporting({ title, ...props }: IlloProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...svgProps(title)} {...props}>
      <line x1="10" y1="38" x2="10" y2="26" stroke={teal} strokeWidth="4" strokeLinecap="round" />
      <line x1="20" y1="38" x2="20" y2="16" stroke={coral} strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="38" x2="30" y2="22" stroke={teal} strokeWidth="4" strokeLinecap="round" />
      <line x1="40" y1="38" x2="40" y2="10" stroke={coral} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/** Large doorway — hero/empty-state motif. */
export function DoorwayGlyph({ title, ...props }: IlloProps) {
  return (
    <svg viewBox="-6 -12 62 68" fill="none" {...svgProps(title)} {...props}>
      <path d="M 6 27.5 A 21.5 21.5 0 1 1 48 27.5" stroke={coral} strokeWidth="8" strokeLinecap="round" />
      <line x1="6" y1="27.5" x2="6" y2="44" stroke={coral} strokeWidth="8" strokeLinecap="round" />
      <line x1="48" y1="27.5" x2="48" y2="44" stroke={coral} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

/** 404 — a doorway ajar, teal path leading out. */
export function NotFoundIllo({ title, ...props }: IlloProps) {
  return (
    <svg viewBox="0 0 200 160" fill="none" {...svgProps(title)} {...props}>
      <path d="M 40 120 A 46 46 0 0 1 132 120" stroke={coral} strokeWidth="9" strokeLinecap="round" />
      <line x1="40" y1="120" x2="40" y2="146" stroke={coral} strokeWidth="9" strokeLinecap="round" />
      <line x1="132" y1="120" x2="132" y2="146" stroke={coral} strokeWidth="9" strokeLinecap="round" />
      <path d="M 132 146 C 160 146, 168 120, 186 118" stroke={teal} strokeWidth="6" strokeLinecap="round" strokeDasharray="2 12" />
      <circle cx="186" cy="118" r="5" fill={teal} />
    </svg>
  );
}
