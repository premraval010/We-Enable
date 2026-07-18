import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/** Every public route plus the two portals. */
const routes = [
  "/",
  "/about",
  "/programs",
  "/programs/people-with-disabilities",
  "/programs/adaptive-sports",
  "/programs/senior-citizens",
  "/programs/caregivers",
  "/programs/employment-livelihoods",
  "/programs/digital-ai-accessibility",
  "/programs/policy-research",
  "/programs/arts",
  "/impact",
  "/stories",
  "/partnerships",
  "/donate",
  "/volunteer",
  "/careers",
  "/newsroom",
  "/events",
  "/contact",
  "/accessibility",
  "/privacy",
  "/terms",
  "/faq",
  "/resources",
];

const wcagTags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const route of routes) {
  test(`a11y: ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page })
      .withTags(wcagTags)
      // WCAG 2.2 SC 1.4.3 exempts logotypes/brand names from contrast rules.
      // The "Enable" wordmark is coral by brand mandate (exact token, no drift),
      // so the brand mark is excluded from the automated contrast scan.
      .exclude('a[aria-label="WeEnable, home"]')
      .analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual(
      [],
    );
  });
}
