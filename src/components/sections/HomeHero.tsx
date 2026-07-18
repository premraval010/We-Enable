import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

/** Chapter 00 — full-viewport cinematic hero with gradient into Ink. */
export function HomeHero() {
  return (
    <section className="on-ink relative flex min-h-[92vh] items-end overflow-hidden bg-ink text-paper">
      <Image
        src="/images/hero.jpg"
        alt="A wheelchair racer in full motion on a track, leaning low into the drive, the background blurred with speed."
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient into Ink at the bottom third */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent"
      />

      <Container className="relative z-10 pb-20 pt-32 lg:pb-28">
        <p
          className="animate-fade-up text-sm font-bold uppercase tracking-[0.14em] text-coral"
          style={{ animationDelay: "0.05s" }}
        >
          WeEnable — Formerly Creating Abilities
        </p>
        <h1
          className="animate-fade-up mt-5 max-w-4xl font-heading font-extrabold leading-[1.02] tracking-tight text-paper"
          style={{ animationDelay: "0.15s", fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
        >
          Ability was never the barrier.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-dark sm:text-xl"
          style={{ animationDelay: "0.3s" }}
        >
          The world was. We&rsquo;re rebuilding it — one system, one policy, one
          line of code at a time.
        </p>
        <div
          className="animate-fade-up mt-9 flex flex-wrap gap-3"
          style={{ animationDelay: "0.45s" }}
        >
          <Button asChild variant="primary-dark" size="lg">
            <Link href="/about">Our mission</Link>
          </Button>
          <Button asChild variant="secondary-dark" size="lg">
            <Link href="/partnerships">Partner with us</Link>
          </Button>
        </div>

        <p
          className="animate-fade-up mt-16 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted-dark"
          style={{ animationDelay: "0.6s" }}
        >
          <ArrowDown aria-hidden="true" className="animate-scroll-cue size-4 text-coral" />
          Scroll to begin
        </p>
      </Container>
    </section>
  );
}
