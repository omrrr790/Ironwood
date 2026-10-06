"use client";

import { ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  speed?: number; // seconds per loop
  separator?: ReactNode;
  reverse?: boolean;
};

export default function Marquee({
  items,
  className,
  itemClassName,
  speed = 30,
  separator,
  reverse = false,
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative flex overflow-hidden mask-fade-x",
        className
      )}
      aria-hidden
    >
      <div
        className="anim-marquee marquee-track"
        style={
          {
            "--marquee-duration": `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as CSSProperties
        }
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            <span className={cn("px-6", itemClassName)}>{item}</span>
            {separator}
          </div>
        ))}
      </div>
    </div>
  );
}
