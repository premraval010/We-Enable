# Phase 2 readiness

Phase 1 ships a fast, static, accessible marketing site. Phase 2 adds
transactional features. The seams below are already in place so Phase 2 is a set
of additive changes, not a rewrite.

## What is intentionally NOT in v1

- **Online payment / checkout.** `/donate` collects a giving enquiry (form + email);
  no card processing.
- **Auth (login / signup) and portals.** Removed from v1 to keep the first version
  simple. No accounts.

## 1. Payments / donations

**Today:** `/donate` renders `GiveForm` → server action `submitGivingEnquiry`
(`src/lib/actions.ts`), which validates with zod and logs. Program designations
come from `src/content/donate.ts`.

**Phase 2:**
1. Add a `PaymentProvider` interface + `StripePaymentProvider` in `src/lib/payments.ts`
   (a `MockPaymentProvider` shipped in an earlier iteration and shows the shape:
   `createCheckout({ amount, frequency, program }) → { redirectUrl }`).
2. Add an API route `app/api/checkout/route.ts` that creates a Stripe Checkout Session,
   and `app/api/stripe/webhook/route.ts` for fulfilment.
3. Swap the `/donate` giving form for an amount/frequency selector that calls the provider.
   Keep the enquiry form as the fallback ("prefer to arrange by email").
4. Env: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   (placeholders already in `.env.example`).

The donate UI is isolated in one route + one form component, so this does not touch
the rest of the site.

## 2. Auth & portals

**Phase 2:**
1. Add Auth.js. Create `app/portal/layout.tsx` with a guard:
   `const session = await auth(); if (!session) redirect("/login")`.
2. Reintroduce donor and volunteer dashboards reading from a `DataProvider` interface
   (a mock implementation existed in an earlier iteration — pages read only from the
   interface so real APIs swap in without UI changes).
3. Env: `AUTH_SECRET` (placeholder already in `.env.example`).

Portals should be `robots: noindex` and excluded from the sitemap.

## 3. Forms (contact, volunteer, partnership, giving enquiry, newsletter) — DONE

Forms are wired to **Resend**. Each zod-validated server action in `src/lib/actions.ts`
calls `sendNotification()` in `src/lib/email.ts`, which emails the relevant inbox and
returns whether the send succeeded (so a failure surfaces as an error, not a false
"thanks"). Env: `RESEND_API_KEY`, optional `RESEND_FROM` (verified sender) and
`NOTIFICATIONS_TO` (route everything to one address). Without a key it degrades to
logging, so previews still work.

Remaining nicety: the **newsletter** currently emails a "new subscriber" notification.
To manage a real list, swap that call for `resend.contacts.create({ email, audienceId })`
(add `RESEND_AUDIENCE_ID`) or a dedicated provider (MailerLite / Buttondown).

## 4. CMS

Content is typed under `src/content/`. A CMS (or MDX pipeline) can implement the same
types and replace the static imports without touching components.

## Deployment notes

- Static export today; Phase 2 API routes + webhooks run as Vercel Functions.
- Keep the CSP in `next.config.ts` in sync — Stripe will need `connect-src` /
  `frame-src` / `script-src` entries for `js.stripe.com` and `api.stripe.com`.
