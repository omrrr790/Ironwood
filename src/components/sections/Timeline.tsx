"use client";

import { timeline } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-copper via-ink/15 to-transparent" />
      <div className="space-y-12">
        {timeline.map((t, i) => (
          <Reveal key={t.year} delay={i * 60} dir="left" className="relative pl-14">
            <span className="absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-cream bg-copper" />
            <span className="eyebrow text-copper-deep">{t.year}</span>
            <h3 className="display mt-1.5 text-2xl text-ink sm:text-3xl">{t.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {t.description}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
