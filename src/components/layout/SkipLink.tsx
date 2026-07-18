/** First focusable element in the DOM. Visible only on focus. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-[100] rounded-full bg-ink px-5 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus-visible:outline-2"
    >
      Skip to content
    </a>
  );
}
