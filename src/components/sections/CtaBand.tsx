"use client";

import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Button from "@/components/ui/Button";
import { brand } from "@/lib/data";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  highlight?: string[];
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function CtaBand({
  eyebrow = "Ready to get started?",
  title = "Let's build something that lasts.",
  highlight = ["lasts."],
  subtitle = "Book a free, no-obligation site consultation. We'll walk your property, listen to your ideas, and give you a clear, written estimate.",
  primaryLabel = "Get a Free Quote",
  secondaryLabel = "Call 0432 771 154",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl anim-gradient"
        style={{ background: "radial-gradient(circle, var(--copper) 0%, transparent 65%)" }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="eyebrow mb-6 flex items-center justify-center gap-3 text-oat">
              <span className="h-px w-8 bg-copper" />
              {eyebrow}
              <span className="h-px w-8 bg-copper" />
            </div>
          </Reveal>
          <TextReveal
            as="h2"
            text={title}
            highlight={highlight}
            highlightClassName="text-gradient-dark"
            className="display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl"
          />
          {subtitle && (
            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
                {subtitle}
              </p>
            </Reveal>
          )}
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                {primaryLabel}
              </Button>
              <Button href={brand.phoneHref} variant="light" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
