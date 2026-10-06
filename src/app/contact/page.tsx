import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FaqSection from "@/components/sections/FaqSection";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { brand, images, contactChannels } from "@/lib/data";
import { Icon, socialLinks } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free, no-obligation quote from Ironwood Carpentry & Construction. Call 0432 771 154 or send us a message.",
};

const channelIcons: Record<string, string> = { Phone: "Phone", Mail: "Mail", MapPin: "MapPin" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about your build."
        highlight={["build."]}
        subtitle="Free, no-obligation site consultation across Sydney's Western Suburbs. Tell us about your project and we'll bring clear answers."
        image={images.exteriorPool}
        imageAlt="A completed Ironwood outdoor living space"
        meta={[
          { label: "Phone", value: brand.phone },
          { label: "Email", value: "Replies within 1 day" },
          { label: "Based in", value: "Plumpton NSW" },
          { label: "Hours", value: brand.hours },
        ]}
      />

      {/* Contact form + info */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* info */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Contact details"
                title="Prefer to talk it through?"
                subtitle="Call or email us directly — a real person answers, and you'll speak to the builder who'd actually run your project."
              />

              <div className="mt-10 space-y-4">
                {contactChannels.map((c, i) => (
                  <Reveal key={c.label} delay={i * 80}>
                    <a
                      href={c.href ?? "#"}
                      className="group flex items-center gap-5 rounded-2xl border border-line bg-white/60 p-5 transition-all duration-300 hover:border-copper/50 hover:shadow-lg"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-copper group-hover:text-cream">
                        <Icon name={channelIcons[c.icon]} size={22} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                          {c.label}
                        </p>
                        <p className="mt-0.5 font-semibold text-ink">{c.value}</p>
                        <p className="text-xs text-ink-soft">{c.hint}</p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="ml-auto text-ink/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper"
                      />
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={260}>
                <div className="mt-8 rounded-2xl bg-forest p-6 text-cream">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-copper" />
                    <p className="font-semibold">Opening hours</p>
                  </div>
                  <p className="mt-2 text-sm text-cream/70">{brand.hours}</p>
                  <ul className="mt-4 space-y-2 text-sm text-cream/80">
                    {["Free on-site quotes", "Evening & weekend consultations", "Same-week response guarantee"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-copper" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location / map */}
      <section className="bg-cream-soft py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Where we work"
                title="Rooted in Plumpton, building across the west"
                subtitle="From Parramatta and Blacktown out to the Blue Mountains and the Hawkesbury — if you're planning a build in Western Sydney, we're close."
              />
              <Reveal delay={150}>
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {["Plumpton", "Blacktown", "Parramatta", "Hills District", "Blue Mountains", "Hawkesbury"].map((a) => (
                    <li key={a} className="flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2.5 text-sm font-semibold text-ink">
                      <MapPin size={14} className="text-copper" /> {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={220}>
                <a
                  href="https://maps.google.com/?q=Plumpton+NSW+2761"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-copper"
                >
                  Open in Google Maps
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>

            <Reveal dir="right">
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-forest-deep p-8 text-cream">
                {/* decorative map grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(216,198,165,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(216,198,165,0.4) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
                  style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
                />
                <div className="relative">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-copper text-cream">
                    <MapPin size={28} />
                  </span>
                  <h3 className="display mt-6 text-3xl">Ironwood HQ</h3>
                  <p className="mt-3 text-sm text-cream/70">{brand.address}</p>
                  <p className="text-sm text-cream/70">{brand.regionFull}</p>
                  <div className="mt-6 flex gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream/70 transition-all hover:border-copper hover:bg-copper hover:text-cream"
                      >
                        <s.Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection compact />

      {/* quick actions */}
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <Reveal>
              <a href={brand.phoneHref} className="group block rounded-3xl border border-cream/10 p-8 transition-colors hover:border-copper/50">
                <Phone size={26} className="mx-auto text-copper" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-cream/60">Call us now</p>
                <p className="display mt-2 text-2xl text-cream group-hover:text-copper">{brand.phone}</p>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <a href={brand.emailHref} className="group block rounded-3xl border border-cream/10 p-8 transition-colors hover:border-copper/50">
                <Mail size={26} className="mx-auto text-copper" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-cream/60">Email us</p>
                <p className="display mt-2 text-2xl text-cream group-hover:text-copper">Send a message</p>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <Link href="/work" className="group block rounded-3xl border border-cream/10 p-8 transition-colors hover:border-copper/50">
                <MapPin size={26} className="mx-auto text-copper" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-cream/60">See our work first</p>
                <p className="display mt-2 text-2xl text-cream group-hover:text-copper">Browse projects</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
