"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Input, Textarea } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Field, FormStatus } from "@/components/forms/Field";
import { submitGivingEnquiry, initialFormState } from "@/lib/actions";
import { programDesignations } from "@/content/donate";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Arrange my gift"}
    </Button>
  );
}

/** Giving enquiry form. Online checkout arrives later; for now the team sets up gifts. */
export function GiveForm() {
  const [state, formAction] = useActionState(submitGivingEnquiry, initialFormState);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="g-name" label="Full name" error={state.errors?.name}>
          <Input
            id="g-name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "g-name-error" : undefined}
          />
        </Field>
        <Field id="g-email" label="Email" error={state.errors?.email}>
          <Input
            id="g-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "g-email-error" : undefined}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="g-program" label="Direct my gift to" error={state.errors?.program}>
          <Select id="g-program" name="program" defaultValue="where-needed">
            {programDesignations.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field id="g-amount" label="Amount (optional)">
          <Input
            id="g-amount"
            name="amount"
            inputMode="numeric"
            placeholder="e.g. $100, or monthly"
          />
        </Field>
      </div>
      <Field id="g-message" label="Anything we should know? (optional)">
        <Textarea id="g-message" name="message" className="min-h-24" />
      </Field>
      <SubmitButton />
      <FormStatus ok={state.ok} message={state.message} />
    </form>
  );
}
