import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ProcessSection from "@/components/sections/ProcessSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import Button from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { services, tools, images } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "New home builds, renovations, extensions, carpentry, decks, roofing and custom joinery — every discipline handled by Ironwood's own qualified team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Every trade. One standard."
        highlight={["standard."]}
        subtitle="Six disciplines, all under one roof and one accountable team. No subcontractor roulette, no finger-pointing — just craft, end to end."
        image={images.timber}
        imageAlt="Timber carpentry work by Ironwood"
        meta={[
          { label: "Services", value: "6 disciplines" },
          { label: "In-house", value: "Joinery workshop" },
          { label: "Warranty", value: "7-year structural" },
          { label: "Coverage", value: "Western Sydney" },
        ]}
      />

      {/* Overview intro */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="The full scope"
                title="From the slab to the last coat of oil"
                subtitle="Whether you're building from scratch, opening up a tired terrace, or adding a deck for summer — the same qualified carpenters see it through."
              />
            </div>
            <Reveal delay={150} className="lg:col-span-5 lg:justify-self-end">
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Because we fabricate our own joinery and manage our own crews,
                quality never gets handed off. Every service below is delivered
                by the same people who answer your calls.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service detail rows */}
      <section className="bg-cream pb-24 lg:pb-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="space-y-20 lg:space-y-28">
            {services.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={s.slug}
                  id={s.slug}
                  className="grid scroll-mt-32 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
                >
                  <Reveal
                    dir={flip ? "right" : "left"}
                    className={cn(flip && "lg:order-2")}
                  >
                    <div className="relative">
                      <ImageReveal
                        src={s.image}
                        alt={s.title}
                        aspect="aspect-[4/3]"
                        rounded="rounded-[2rem]"
                      />
                      <div className="anim-floaty-soft absolute -right-4 -top-4 grid h-16 w-16 place-items-center rounded-2xl bg-copper text-cream shadow-xl">
                        <Icon name={s.icon} size={26} />
                      </div>
                    </div>
                  </Reveal>

                  <Reveal dir={flip ? "left" : "right"} className={cn(flip && "lg:order-1")}>
                    <p className="eyebrow text-copper-deep">Service {s.index}</p>
                    <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">{s.title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                      {s.description}
                    </p>
                    <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm font-medium text-ink">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                            <Check size={14} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href="/contact" variant="secondary" withArrow>
                        Enquire about this service
                      </Button>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MarqueeStrip items={services.map((s) => s.title)} variant="dark" />

      {/* Tools / tech */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Tools & technology"
                title="Old-school craft, modern precision"
                subtitle="We pair hand skills with the software and machinery that keep builds accurate, on time and on budget."
                className="lg:sticky lg:top-28"
              />
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3">
                {tools.map((t, i) => (
                  <Reveal key={t} delay={(i % 6) * 60}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-copper hover:text-copper">
                      <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                      {t}
                    </span>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <p className="mt-10 flex items-start gap-3 rounded-2xl border border-copper/30 bg-copper/5 p-6 text-sm leading-relaxed text-ink-soft">
                  <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-copper" />
                  We use laser scanning for heritage restorations and CNC fabrication in our
                  workshop — so even a century-old cornice can be reproduced to the millimetre.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection dark />
      <FaqSection compact />
      <CtaBand
        eyebrow="Let's talk about your project"
        title="Which service do you need?"
        highlight={["need?"]}
      />
    </>
  );
}
