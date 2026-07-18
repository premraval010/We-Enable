# WeEnable — build status

_Living status doc. Last updated: 18 Jul 2026._

## TL;DR
First version of the site is essentially built and green: **40 routes**,
`npm run build` passes (zero TS/ESLint errors), and **axe-core reports zero
violations on every route**. Donation checkout and login/portals are deliberately
deferred (see below).

## Scope decisions (v1)
- **Donation module → simplified.** `/donate` is a real, static page: a giving-enquiry
  form (name, email, program, optional amount/message) + a direct-email option +
  "other ways to give". No payment processing. Online checkout is Phase 2.
- **No login / signup / portals.** Removed to keep v1 simple. Phase 2.
- **Fabricated data removed for launch.** Leadership, headline metrics (people reached /
  countries / partners), events, open roles, newsroom articles, press items, the impact-report
  PDF, and the media-kit zip were all removed and replaced with honest empty states (routes
  and nav stay intact). The 9 illustrative people-stories were kept by request and are flagged
  in FICTIONAL-CONTENT.md as replace-with-real. See FICTIONAL-CONTENT.md for the full list.
- **Images** — curated + verified from Unsplash (dignified, on-brand).

## Done ✅
- **Foundation** — Next 16 + Tailwind v4 brand tokens, Manrope/Public Sans (self-hosted),
  root layout, security headers + legacy redirects, favicon/icon/apple-icon/OG image,
  robots + sitemap, `.env.example`.
- **Design system** — Logo (exact doorway geometry), restyled shadcn/Radix primitives,
  Header (sticky + focus-trapped mobile dialog), Footer, Reveal, StatBlock (count-up),
  ProgramRow, StoryCard, CtaTriplet/CtaBand, PartnerStrip, NewsletterBand, PageHero,
  8 custom SVG illustrations.
- **Content layer** — typed `src/content/` (programs, stories, news, events, jobs,
  leadership, faq, resources, donate, site).
- **Pages (all 40 routes)** — Homepage (8-chapter narrative), About, Programs + 8 detail
  pages, Impact, Stories, Partnerships, Donate, Volunteer, Careers, Newsroom + 7 articles,
  Events, Contact, Accessibility, Privacy, Terms, FAQ, Resources, branded 404.
- **Forms** — Contact, Volunteer, Partnership, Giving enquiry, Newsletter → zod-validated
  server actions with `aria-live` feedback, **delivering via Resend** (verified end-to-end).
  Set `RESEND_API_KEY` + `RESEND_FROM` in Vercel to enable in production.
- **SEO** — per-page metadata + canonical + OG/Twitter, JSON-LD (NGO, WebSite, Breadcrumb,
  Article, Event, FAQ), sitemap.xml + robots.txt.
- **Accessibility** — WCAG 2.2 AA; strict jsx-a11y lint; axe over every route = 0 violations
  (contrast fixes applied; logotype exemption documented).
- **Docs** — README, FICTIONAL-CONTENT (launch gate), IMAGE-CREDITS, docs/PHASE-2, this file.
- **CI** — GitHub Actions: lint → typecheck → build → axe.

## Remaining ⏳
- Git history (conventional commits) + push to the GitHub repo (will ask before pushing).
- Optional final polish: per-page OG image variants for programs/stories; Lighthouse spot-check.

## How to verify
```bash
npm run build      # zero errors
npm run test:a11y  # zero axe violations (needs: npx playwright install chromium)
npm run dev        # http://localhost:3000
```

## Launch gate
Before going public, work through **FICTIONAL-CONTENT.md** — every sample value
(leadership, metrics, events, illustrative stories) is tracked there for replacement.
