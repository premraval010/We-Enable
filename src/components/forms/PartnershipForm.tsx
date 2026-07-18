"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Input, Textarea } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Field, FormStatus } from "@/components/forms/Field";
import { submitPartnership, initialFormState } from "@/lib/actions";

const orgTypes = [
  "Corporation",
  "Government / public agency",
  "Foundation / philanthropy",
  "Non-profit / NGO",
  "Other",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Start the conversation"}
    </Button>
  );
}

export function PartnershipForm() {
  const [state, formAction] = useActionState(submitPartnership, initialFormState);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="p-org" label="Organisation name" error={state.errors?.organisation}>
          <Input
            id="p-org"
            name="organisation"
            autoComplete="organization"
            required
            aria-invalid={state.errors?.organisation ? true : undefined}
            aria-describedby={state.errors?.organisation ? "p-org-error" : undefined}
          />
        </Field>
        <Field id="p-email" label="Work email" error={state.errors?.email}>
          <Input
            id="p-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "p-email-error" : undefined}
          />
        </Field>
      </div>
      <Field id="p-type" label="Organisation type" error={state.errors?.orgType}>
        <Select id="p-type" name="orgType" defaultValue="">
          <option value="" disabled>
            Select a type
          </option>
          {orgTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      </Field>
      <Field id="p-message" label="What would you like to build?" error={state.errors?.message}>
        <Textarea
          id="p-message"
          name="message"
          required
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? "p-message-error" : undefined}
        />
      </Field>
      <SubmitButton />
      <FormStatus ok={state.ok} message={state.message} />
    </form>
  );
}
