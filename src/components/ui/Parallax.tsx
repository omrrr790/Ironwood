"use client";

import { ReactNode } from "react";
import { useElementProgress } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** vertical travel in px across the scroll range */
  speed?: number;
  /** offset in px when out of view */
  from?: number;
};

export default function Parallax({
  children,
  className,
  speed = 80,
  from = -40,
}: ParallaxProps) {
  const { ref, progress } = useElementProgress<HTMLDivElement>();
  const y = from + progress * speed;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        className="will-change-transform"
        style={{ transform: `translate3d(0, ${y}px, 0)` }}
      >
        {children}
      </div>
    </div>
  );
}
