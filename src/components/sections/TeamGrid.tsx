"use client";

import { team } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function TeamGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((m, i) => (
        <Reveal key={m.name} delay={(i % 3) * 100}>
          <article className="group relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="eyebrow text-copper">{m.role}</p>
              <h3 className="display mt-1.5 text-2xl text-cream">{m.name}</h3>
              <p className="mt-2 max-w-sm text-sm text-cream/75 opacity-0 transition-all duration-500 group-hover:opacity-100">
                {m.bio}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
