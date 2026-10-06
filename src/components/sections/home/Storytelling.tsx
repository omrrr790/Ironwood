"use client";

import { images } from "@/lib/data";
import type { CSSProperties } from "react";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { useElementProgress } from "@/lib/hooks";

export default function Storytelling() {
  const { ref, progress } = useElementProgress<HTMLDivElement>();
  const scale = 1.08 + (1 - progress) * 0.12;
  const y = (progress - 0.5) * -60;

  return (
    <section ref={ref} className="relative h-[110vh] overflow-hidden">
      {/* full-bleed image with scroll zoom + parallax */}
      <div className="absolute inset-0">
        <img
          src={images.outdoor}
          alt="A hand-built Ironwood timber deck overlooking the landscape"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover will-change-transform"
          style={{ transform: `scale(${scale}) translateY(${y}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-forest-deep/60" />
      </div>

      {/* floating labels */}
      <div className="anim-floaty absolute left-[12%] top-[24%] hidden rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-sm text-cream backdrop-blur md:block">
        <span className="mr-2 text-copper">✦</span> Spotted gum deck
      </div>
      <div
        className="anim-floaty absolute right-[10%] top-[38%] hidden rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-sm text-cream backdrop-blur md:block"
        style={{ "--float-duration": "8s" } as CSSProperties}
      >
        <span className="mr-2 text-copper">✦</span> Hand-cut joinery
      </div>

      {/* content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-[90rem] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <Reveal>
            <div className="eyebrow mb-6 flex items-center gap-3 text-oat">
              <span className="h-px w-8 bg-copper" />
              The craft behind the build
            </div>
          </Reveal>
          <TextReveal
            as="h2"
            text="A home should feel inevitable — like it grew out of the land it stands on."
            highlight={["inevitable"]}
            highlightClassName="text-gradient-dark"
            className="display max-w-5xl text-4xl leading-[1.04] text-cream sm:text-5xl lg:text-6xl xl:text-7xl"
          />
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
              That&apos;s why we start every project on site, not on paper. We
              read the light, the slope and the soil — then shape timber around
              what&apos;s already there.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
