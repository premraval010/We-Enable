import * as React from "react";
import { Label } from "@/components/ui/label";

/** Label + control + error wrapper. Wires aria-describedby / aria-invalid. */
export function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-coral-text">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** aria-live region announcing a form's overall result. */
export function FormStatus({ ok, message }: { ok: boolean; message: string }) {
  if (!message) return <div aria-live="polite" className="sr-only" />;
  return (
    <p
      aria-live="polite"
      className={`rounded-xl border px-4 py-3 text-sm font-medium ${
        ok
          ? "border-teal/40 bg-teal/10 text-teal-text"
          : "border-coral/40 bg-coral/10 text-coral-text"
      }`}
    >
      {message}
    </p>
  );
}
