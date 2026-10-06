"use client";

import { ElementType, useMemo } from "react";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  /** highlight these exact words (case-sensitive) with accent styling */
  highlight?: string[];
  highlightClassName?: string;
  as?: ElementType;
  /** per-word stagger in ms */
  stagger?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
};

/**
 * Splits a string into words and reveals each with a masked slide-up,
 * producing the classic Awwwards-style headline animation.
 */
export default function TextReveal({
  text,
  className,
  highlight = [],
  highlightClassName,
  as = "h2",
  stagger = 70,
  delay = 0,
  threshold = 0.4,
  once = true,
}: TextRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, once });
  const Tag = as as ElementType;

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <Tag ref={ref} className={cn("is-in-parent", className)}>
      {words.map((word, i) => {
        const isHighlight = highlight.includes(word.replace(/[^\w-]/g, ""));
        const clean = word;
        return (
          <span key={i} className="split-word" aria-hidden={undefined}>
            <span
              className={cn("split-inner", inView && "is-in")}
              style={{ transitionDelay: `${delay + i * stagger}ms` }}
            >
              {isHighlight ? (
                <span className={highlightClassName || "text-gradient"}>{clean}</span>
              ) : (
                clean
              )}
            </span>
            {i < words.length - 1 ? "\u00A0" : null}
          </span>
        );
      })}
    </Tag>
  );
}
