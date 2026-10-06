"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string[];
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight = [],
  subtitle,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
  as = "h2",
  children,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal delay={0}>
          <div
            className={cn(
              "eyebrow mb-5 flex items-center gap-3",
              align === "center" && "justify-center",
              dark ? "text-copper-deep" : "text-oat"
            )}
          >
            <span className="h-px w-8 bg-current" />
            {eyebrow}
            {align === "center" && <span className="h-px w-8 bg-current" />}
          </div>
        </Reveal>
      )}
      <TextReveal
        as={as}
        text={title}
        highlight={highlight}
        highlightClassName={dark ? "text-gradient" : "text-gradient-dark"}
        className={cn(
          "display text-4xl sm:text-5xl lg:text-6xl",
          dark ? "text-ink" : "text-cream",
          titleClassName
        )}
      />
      {subtitle && (
        <Reveal delay={120}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
              align === "center" && "mx-auto",
              dark ? "text-ink-soft" : "text-cream/70"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
