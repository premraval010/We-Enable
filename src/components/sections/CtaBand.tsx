import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type CtaLink = { label: string; href: string; variant?: "primary-dark" | "secondary-dark" };

/** Reusable closing CTA band on Ink. */
export function CtaBand({
  title,
  body,
  links,
}: {
  title: string;
  body?: string;
  links: CtaLink[];
}) {
  return (
    <section className="on-ink bg-ink py-16 text-paper lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            {title}
          </h2>
          {body ? (
            <p className="mt-4 text-lg leading-relaxed text-muted-dark">{body}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link, i) => (
              <Button
                key={link.href}
                asChild
                variant={link.variant ?? (i === 0 ? "primary-dark" : "secondary-dark")}
                size="lg"
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
