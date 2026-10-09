"use client";

import { ArrowUpRight, BadgeCheck, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useMouseRelative, useMounted } from "@/lib/hooks";
import { brand, images } from "@/lib/data";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";

export default function HeroSplitScreen() {
  const { ref, x, y } = useMouseRelative<HTMLElement>();
  const mounted = useMounted(60);

  const imgDX = (x - 0.5) * -10;
  const imgDY = (y - 0.5) * -8;

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col overflow-hidden bg-forest-deep text-cream lg:flex-row"
    >
      {/* Left: Text — cream panel below the dark header band */}
      <div className="relative z-10 flex w-full flex-col justify-center px-6 pb-24 pt-32 sm:px-10 lg:w-1/2 lg:px-16 lg:pb-0 lg:pt-40 xl:px-24">
        {/* Top Badge */}
        <Reveal delay={200} dir="none">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 backdrop-blur-md">
            <MapPin size={14} className="text-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/90">
              {brand.suburb} · {brand.abnFormatted}
            </span>
          </div>
        </Reveal>

        {/* Headline — CREAM text on dark bg */}
        <h1 className="display mt-8 text-cream">
          <TextReveal
            as="span"
            text="Furniture & cabinetry,"
            delay={320}
            stagger={55}
            className="block text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          />
          <TextReveal
            as="span"
            text="made to measure."
            highlight={["measure."]}
            highlightClassName="text-copper"
            delay={480}
            stagger={55}
            className="block text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          />
        </h1>

        {/* Subtitle */}
        <Reveal delay={700} dir="none">
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Bespoke joinery, custom cabinets and one-off furniture pieces —
            designed, crafted and installed by our Western Sydney workshop.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={850} dir="none">
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-4 text-base font-semibold text-cream transition-all duration-300 hover:bg-cream hover:text-forest hover:shadow-lg"
            >
              Start Your Piece
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-base font-semibold text-cream transition-all duration-300 hover:border-copper hover:bg-copper/10"
            >
              View Portfolio
            </a>
          </div>
        </Reveal>

        {/* Trust Indicators */}
        <Reveal delay={1000} dir="none">
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-copper" /> NSW Licensed &amp; Insured
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-copper" /> Statutory Warranty
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-copper" />
              <a href={brand.phoneHref} className="transition-colors hover:text-cream">
                {brand.phone}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      {/* Right: Image — full bleed, no cream edge */}
      <div className="relative w-full lg:w-1/2">
        <div
          className="h-[60vh] w-full overflow-hidden lg:h-full"
          style={{
            transform: mounted
              ? `translate3d(${imgDX}px, ${imgDY}px, 0) scale(1.06)`
              : "scale(1.06)",
            transition: "transform 0.4s ease-out",
          }}
        >
          <img
            src={images.hero}
            alt="Custom cabinetry and timber work by Ironwood"
            className="h-full w-full object-cover"
            style={{ animation: "hero-kenburns 30s ease-in-out infinite alternate" }}
          />
          {/* Soft dark edge to blend into the panel instead of a hard line */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-forest-deep to-transparent lg:w-24" />
        </div>

        {/* Floating caption card */}
        <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-cream/15 bg-forest-deep/70 p-4 backdrop-blur-md sm:left-8 sm:right-auto sm:max-w-xs">
          <p className="text-sm font-semibold text-cream">Photographed in our workshop</p>
          <p className="mt-1 text-xs text-cream/70">
            {brand.director}&apos;s crew · {brand.region}
          </p>
        </div>
      </div>
    </section>
  );
}