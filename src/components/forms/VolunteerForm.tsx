"use client";

import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Field, FormStatus } from "@/components/forms/Field";
import { submitVolunteer, initialFormState } from "@/lib/actions";

const skillOptions = [
  "Software & engineering",
  "Design & UX",
  "Writing & translation",
  "Research & analysis",
  "Mentoring & coaching",
  "Event support",
  "Marketing & comms",
  "Accessibility testing",
];

const availabilityOptions = [
  "A few hours a month",
  "A few hours a week",
  "Project-based",
  "Flexible / on demand",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Submit application"}
    </Button>
  );
}

export function VolunteerForm() {
  const [state, formAction] = useActionState(submitVolunteer, initialFormState);
  const [skills, setSkills] = useState<string[]>([]);

  const toggle = (skill: string) =>
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Hidden field carries the joined skills to the server action */}
      <input type="hidden" name="skills" value={skills.join(", ")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="v-name" label="Full name" error={state.errors?.name}>
          <Input
            id="v-name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "v-name-error" : undefined}
          />
        </Field>
        <Field id="v-email" label="Email" error={state.errors?.email}>
          <Input
            id="v-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "v-email-error" : undefined}
          />
        </Field>
      </div>

      <fieldset aria-describedby={state.errors?.skills ? "skills-error" : undefined}>
        <legend className="mb-2 block text-sm font-semibold text-ink">
          What are you good at? Pick any that apply.
        </legend>
        <div className="flex flex-wrap gap-2">
          {skillOptions.map((skill) => {
            const active = skills.includes(skill);
            return (
              <label
                key={skill}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-within:outline-2 ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-border bg-paper text-ink hover:border-ink"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={active}
                  onChange={() => toggle(skill)}
                />
                {skill}
              </label>
            );
          })}
        </div>
        {state.errors?.skills ? (
          <p id="skills-error" className="mt-1.5 text-sm text-coral-text">
            {state.errors.skills}
          </p>
        ) : null}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="v-availability" label="Availability" error={state.errors?.availability}>
          <Select id="v-availability" name="availability" defaultValue="">
            <option value="" disabled>
              Select availability
            </option>
            {availabilityOptions.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </Select>
        </Field>
        <Field id="v-location" label="Location (or 'Remote')" error={state.errors?.location}>
          <Input
            id="v-location"
            name="location"
            autoComplete="address-level2"
            placeholder="City, or Remote"
            required
            aria-invalid={state.errors?.location ? true : undefined}
            aria-describedby={state.errors?.location ? "v-location-error" : undefined}
          />
        </Field>
      </div>

      <SubmitButton />
      <FormStatus ok={state.ok} message={state.message} />
    </form>
  );
}
