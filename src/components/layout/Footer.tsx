import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  FacebookIcon,
  XIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/social";
import { footerNav, socialLinks, org } from "@/content/site";

const iconMap = {
  facebook: FacebookIcon,
  twitter: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
} as const;

const columns = [
  footerNav.organisation,
  footerNav.programs,
  footerNav.involved,
  footerNav.resources,
];

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-muted-dark">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2">
            <Logo variant="light" size={24} />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted-dark">
              A global movement removing the barriers between ability and
              opportunity.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WeEnable on ${s.label}`}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-border-dark text-paper transition-colors hover:border-coral hover:text-coral focus-visible:outline-2"
                    >
                      <Icon aria-hidden="true" className="size-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-paper">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-muted-dark transition-colors hover:text-coral"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border-dark pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {org.name}. Formerly {org.formerName}.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-coral">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-coral">
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                className="transition-colors hover:text-coral"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
