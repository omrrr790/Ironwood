"use client";

import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const panels = [
  { image: images.framing, tag: "01 · Structure", title: "Timber framing", sub: "Engineered hardwood frames, cut and raised by our own carpenters." },
  { image: images.woodwork, tag: "02 · Joinery", title: "Custom joinery", sub: "Cabinetry and furniture fabricated in-house to the millimetre." },
  { image: images.timberPlanks, tag: "03 · Material", title: "Recycled hardwood", sub: "Old-growth timber, responsibly salvaged and given a second life." },
  { image: images.detail, tag: "04 · Finishing", title: "Fine finishing", sub: "Cornices, trims and details you'll admire every single day." },
  { image: images.interior, tag: "05 · Handover", title: "Handover & warranty", sub: "A deep clean, a full walkthrough, and a 7-year structural warranty." },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let raf = 0;

    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const scrolled = -rect.top;
        setProgress(Math.min(1, Math.max(0, scrolled / total)));
      });
    };

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      onScroll();
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-forest-deep text-cream"
      style={{ height: "360vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* heading */}
        <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12">
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
        </div>

        {/* horizontal track */}
        <div
          ref={trackRef}
          className="mt-12 flex gap-6 px-5 will-change-transform sm:px-8 lg:px-12"
          style={{ transform: `translateX(${-progress * distance}px)` }}
        >
          {panels.map((p, i) => (
            <article
              key={i}
              className="group relative h-[52vh] w-[82vw] shrink-0 overflow-hidden rounded-3xl sm:w-[58vw] lg:h-[58vh] lg:w-[42vw]"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="eyebrow text-copper">{p.tag}</p>
                <h3 className="display mt-2 text-3xl text-cream sm:text-4xl">{p.title}</h3>
                <p className="mt-2 max-w-md text-sm text-cream/75 sm:text-base">{p.sub}</p>
              </div>
            </article>
          ))}

          {/* end card */}
          <div className="flex h-[52vh] w-[70vw] shrink-0 items-center justify-center rounded-3xl border border-cream/15 bg-cream/5 lg:h-[58vh] lg:w-[36vw]">
            <div className="max-w-xs text-center">
              <p className="display text-5xl text-copper">7yr</p>
              <p className="mt-3 text-lg font-semibold text-cream">Structural warranty</p>
              <p className="mt-2 text-sm text-cream/60">
                On every build we hand over — plus a team that still answers the phone a decade later.
              </p>
            </div>
          </div>
        </div>

        {/* progress */}
        <div className="mx-auto mt-10 w-full max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="h-1 w-full max-w-md overflow-hidden rounded-full bg-cream/15">
            <div
              className="h-full rounded-full bg-copper transition-[width] duration-100 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
