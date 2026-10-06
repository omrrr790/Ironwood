"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Icon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const layout = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export default function ServicesHome() {
  return (
    <section className="bg-cream-soft py-24 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="Six trades. One accountable team."
            subtitle="From foundations to fine joinery, every discipline is handled by our own qualified carpenters — no buck-passing, no surprises."
          />
          <Reveal delay={200}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-copper hover:text-copper"
            >
              All services
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-3">
          {services.map((s, i) => {
            const tall = i === 0;
            return (
              <Reveal
                key={s.slug}
                delay={(i % 3) * 90}
                className={cn("group", layout[i])}
              >
                <Link
                  href={`/services#${s.slug}`}
                  className={cn(
                    "relative flex h-full flex-col justify-end overflow-hidden rounded-3xl",
                    tall ? "min-h-[28rem]" : "min-h-[16rem]"
                  )}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/35 to-forest-deep/5 transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                    <span className="mb-auto grid h-12 w-12 place-items-center rounded-xl bg-cream/10 text-cream backdrop-blur transition-colors duration-500 group-hover:bg-copper">
                      <Icon name={s.icon} size={22} />
                    </span>
                    <div className="mt-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                        {s.index}
                      </p>
                      <h3 className={cn("display mt-1.5 text-cream", tall ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl")}>
                        {s.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-cream/70">{s.short}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream/90 transition-colors group-hover:text-copper">
                        Learn more
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
