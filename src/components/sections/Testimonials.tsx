"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.children;
    if (!cards[i]) return;
    const target = (cards[i] as HTMLElement).offsetLeft;
    track.scrollTo({ left: target, behavior: "smooth" });
    setIndex(i);
  };

  const next = () => scrollTo(Math.min(index + 1, testimonials.length - 1));
  const prev = () => scrollTo(Math.max(index - 1, 0));

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => {
        const nextIdx = (current + 1) % testimonials.length;
        const track = trackRef.current;
        if (track) {
          const cards = track.children;
          const card = cards[nextIdx] as HTMLElement | undefined;
          if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
        }
        return nextIdx;
      });
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-forest-deep text-cream">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Client stories"
            title="Homes we're proud to hand over"
            tone="light"
          />
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition-all hover:border-copper hover:bg-copper"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition-all hover:border-copper hover:bg-copper"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="group relative flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-cream/10 bg-cream/5 p-8 backdrop-blur transition-colors duration-500 hover:border-copper/40 sm:w-[46%] lg:w-[31.5%]"
            >
              <Quote size={40} className="mb-6 text-copper/50" />
              <div className="mb-5 flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="fill-copper text-copper" />
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-cream/85">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-cream/10 pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-cream/15"
                />
                <div>
                  <p className="font-semibold text-cream">{t.name}</p>
                  <p className="text-sm text-cream/50">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
