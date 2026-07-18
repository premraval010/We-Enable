import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-xl border border-border bg-paper px-4 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus-visible:border-teal focus-visible:outline-2 disabled:opacity-60",
        "aria-[invalid=true]:border-coral aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-coral",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl border border-border bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus-visible:border-teal focus-visible:outline-2 disabled:opacity-60",
        "aria-[invalid=true]:border-coral aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-coral",
        className,
      )}
      {...props}
    />
  );
}
