import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Native styled <select>. Chosen over Radix Select so it submits with FormData
 * in server-action forms and is fully keyboard/screen-reader accessible by default.
 */
export function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(
          "h-12 w-full appearance-none rounded-xl border border-border bg-paper px-4 pr-11 text-[15px] text-ink transition-colors focus-visible:border-teal focus-visible:outline-2 disabled:opacity-60",
          "aria-[invalid=true]:border-coral aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-coral",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
      />
    </div>
  );
}
