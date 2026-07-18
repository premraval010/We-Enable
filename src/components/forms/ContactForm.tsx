"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { Input, Textarea } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Field, FormStatus } from "@/components/forms/Field";
import { submitContact, initialFormState } from "@/lib/actions";

const topics = [
  "General inquiry",
  "Programs",
  "Corporate partnership",
  "Government partnership",
  "Media & press",
  "Volunteering",
];

/** Map a ?topic= slug to a select value. */
function defaultTopic(topic?: string) {
  if (!topic) return topics[0];
  const map: Record<string, string> = {
    general: "General inquiry",
    programs: "Programs",
    corporate: "Corporate partnership",
    government: "Government partnership",
    press: "Media & press",
    media: "Media & press",
    volunteering: "Volunteering",
  };
  return map[topic.toLowerCase()] ?? topics[0];
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialFormState);
  const initialTopic = useSearchParams().get("topic") ?? undefined;

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={state.errors?.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={state.errors?.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
        </Field>
      </div>
      <Field id="topic" label="Topic" error={state.errors?.topic}>
        <Select id="topic" name="topic" defaultValue={defaultTopic(initialTopic)}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      </Field>
      <Field id="message" label="Message" error={state.errors?.message}>
        <Textarea
          id="message"
          name="message"
          required
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
      </Field>
      <SubmitButton />
      <FormStatus ok={state.ok} message={state.message} />
    </form>
  );
}
