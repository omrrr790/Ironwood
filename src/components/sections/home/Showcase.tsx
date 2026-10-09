"use client";

import { images } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const panels = [
  { image: images.framing,      tag: "01 · Structure", title: "Timber framing",     sub: "Engineered hardwood frames, cut and raised by our own carpenters." },
  { image: images.woodwork,     tag: "02 · Joinery",   title: "Custom joinery",     sub: "Cabinetry and furniture fabricated in-house to the millimetre." },
  { image: images.timberPlanks, tag: "03 · Material",  title: "Recycled hardwood",  sub: "Old-growth timber, responsibly salvaged and given a second life." },
  { image: images.detail,       tag: "04 · Finishing", title: "Fine finishing",     sub: "Cornices, trims and details you'll admire every single day." },
  { image: images.interior,     tag: "05 · Handover",  title: "Handover & warranty", sub: "A deep clean, a full walkthrough, and a 7-year structural warranty." },
];

export default function Showcase() {
  return (
    <section className="bg-forest-deep py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="eyebrow mb-3 flex items-center gap-3 text-oat">
            <span className="h-px w-8 bg-copper" />
            Inside the workshop
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
            Every build, <span className="text-gradient">stage by stage.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {panels.map((p, i) => (
            <Reveal key={i} delay={i * 80} dir="none">
              <article className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="eyebrow text-copper">{p.tag}</p>
                  <h3 className="display mt-2 text-2xl text-cream sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-cream/70">{p.sub}</p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={400} dir="none">
            <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-cream/15 bg-cream/5 p-8">
              <div className="max-w-xs text-center">
                <p className="display text-6xl text-copper">7yr</p>
                <p className="mt-3 text-lg font-semibold text-cream">Structural warranty</p>
                <p className="mt-2 text-sm text-cream/60">
                  On every build we hand over — plus a team that still answers the phone a decade later.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}