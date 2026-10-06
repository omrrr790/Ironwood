"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, Check } from "lucide-react";
import { brand, nav, services } from "@/lib/data";
import { socialLinks } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-cream">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        {/* Top band */}
        <Reveal>
          <div className="grid gap-10 border-b border-cream/10 py-16 lg:grid-cols-2 lg:items-end lg:py-20">
            <div>
              <p className="eyebrow mb-5 text-oat">Start your project</p>
              <h2 className="display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <br />
                <span className="text-gradient">that lasts.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="mb-5 max-w-md text-cream/60">
                Get our quarterly build guide — real costs, timelines and
                timber talk. No spam, ever.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-6 py-4 text-sm font-medium text-cream">
                  <Check size={18} className="text-copper" />
                  Thanks — you&apos;re on the list.
                </div>
              ) : (
                <form onSubmit={submit} className="flex max-w-md overflow-hidden rounded-full border border-cream/20 bg-cream/5 p-1.5 backdrop-blur">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    aria-label="Email address"
                    className="w-full bg-transparent px-4 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-copper px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-forest"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        {/* Columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <img src={brand.emblem} alt="" className="h-11 w-11 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="display text-xl tracking-[0.12em]">IRONWOOD</span>
                <span className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-oat">
                  Carpentry &amp; Construction
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
              A family-owned builder and joinery workshop crafting homes,
              extensions and timber work across Sydney&apos;s Western Suburbs.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-copper hover:bg-copper hover:text-cream"
                >
                  <s.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-6 text-oat">Navigate</h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cream/60 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-6 text-oat">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-sm text-cream/60 transition-colors hover:text-cream">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-6 text-oat">Company</h3>
            <ul className="mb-8 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cream/60 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 border-t border-cream/10 pt-6 text-sm text-cream/60">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-copper" />
                <a href={brand.phoneHref} className="hover:text-cream">{brand.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-copper" />
                <a href={brand.emailHref} className="break-all hover:text-cream">{brand.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-copper" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-cream/10 py-8 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <p className="hidden md:block">
            {brand.abnFormatted} · {brand.activity}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-cream">Privacy</a>
            <a href="#" className="transition-colors hover:text-cream">Terms</a>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-cream/60 transition-colors hover:border-copper hover:text-cream"
            >
              Back to top
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* giant watermark wordmark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="display -mb-[4vw] whitespace-nowrap text-center text-[18vw] leading-none text-cream/[0.04]">
          IRONWOOD
        </p>
      </div>
    </footer>
  );
}
