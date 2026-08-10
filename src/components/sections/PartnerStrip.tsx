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
            <svg width="24" height="24" viewBox="0 0 120 120" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M26 106V57a34 34 0 0 1 68 0v49" strokeWidth="13" />
              <path d="M33 63H72" strokeWidth="11" />
              <path d="M33 87H72" strokeWidth="11" />
            </svg>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
