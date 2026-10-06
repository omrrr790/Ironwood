"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: { q: string; a: string }[];
  className?: string;
  itemClassName?: string;
};

export default function Accordion({
  items,
  className,
  itemClassName,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors duration-500",
              isOpen ? "border-forest/30 bg-forest text-cream" : "border-line bg-white/60",
              itemClassName
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
            >
              <span
                className={cn(
                  "text-base font-semibold sm:text-lg",
                  isOpen ? "text-cream" : "text-ink"
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                  isOpen
                    ? "rotate-45 border-copper bg-copper text-cream"
                    : "border-line text-ink"
                )}
              >
                <Plus size={18} />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "px-6 pb-6 text-sm leading-relaxed sm:px-8 sm:text-base",
                    isOpen ? "text-cream/80" : "text-ink-soft"
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
