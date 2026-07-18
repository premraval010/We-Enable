# FICTIONAL-CONTENT.md — launch gate

This site is built to be **evidence-led**. A government partner (Singapore) will
fact-check it. Everything below is a **placeholder or sample value** and MUST be
verified or replaced with real, sourced data before public launch.

**Rules that were followed while building:**

- ✅ No fabricated external endorsements (no invented partner/agency/publication names or logos).
- ✅ All global statistics are real and cited (WHO / UNESCO / UN only) — see `IMAGE-CREDITS.md` is for photos; stat sources are inline in content.
- ✅ Org-internal figures are modest, plausible **samples** — listed below.

---

## Must replace before launch

| # | Item | Location | Current (sample) | Replace with |
|---|------|----------|------------------|--------------|
| 1 | Leadership names, roles, bios | `src/content/leadership.ts` | 4 fictional people (Amara Okonkwo, Rajiv Menon, Lena Fischer, Daniel Tan) | Real leadership + headshots |
| 2 | People reached | `src/content/site.ts` → `orgMetrics.peopleReached` | `48,000+` | Verified figure |
| 3 | Countries active | `src/content/site.ts` → `orgMetrics.countriesActive` | `12` | Verified figure |
| 4 | Active programs | `src/content/site.ts` → `orgMetrics.activePrograms` | `8` | Confirm |
| 5 | Partner organisations | `src/content/site.ts` → `orgMetrics.partnerOrganisations` | `60+` | Verified figure |
| 6 | Open roles | `src/content/jobs.ts` | 4 sample roles | Real ATS feed / roles |
| 7 | Events (titles, dates, cities, venues) | `src/content/events.ts` | 3 sample events, dates Sep–Nov 2026 (Singapore, Bengaluru, Nairobi) | Real event calendar |
| 8 | Press mentions | `src/content/news.ts` → `pressItems` | 2 clearly-labelled placeholders | Real coverage + links |
| 9 | Partner strip | `src/components/sections/PartnerStrip.tsx` | Neutral "coming soon" placeholders (no fake logos) | Confirmed partner names/logos |
| 10 | Program impact micro-stats | `src/content/programs.ts` → each `stat` / `barrier` where source is "WeEnable" or "program participant" | Illustrative (caregiver "2 hrs" quote, arts "100%", policy "1 clause") | Verified program data |
| 11 | Illustrative people stories | `src/content/stories.ts` | 9 representative narratives (Ananya, Grace, Marisa, Diego, Chidi, Ravi, Priya + Jakarta/Toronto vignettes) | Real, consented stories + portraits |
| 12 | Impact quote cards | `src/app/impact/page.tsx` | Same illustrative quotes (Bengaluru / Nairobi / São Paulo) | Real, consented quotes |
| 13 | Newsroom articles | `src/content/news.ts` | 7 authored articles; the Jakarta/Toronto/Bengaluru references are illustrative | Editorial review for accuracy; confirm any named place/program claims |
| 14 | 2025 Impact Report PDF | `public/reports/weenable-2025-impact-report.pdf` | 1-page placeholder | Real report |
| 15 | Media kit | `public/press/weenable-media-kit.zip` | Placeholder (logo + one-pager) | Real kit (logos, fact sheet, headshots) |
| 16 | Giving enquiry / newsletter / forms | server actions in `src/lib/actions.ts` | Log to console + return success | Wire to real email/CRM (Phase 2) |
| 17 | Contact emails | `src/content/site.ts` → `org.emails` | hello@, partners@, press@, privacy@, legal@, accessibility@ weenable.org | Confirm mailboxes exist & are monitored |

## Verify (carried from Creating Abilities — confirm still current)

| Item | Location | Value |
|------|----------|-------|
| Registered office | `src/content/site.ts` → `org.address` | WeWork, 524 Broadway, New York, NY 10012, US |
| Phone numbers | `src/content/site.ts` → `org.phones` | +91 7020111060, +44 777 6266 375 |
| Social profiles | `src/content/site.ts` → `org.social` | facebook/creatingabilities.org, twitter/creatingability, instagram/creatingabilities, linkedin/creating-abilities |

## Deferred to a later phase (intentionally not in v1)

- **Online donation checkout** — `/donate` currently takes a giving enquiry (form + email). No payment processing, no Stripe.
- **Login / signup / donor & volunteer portals** — removed from v1. No auth.

## Real statistics used (do NOT change — these are cited facts)

- 1.3B significant disability, 1 in 6 (WHO); 285M visually impaired / 39M blind (WHO);
  360M moderate-to-profound hearing loss (WHO); 75M need a wheelchair, ~1 in 10 have one (WHO);
  9/10 children with disabilities out of school in developing world (UNESCO);
  1 in 6 people aged 60+ by 2030 (WHO).
