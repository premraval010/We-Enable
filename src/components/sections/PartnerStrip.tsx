/**
 * Trust strip. Per content rules we do NOT invent partner logos or names.
 * These are neutral placeholders until real, confirmed partners are added.
 */
const placeholders = [
  "Partner announcements",
  "coming soon",
  "Government agencies",
  "Corporate partners",
  "Foundations",
];

export function PartnerStrip() {
  return (
    <div>
      <p className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-muted">
        Trusted by organisations building a more enabled world
      </p>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {placeholders.map((name, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-muted grayscale"
          >
            <svg width="22" height="22" viewBox="-6 -12 62 68" aria-hidden="true">
              <path
                d="M 6 27.5 A 21.5 21.5 0 1 1 48 27.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line x1="6" y1="27.5" x2="6" y2="44" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              <line x1="48" y1="27.5" x2="48" y2="44" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
