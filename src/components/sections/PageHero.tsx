"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import ImageReveal from "@/components/ui/ImageReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string[];
  subtitle?: string;
  image: string;
  imageAlt: string;
  crumb: string;
  meta?: { label: string; value: string }[];
};

export default function PageHero({
  eyebrow,
  title,
  highlight = [],
  subtitle,
  image,
  imageAlt,
  crumb,
  meta,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-forest-deep pt-24 text-cream lg:pt-28">
      {/* ambient background */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />
      <div className="grain absolute inset-0" />

      {/* Main content — flex-1 so it fills remaining space */}
      <div className="relative mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 py-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-10">
          {/* Left: heading */}
          <div className="lg:col-span-7">
            <Reveal>
              <nav className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/50">
                <Link href="/" className="transition-colors hover:text-cream">
                  Home
                </Link>
                <span>/</span>
                <span className="text-copper">{crumb}</span>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <div className="eyebrow mb-4 flex items-center gap-3 text-oat">
                <span className="h-px w-8 bg-copper" />
                {eyebrow}
              </div>
            </Reveal>
            <TextReveal
              as="h1"
              text={title}
              highlight={highlight}
              highlightClassName="text-gradient-dark"
              className="display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
            />
            {subtitle && (
              <Reveal delay={200}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>

          {/* Right: image — capped height */}
          <div className="lg:col-span-5">
            <Reveal delay={150} dir="right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/3] max-h-[320px] overflow-hidden rounded-3xl ring-1 ring-cream/10 lg:max-h-[380px]">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="anim-floaty absolute -left-4 -top-4 hidden rounded-2xl border border-cream/10 bg-cream/10 px-4 py-3 backdrop-blur-md sm:block">
                  <p className="text-base font-bold text-cream">ABN</p>
                  <p className="text-[0.65rem] font-semibold tracking-wide text-cream/75">
                    83 701 114 614
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom: meta + scroll — anchored to bottom */}
      <div className="relative mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12">
        {meta && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-cream/10 py-5 sm:grid-cols-4">
            {meta.map((m, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-cream/50">
                  {m.label}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-cream sm:text-sm">
                  {m.value}
                </p>
              </Reveal>
            ))}
          </div>
        )}

        <div className="flex justify-center pb-6">
          <div className="flex flex-col items-center gap-2 text-cream/40">
            <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
            <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/20 p-1.5">
              <span className="anim-scroll-dot h-1.5 w-1.5 rounded-full bg-copper" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}