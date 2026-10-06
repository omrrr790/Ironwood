"use client";

import { Star } from "lucide-react";
import Marquee from "@/components/ui/Marquee";

type MarqueeStripProps = {
  items: string[];
  variant?: "light" | "dark";
  withStar?: boolean;
};

export default function MarqueeStrip({
  items,
  variant = "light",
  withStar = true,
}: MarqueeStripProps) {
  const dark = variant === "dark";
  return (
    <div
      className={
        dark
          ? "border-y border-cream/10 bg-forest-deep py-5"
          : "border-y border-ink/10 bg-cream-soft py-5"
      }
    >
      <Marquee
        items={items}
        speed={26}
        separator={
          withStar ? (
            <Star
              size={16}
              className={dark ? "fill-copper text-copper" : "fill-timber text-timber"}
            />
          ) : null
        }
        itemClassName={
          dark
            ? "display text-xl sm:text-2xl text-cream/80"
            : "display text-xl sm:text-2xl text-ink/70"
        }
      />
    </div>
  );
}
