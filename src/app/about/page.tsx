import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StatsBand from "@/components/sections/StatsBand";
import CtaBand from "@/components/sections/CtaBand";
import ValuesGrid from "@/components/sections/ValuesGrid";
import TeamGrid from "@/components/sections/TeamGrid";
import Timeline from "@/components/sections/Timeline";
import GalleryMosaic from "@/components/sections/GalleryMosaic";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import { images, testimonials, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ironwood is the building brand of Raza Group of Construction Pty Ltd (ABN 83 701 114 614), crafting homes and timber work across Sydney's Western Suburbs.",
};

export default function AboutPage() {
  const quote = testimonials[3];
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title="Crafted by hand. Driven by pride."
        highlight={["pride."]}
        subtitle="We started with a promise to build it properly — and a workshop bench. That promise hasn't moved an inch."
        image={images.detail}
        imageAlt="Hand-finished timber detailing by Ironwood"
        meta={[
          { label: "ABN", value: "83 701 114 614" },
          { label: "Entity", value: "Raza Group of Construction Pty Ltd" },
          { label: "Based in", value: "Plumpton NSW" },
          { label: "Activity", value: "Carpentry (32420)" },
        ]}
      />

      {/* Story */}
      <section className="bg-cream py-24 lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="The Ironwood way"
                title="A workshop, not just a building company"
              />
              <Reveal delay={140}>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  <p>
                    Most builders coordinate. We <em className="font-semibold not-italic text-forest">make</em>.
                    Our Plumpton workshop fabricates the kitchens,
                    stairs, doors and details that give a home its character —
                    which means the person who designs a detail is often the
                    person who builds it.
                  </p>
                  <p>
                    That&apos;s the difference between a house that&apos;s
                    assembled and a home that&apos;s crafted. It&apos;s why we
                    don&apos;t chase volume, and why we&apos;ll turn down work
                    rather than compromise the standard that built our name.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-10">
                  <div>
                    <p className="display text-4xl text-forest">98%</p>
                    <p className="mt-1 text-sm text-ink-soft">Would recommend us</p>
                  </div>
                  <div>
                    <p className="display text-4xl text-forest">7-yr</p>
                    <p className="mt-1 text-sm text-ink-soft">Structural warranty</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="relative lg:col-span-6">
              <Reveal dir="right">
                <ImageReveal
                  src={images.timber}
                  alt="Ironwood's workshop and timber work"
                  aspect="aspect-[4/3]"
                  rounded="rounded-[2rem]"
                />
              </Reveal>
              <div className="anim-floaty-soft absolute -bottom-6 left-8 max-w-xs rounded-2xl bg-forest px-6 py-5 text-cream shadow-2xl">
                <p className="eyebrow text-oat">In-house</p>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/85">
                  Kitchens, stairs and joinery fabricated in our own workshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream-soft py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                tag: "Mission",
                title: "Build homes that outlast their owners.",
                text: "To craft residential spaces of enduring quality — using honest materials, skilled hands and transparent process — so every family we build for feels the care in every corner.",
              },
              {
                tag: "Vision",
                title: "Make craftsmanship the standard, not the exception.",
                text: "A building industry where quality is measured in decades, tradespeople are proud of their work, and homeowners never dread the renovation process.",
              },
            ].map((m, i) => (
              <Reveal key={m.tag} delay={i * 120}>
                <div className="relative h-full overflow-hidden rounded-3xl bg-forest-deep p-8 text-cream sm:p-10">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
                  />
                  <p className="eyebrow text-copper">{m.tag}</p>
                  <h3 className="display mt-4 text-3xl leading-tight sm:text-4xl">{m.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-cream/70 sm:text-base">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What we stand for"
            title="Six values we build on"
            subtitle="They're not posters on a wall. They're the reason we sleep at night and the reason clients recommend us to their neighbours."
            align="center"
            className="mx-auto mb-16"
          />
          <ValuesGrid />
        </div>
      </section>

      <StatsBand tone="dark" />

      {/* Team */}
      <section className="bg-cream py-24 lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The people"
              title="The hands behind the homes"
              subtitle="Builders, carpenters, designers and estimators — a tight team that's been doing this together for years."
            />
          </div>
          <div className="mt-14">
            <TeamGrid />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-soft py-24 lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Milestones"
                title="Built to one standard"
                subtitle="The moments that shaped Ironwood — from a single ute to one of Western Sydney's most trusted builders."
                className="lg:sticky lg:top-28"
              />
            </div>
            <div className="lg:col-span-8">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-24 lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Life at Ironwood"
            title="Scenes from the workshop & sites"
            align="center"
            className="mx-auto mb-14"
          />
          <GalleryMosaic />
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <p className="display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              “{quote.quote}”
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={quote.image}
                alt={quote.name}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-cream/20"
              />
              <div className="text-left">
                <p className="font-semibold">{quote.name}</p>
                <p className="text-sm text-cream/60">{quote.role} · {quote.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with a team you can trust"
        title="Let's write the next chapter together."
        highlight={["together."]}
      />
    </>
  );
}
