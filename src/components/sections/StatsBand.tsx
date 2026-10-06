"use client";

import { stats } from "@/lib/data";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type StatsBandProps = {
  tone?: "light" | "dark";
  items?: typeof stats;
  className?: string;
};

export default function StatsBand({
  tone = "light",
  items = stats,
  className,
}: StatsBandProps) {
  const dark = tone === "dark";
  return (
    <section className={cn(dark ? "bg-forest-deep text-cream" : "bg-cream text-ink", className)}>
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="border-l pl-5" >
              <Counter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
                className={cn(dark ? "text-cream" : "text-ink")}
                label={s.label}
                labelClassName={dark ? "text-cream/60" : "text-ink-soft"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
