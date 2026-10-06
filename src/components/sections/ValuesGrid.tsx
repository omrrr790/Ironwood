"use client";

import { values } from "@/lib/data";
import { Icon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

export default function ValuesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((v, i) => (
        <Reveal key={v.title} delay={(i % 3) * 100}>
          <TiltCard className="h-full rounded-3xl border border-line bg-white/70 p-7 backdrop-blur transition-colors duration-500 hover:border-copper/50 sm:p-8">
            <span className="grid h-13 w-13 place-items-center rounded-2xl bg-forest/10 text-forest">
              <Icon name={v.icon} size={24} />
            </span>
            <h3 className="display mt-6 text-2xl text-ink">{v.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.description}</p>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}
