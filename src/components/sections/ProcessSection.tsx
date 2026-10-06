"use client";

import { process } from "@/lib/data";
import { Icon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function ProcessSection({ dark = false }: { dark?: boolean }) {
  return (
    <section className={cn(dark ? "bg-forest-deep text-cream" : "bg-cream-soft text-ink")}>
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="How we work"
          title="A process with no surprises"
          subtitle="Six clear stages from the first walk-through to handing over the keys — so you always know exactly where your build is up to."
          align="center"
          tone={dark ? "light" : "dark"}
          className="mx-auto"
        />

        <div className="relative mt-16 lg:mt-24">
          {/* connecting line */}
          <div
            className={cn(
              "absolute left-6 top-0 h-full w-px lg:left-1/2",
              dark ? "bg-cream/15" : "bg-ink/10"
            )}
          />
          <div className="space-y-10 lg:space-y-0">
            {process.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.index}
                  className={cn(
                    "relative flex items-start gap-6 pl-0 lg:w-1/2 lg:gap-10",
                    left ? "lg:pr-16" : "lg:ml-auto lg:pl-16"
                  )}
                >
                  {/* node */}
                  <div
                    className={cn(
                      "absolute left-6 top-1 z-10 hidden -translate-x-1/2 lg:block",
                      left ? "lg:right-0 lg:left-auto lg:translate-x-1/2" : "lg:left-0 lg:-translate-x-1/2"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-full border text-sm font-bold",
                        dark
                          ? "border-copper bg-copper text-cream"
                          : "border-forest bg-forest text-cream"
                      )}
                    >
                      {step.index}
                    </span>
                  </div>

                  <Reveal
                    dir={left ? "left" : "right"}
                    className={cn(
                      "ml-14 rounded-2xl border p-6 sm:p-8 lg:ml-0",
                      dark
                        ? "border-cream/10 bg-cream/5"
                        : "border-ink/10 bg-white/70 backdrop-blur"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "grid h-11 w-11 shrink-0 place-items-center rounded-xl",
                          dark ? "bg-copper/15 text-copper" : "bg-forest/10 text-forest"
                        )}
                      >
                        <Icon name={step.icon} size={22} />
                      </span>
                      <div>
                        <span className={cn("eyebrow", dark ? "text-oat" : "text-timber")}>
                          Step {step.index}
                        </span>
                        <h3 className="display mt-1 text-2xl">{step.title}</h3>
                      </div>
                    </div>
                    <p className={cn("mt-4 text-sm leading-relaxed sm:text-base", dark ? "text-cream/65" : "text-ink-soft")}>
                      {step.description}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
