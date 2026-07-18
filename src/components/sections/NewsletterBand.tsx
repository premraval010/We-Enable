"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { subscribeNewsletter, initialFormState } from "@/lib/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="sm:shrink-0">
      {pending ? "Subscribing…" : "Subscribe"}
    </Button>
  );
}

export function NewsletterBand() {
  const [state, formAction] = useActionState(
    subscribeNewsletter,
    initialFormState,
  );

  return (
    <section className="bg-surface py-16 lg:py-20" aria-labelledby="newsletter-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="newsletter-heading" className="text-3xl font-extrabold lg:text-4xl">
            Stay close to the movement
          </h2>
          <p className="mt-4 text-lg text-muted">
            One email a month. Stories, research, and ways to help. Nothing else.
          </p>
          <form
            action={formAction}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="flex-1 text-left">
              <Label htmlFor="newsletter-email" className="sr-only">
                Email address
              </Label>
              <Input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@email.com"
                aria-invalid={state.errors?.email ? true : undefined}
                aria-describedby={state.errors?.email ? "newsletter-error" : undefined}
              />
            </div>
            <SubmitButton />
          </form>
          <p
            id="newsletter-error"
            aria-live="polite"
            className={`mt-3 text-sm ${state.ok ? "text-teal-text" : "text-coral-text"}`}
          >
            {state.message}
          </p>
        </div>
      </Container>
    </section>
  );
}
