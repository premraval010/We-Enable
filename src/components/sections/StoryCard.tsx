import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Story } from "@/content/stories";

export function StoryCard({ story, delay = 0 }: { story: Story; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-card border border-border bg-paper"
    >
      <Link href={`/stories#${story.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={story.image.src}
            alt={story.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-teal-text">
            {story.program} · {story.location}
          </p>
          <h3 className="mt-3 text-xl font-extrabold leading-snug">
            {story.headline}
          </h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
            {story.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-coral-text">
            Read the story
            <ArrowRight aria-hidden="true" className="size-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
