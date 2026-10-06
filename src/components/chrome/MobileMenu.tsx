"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { brand, nav } from "@/lib/data";
import { useScrollLock } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  useScrollLock(open);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col bg-forest-deep text-cream transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden",
        open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
      )}
      aria-hidden={!open}
    >
      {/* ambient */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative flex flex-1 flex-col justify-between px-6 pb-10 pt-24">
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "group flex items-center justify-between border-b border-cream/10 py-4 transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span
                className={cn(
                  "display text-4xl transition-colors",
                  isActive(item.href) ? "text-copper" : "text-cream group-hover:text-copper"
                )}
              >
                {item.label}
              </span>
              <ArrowUpRight
                size={24}
                className="text-cream/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-copper"
              />
            </Link>
          ))}
        </nav>

        <div
          className={cn(
            "space-y-5 transition-all duration-700",
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
          style={{ transitionDelay: open ? "520ms" : "0ms" }}
        >
          <a
            href={brand.phoneHref}
            className="block text-sm text-cream/70"
          >
            <span className="mr-2 text-oat">Call</span>
            {brand.phone}
          </a>
          <a
            href={brand.emailHref}
            className="block text-sm text-cream/70"
          >
            <span className="mr-2 text-oat">Email</span>
            {brand.email}
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-copper px-8 py-4 text-sm font-semibold text-cream"
          >
            Get a Free Quote
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
