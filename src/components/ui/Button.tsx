"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "outline-dark";
  className?: string;
  size?: "md" | "lg" | "sm";
  withArrow?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  ariaLabel?: string;
};

const variants: Record<string, string> = {
  primary:
    "bg-copper text-cream after:bg-forest-deep hover:text-cream",
  secondary:
    "bg-forest text-cream after:bg-copper hover:text-cream",
  ghost:
    "text-ink hover:text-cream after:bg-forest",
  light:
    "bg-cream text-forest after:bg-forest hover:text-cream",
  "outline-dark":
    "border border-ink/30 text-ink hover:text-cream after:bg-forest",
};

const sizes: Record<string, string> = {
  sm: "px-5 py-3 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  size = "md",
  withArrow = false,
  magnetic = true,
  onClick,
  type = "button",
  external = false,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "btn-magnetic rounded-full font-semibold tracking-wide",
    variants[variant],
    sizes[size],
    className
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowUpRight size={18} className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const element = href ? (
    external ? (
      <a href={href} className={cn("group", classes)} aria-label={ariaLabel} target="_blank" rel="noreferrer">
        {inner}
      </a>
    ) : (
      <Link href={href} className={cn("group", classes)} aria-label={ariaLabel}>
        {inner}
      </Link>
    )
  ) : (
    <button type={type} onClick={onClick} className={cn("group", classes)} aria-label={ariaLabel}>
      {inner}
    </button>
  );

  return magnetic ? <Magnetic>{element}</Magnetic> : element;
}
