"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { images } from "@/lib/data";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import ImageReveal from "@/components/ui/ImageReveal";

const miniStats = [
  { value: 100, suffix: "%", label: "Australian owned & operated" },
  { value: 42, suffix: "", label: "Craftsmen & trades" },
  { value: 98, suffix: "%", label: "Would recommend us" },
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left — statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow mb-6 flex items-center gap-3 text-copper-deep">
                <span className="h-px w-8 bg-copper" />
                Who we are
              </div>
            </Reveal>
            <TextReveal
              as="h2"
              text="We build homes the way they used to be built — by hand, with heart, and to outlast us."
              highlight={["hand,", "outlast"]}
              className="display text-4xl leading-[1.06] text-ink sm:text-5xl lg:text-6xl"
            />
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                Ironwood is a family-owned builder and carpentry crew based in
                Plumpton. We earn our reputation the hard way — one square,
                solid handover at a time, with the same hands on the tools from
                slab to roof.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-10">
              {miniStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="text-ink"
                    label={s.label}
                  />
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-copper"
              >
                More about our story
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          {/* Right — image */}
          <div className="relative lg:col-span-5">
            <Reveal dir="right">
              <ImageReveal
                src={images.home}
                alt="A hand-finished Ironwood home interior"
                aspect="aspect-[4/5]"
                rounded="rounded-[2rem]"
              />
            </Reveal>
            <div className="anim-floaty-soft absolute -left-6 top-10 rounded-2xl border border-ink/10 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="eyebrow text-timber">ABN registered</p>
              <p className="mt-1 text-xl font-bold text-forest">83 701 114 614</p>
            </div>
            <div className="absolute -bottom-6 right-6 rounded-2xl bg-forest px-6 py-5 text-cream shadow-2xl">
              <p className="eyebrow text-oat">Craft promise</p>
              <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-cream/85">
                “If it&apos;s not good enough for our own homes, it doesn&apos;t leave the site.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
