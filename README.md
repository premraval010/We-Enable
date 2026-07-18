# WeEnable

The production website for **WeEnable** (weenable.org) — a global movement
removing the barriers between ability and opportunity, across eight programs
spanning disability, aging, caregiving, employment, digital accessibility,
policy, adaptive sport, and the arts. Formerly **Creating Abilities**.

Premium, optimistic, evidence-led. Dignity, not pity. Systems, not sympathy.

## Stack

- **Next.js 16** (App Router, TypeScript) — every content page is statically generated.
- **Tailwind CSS v4** with brand tokens defined via `@theme` in `src/app/globals.css`.
- **shadcn-style primitives** built on Radix (Button, Input, Select, Accordion, Tabs, Label), restyled with brand tokens.
- **next/font** self-hosts Manrope (headings) and Public Sans (body) — no runtime font CDN.
- Scroll reveals via a CSS + `IntersectionObserver` `Reveal` component (respects `prefers-reduced-motion`).
- **zod**-validated server actions for all forms, delivering submissions via **Resend** email (`src/lib/email.ts`). Without a `RESEND_API_KEY` they degrade to logging, so previews still work.
- SEO: per-page metadata helper, JSON-LD (NGO, WebSite, Breadcrumb, Article, Event, FAQ), generated OG images, sitemap + robots.
- A11y: WCAG 2.2 AA target, `eslint-plugin-jsx-a11y` (strict rules) + `@axe-core/playwright` over every route (zero violations).

## Local development

```bash
npm install
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL
npm run dev                    # http://localhost:3000
```

Scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (Turbopack) — must pass with zero TS/ESLint errors |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next core-web-vitals + strict jsx-a11y) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier |
| `npm run test:a11y` | Playwright + axe-core over every route |

For the a11y tests: `npx playwright install chromium` once, then `npm run test:a11y`
(it reuses a running dev server, or builds+starts in CI).

## Editing content

All content lives in typed files under `src/content/` — no CMS yet, so a future
CMS can drop in behind these types.

| File | Controls |
|---|---|
| `site.ts` | Org facts, contact, nav, footer, social links, sample metrics |
| `programs.ts` | The eight programs (drives `/programs` and every `/programs/[slug]`) |
| `stories.ts` | The nine stories (`/stories`) |
| `news.ts` | Newsroom articles + press items (`/newsroom`, `/newsroom/[slug]`) |
| `events.ts` | Upcoming events (`/events`) |
| `jobs.ts` | Open roles + benefits (`/careers`) |
| `leadership.ts` | Leadership grid (`/about`) |
| `faq.ts` | FAQ groups (`/faq`) |
| `resources.ts` | External resource library (`/resources`) |
| `donate.ts` | Program designations + "other ways to give" (`/donate`) |

To add a program: append to `programs.ts` — the overview row, detail page, and
sitemap generate automatically (footer program links live in `site.ts`).

**Before public launch, work through [`FICTIONAL-CONTENT.md`](./FICTIONAL-CONTENT.md).**
Every sample value (leadership, metrics, events, stories) is tracked there.

## Images

Photos are committed under `public/images/` (downloaded from Unsplash, credited in
[`IMAGE-CREDITS.md`](./IMAGE-CREDITS.md)) — no hotlinking, no runtime API. Custom
brand SVG illustrations live in `src/components/illustrations/`.

## Deploy (Vercel)

Zero-config. Import the repo into Vercel and:

1. Set the production domain to **weenable.org**.
2. Set env vars (Production):
   - `NEXT_PUBLIC_SITE_URL=https://weenable.org`
   - `RESEND_API_KEY=…` (form email delivery)
   - `RESEND_FROM="WeEnable <noreply@weenable.org>"` (weenable.org is verified in Resend)
   - Do **not** set `NOTIFICATIONS_TO` in production — that override routes all form mail to one address (local testing only).
3. Deploy. Security headers (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy,
   HSTS) are configured in `next.config.ts` and apply automatically.

## Phase 2

See [`docs/PHASE-2.md`](./docs/PHASE-2.md). The seams are already in place:
zod server actions for forms, and a static `/donate` giving-enquiry flow ready to
be replaced by real checkout. **Not** in v1: online payment processing, and
login/signup/portals.
