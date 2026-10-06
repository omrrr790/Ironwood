"use client";

import { ArrowUpRight, BadgeCheck, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useMouseRelative, useMounted } from "@/lib/hooks";
import { brand, images } from "@/lib/data";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const { ref, x, y } = useMouseRelative<HTMLElement>();
  const mounted = useMounted(60);

  // subtle parallax drift on the photograph
  const bgDX = (x - 0.5) * -14;
  const bgDY = (y - 0.5) * -10;

  const photoStrip = [images.home, images.interior, images.timber, images.outdoor];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col overflow-hidden bg-forest-deep text-cream"
    >
      {/* Real photograph, slow ken-burns + gentle parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: mounted ? `translate3d(${bgDX}px, ${bgDY}px, 0) scale(1.08)` : "scale(1.08)",
          transition: "transform 0.4s ease-out",
        }}
      >
        <img
          src={images.hero}
          alt="A recently completed Ironwood carpentry and construction project"
          className="h-full w-full object-cover"
          style={{ animation: "hero-kenburns 30s ease-in-out infinite alternate" }}
        />
      </div>

      {/* Legibility gradient (left + bottom), no noise / no blobs */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/40 via-forest-deep/60 to-forest-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-forest-deep/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-5 pb-28 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="max-w-3xl">
          <Reveal delay={700} dir="none">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cream/20 bg-forest-deep/50 px-4 py-2 backdrop-blur">
              <MapPin size={14} className="text-copper" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/90">
                {brand.suburb} · {brand.abnFormatted}
              </span>
            </div>
          </Reveal>

          <h1 className="display mt-7">
            <span className="block">
              <TextReveal
                as="span"
                text="Carpentry & construction,"
                delay={820}
                stagger={70}
                className="block text-5xl leading-[0.99] sm:text-6xl lg:text-7xl xl:text-[5.75rem]"
              />
            </span>
            <span className="block">
              <TextReveal
                as="span"
                text="done properly."
                highlight={["properly."]}
                highlightClassName="text-gradient-dark"
                delay={1060}
                stagger={70}
                className="block text-5xl leading-[0.99] sm:text-6xl lg:text-7xl xl:text-[5.75rem]"
              />
            </span>
          </h1>

          <Reveal delay={1440} dir="none">
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
              From framing and extensions to decks and finish carpentry, we build
              homes and fit-outs across Western Sydney the way they should be
              built — square, solid and on time.
            </p>
          </Reveal>

          <Reveal delay={1580} dir="none">
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-copper px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-cream hover:text-forest"
              >
                Get a Free Quote
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-base font-semibold text-cream transition-colors hover:border-copper hover:bg-copper/10"
              >
                See Our Work
              </a>
            </div>
          </Reveal>

          <Reveal delay={1740} dir="none">
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream/75">
              <li className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-copper" /> NSW Licensed &amp; Insured
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-copper" /> Statutory Building Warranty
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-copper" />
                <a href={brand.phoneHref} className="transition-colors hover:text-cream">
                  {brand.phone}
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Real work, real photos */}
          <Reveal delay={1900} dir="none">
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {photoStrip.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Recent Ironwood project"
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 rounded-xl border-2 border-forest-deep object-cover shadow-lg"
                  />
                ))}
              </div>
              <div className="ml-1">
                <p className="text-sm font-semibold text-cream">Recent work, photographed on site</p>
                <p className="text-xs text-cream/60">
                  {brand.director}&apos;s crew · {brand.region}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Grounded registry bar */}
      <div className="relative z-10 border-t border-cream/10 bg-forest-deep/60 backdrop-blur">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-cream/60">
            <span>{brand.abnFormatted}</span>
            <span className="hidden sm:inline">{brand.activity}</span>
            <span className="hidden md:inline">{brand.legalName}</span>
          </div>
          <a
            href="#services"
            className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-cream"
          >
            Scroll to explore
            <span className="flex h-7 w-4 items-start justify-center rounded-full border border-cream/25 p-1">
              <span className="anim-scroll-dot h-1 w-1 rounded-full bg-copper" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
