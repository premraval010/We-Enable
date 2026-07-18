"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
  /** Delay in ms before the reveal transition begins. */
  delay?: number;
};

/**
 * Fade-up on scroll into view. Uses IntersectionObserver; the CSS handles the
 * prefers-reduced-motion opt-out (see globals.css .reveal rules).
 */
export function Reveal({
  as: Comp = "div",
  delay = 0,
  className,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Under prefers-reduced-motion the CSS forces .reveal fully visible, so we
    // don't need to set state here — only observe for the animated path.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Comp
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Comp>
  );
}
