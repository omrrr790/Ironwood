"use client";

import { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in ms */
  delay?: number;
  dir?: "up" | "left" | "right" | "none";
  scale?: boolean;
  threshold?: number;
  once?: boolean;
  as?: ElementType;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  dir = "up",
  scale = false,
  threshold = 0.15,
  once = true,
  as,
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, once });
  const Tag = (as || "div") as ElementType;

  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      data-dir={dir === "none" ? undefined : dir}
      data-scale={scale ? "true" : undefined}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
