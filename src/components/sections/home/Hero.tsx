"use client";

import { ArrowUpRight, BadgeCheck, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useMouseRelative, useMounted } from "@/lib/hooks";
import { brand, images } from "@/lib/data";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const { ref, x, y } = useMouseRelative<HTMLElement>();
  const mounted = useMounted(60);

  const bgDX = (x - 0.5) * -14;
  const bgDY = (y - 0.5) * -10;

  const photoStrip = [images.home, images.interior, images.timber, images.outdoor];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col overflow-hidden bg-forest-deep text-cream"
    >
      {/* Background Image with Parallax */}
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

      {/* Sophisticated Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 via-forest-deep/40 to-forest-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/20" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-6 pb-32 pt-32 sm:px-8 lg:px-12 lg:pt-40">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <Reveal delay={700} dir="none">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-forest-deep/60 px-4 py-2 backdrop-blur-md">
              <MapPin size={14} className="text-copper" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/90">
                {brand.suburb} · {brand.abnFormatted}
              </span>
            </div>
          </Reveal>

          {/* Headline - Optimized for readability and impact */}
          <h1 className="display mt-8">
            <span className="block">
              <TextReveal
                as="span"
                text="Carpentry & construction,"
                delay={820}
                stagger={60}
                className="block text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
              />
            </span>
            <span className="block">
              <TextReveal
                as="span"
                text="done properly."
                highlight={["properly."]}
                highlightClassName="text-gradient-dark"
                delay={1000}
                stagger={60}
                className="block text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
              />
            </span>
          </h1>

          {/* Subtitle - More readable width */}
          <Reveal delay={1300} dir="none">
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:mt-8 sm:text-lg lg:text-xl">
              From framing and extensions to decks and finish carpentry, we build
              homes and fit-outs across Western Sydney the way they should be
              built — square, solid and on time.
            </p>
          </Reveal>

          {/* Call to Actions - Cleaner spacing */}
          <Reveal delay={1450} dir="none">
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-4 text-base font-semibold text-cream transition-all duration-300 hover:bg-cream hover:text-forest hover:shadow-lg sm:px-8"
              >
                Get a Free Quote
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-base font-semibold text-cream transition-all duration-300 hover:border-copper hover:bg-copper/10 sm:px-8"
              >
                See Our Work
              </a>
            </div>
          </Reveal>

          {/* Trust Indicators - Streamlined */}
          <Reveal delay={1600} dir="none">
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream/75 sm:mt-10 sm:gap-x-8">
              <li className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-copper" /> NSW Licensed &amp; Insured
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-copper" /> Statutory Building Warranty
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-copper" />
                <a href={brand.phoneHref} className="transition-colors hover:text-cream">
                  {brand.phone}
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Social Proof - Cleaner horizontal layout */}
          <Reveal delay={1750} dir="none">
            <div className="mt-10 flex items-center gap-4 sm:mt-14">
              <div className="flex -space-x-3 sm:-space-x-4">
                {photoStrip.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Recent Ironwood project"
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded-xl border-2 border-forest-deep object-cover shadow-lg sm:h-14 sm:w-14"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-cream">Recent work, photographed on site</p>
                <p className="text-xs text-cream/60">
                  {brand.director}&apos;s crew · {brand.region}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Refined Registry Bar */}
      <div className="relative z-10 border-t border-cream/10 bg-forest-deep/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-cream/50">
            <span>{brand.abnFormatted}</span>
            <span className="hidden sm:inline">{brand.activity}</span>
            <span className="hidden md:inline">{brand.legalName}</span>
          </div>
          <a
            href="#services"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-cream"
          >
            Scroll to explore
            <span className="flex h-6 w-4 items-start justify-center rounded-full border border-cream/20 p-1 transition-colors group-hover:border-copper">
              <span className="anim-scroll-dot h-1 w-1 rounded-full bg-copper" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}