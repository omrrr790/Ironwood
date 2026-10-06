"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { brand, nav } from "@/lib/data";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-cream/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="group flex items-center" aria-label="Ironwood home">
           <img
  src={brand.logo}
  alt={brand.fullName}
  className={cn(
    "w-auto object-contain transition-all duration-500 group-hover:scale-105",
    scrolled ? "h-12 brightness-100" : "h-14 brightness-0 invert"
  )}
/>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive(item.href)}
                className={cn(
                  "nav-link text-sm font-semibold tracking-wide transition-colors duration-300",
                  scrolled ? "text-ink/80 hover:text-ink" : "text-cream/80 hover:text-cream",
                  isActive(item.href) && (scrolled ? "text-forest" : "text-cream")
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "group hidden items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-500 sm:inline-flex",
                scrolled ? "bg-forest text-cream hover:bg-copper" : "bg-cream text-forest hover:bg-copper hover:text-cream"
              )}
            >
              Get a Quote
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full transition-colors duration-500 lg:hidden",
                scrolled || open ? "bg-forest text-cream" : "bg-cream/10 text-cream ring-1 ring-cream/20"
              )}
            >
              <span
                className={cn(
                  "h-[1.5px] w-5 bg-current transition-all duration-300",
                  open && "translate-y-[7.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-[1.5px] w-5 bg-current transition-all duration-300",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-[1.5px] w-5 bg-current transition-all duration-300",
                  open && "-translate-y-[7.5px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}