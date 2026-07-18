import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NotFoundIllo } from "@/components/illustrations";

export default function NotFound() {
  return (
    <section className="bg-paper py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <NotFoundIllo className="w-48 sm:w-56" />
          <h1 className="mt-10 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            This door isn&rsquo;t here.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            But every other one is open.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/">Back home</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/programs">Explore programs</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
