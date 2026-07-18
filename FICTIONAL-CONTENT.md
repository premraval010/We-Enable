# FICTIONAL-CONTENT.md — launch gate

This site is built to be **evidence-led**. Ahead of go-live, fabricated
org-specific data was **removed** (see below) so nothing on the site can be
mistaken for a verified fact. What remains is either real, or clearly
illustrative and tracked here.

**Rules followed:**

- ✅ No fabricated external endorsements (no invented partner/agency/publication names or logos).
- ✅ All global statistics are real and cited (WHO / UNESCO / UN only).
- ✅ Fabricated org metrics, leadership, events, roles, and press items were removed for launch.

---

## Removed for launch (now honest empty states — add real data to restore)

| Item | Location | State now |
|------|----------|-----------|
| Leadership | `src/content/leadership.ts` (`leadership: []`) | `/about` shows "introduced shortly" + email. Add real leaders to restore the grid. |
| Headline metrics (people reached, countries, partners) | `src/content/site.ts` (`orgMetrics`) | Removed. `/impact` states figures appear once verified. Only `activePrograms: "8"` (real) remains. |
| Events | `src/content/events.ts` (`events: []`) | `/events` shows "no upcoming events yet". Add events to restore. |
| Open roles | `src/content/jobs.ts` (`jobs: []`) | `/careers` shows "no open roles right now" + intro CTA. `benefits` (generic) kept. |
| Newsroom articles | `src/content/news.ts` (`articles: []`) | `/newsroom` shows "publishing soon" + press email. Article pages generate none. |
| Press mentions | `src/content/news.ts` (`pressItems: []`) | "In the press" section hidden until entries exist. |
| 2025 Impact Report PDF | (deleted `public/reports/…pdf`) | `/impact` invites readers to request it by email. |
| Media kit ZIP | (deleted `public/press/…zip`) | Removed from `/newsroom`. |

## Still illustrative — confirm or replace before relying on them

| Item | Location | Note |
|------|----------|------|
| People stories | `src/content/stories.ts` | 9 representative narratives (Ananya, Grace, Marisa, Diego, Chidi, Ravi, Priya + Jakarta/Toronto vignettes). Kept intentionally for launch; replace with real, consented stories + portraits when available. |
| Impact quote cards | `src/app/impact/page.tsx` | Mirror the stories above (Bengaluru / Nairobi / São Paulo). |
| Program micro-stats | `src/content/programs.ts` → each `stat`/`barrier` sourced "WeEnable" or "program participant" | Illustrative program-level values (e.g. caregiver "2 hrs", arts "100%", policy "1 clause"). |
| Partner strip | `src/components/sections/PartnerStrip.tsx` | Neutral "coming soon" placeholders — no fake logos. Replace with confirmed partners. |
| Forms | `src/lib/actions.ts` | Validate + log; wire to real email/CRM (Phase 2). |

## Verify (carried from Creating Abilities — confirm still current)

| Item | Location | Value |
|------|----------|-------|
| Registered office | `src/content/site.ts` → `org.address` | WeWork, 524 Broadway, New York, NY 10012, US |
| Phone numbers | `src/content/site.ts` → `org.phones` | +91 7020111060, +44 777 6266 375 |
| Social profiles | `src/content/site.ts` → `org.social` | facebook/creatingabilities.org, twitter/creatingability, instagram/creatingabilities, linkedin/creating-abilities |
| Contact emails | `src/content/site.ts` → `org.emails` | hello@, partners@, press@, privacy@, legal@, accessibility@ weenable.org — confirm mailboxes are live & monitored |

## Deferred (intentionally not in v1)

- **Online donation checkout** — `/donate` takes a giving enquiry (form + email). No payment processing.
- **Login / signup / portals** — no auth in v1.

## Real statistics used (do NOT change — cited facts)

1.3B significant disability, 1 in 6 (WHO); 285M visually impaired / 39M blind (WHO);
360M moderate-to-profound hearing loss (WHO); 75M need a wheelchair, ~1 in 10 have one (WHO);
9/10 children with disabilities out of school in developing world (UNESCO);
1 in 6 people aged 60+ by 2030 (WHO).
