"use client";

import { ReactNode, useState } from "react";
import { useInView, useElementProgress } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspect?: string;
  priority?: boolean;
  /** parallax strength in px */
  parallax?: number;
  objectPosition?: string;
  sizes?: string;
  children?: ReactNode;
  threshold?: number;
  rounded?: string;
};

/**
 * Image with a masked scale-down reveal and optional scroll parallax.
 * Self-contained: handles lazy loading + fade-in + reveal + parallax.
 */
export default function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  aspect,
  priority = false,
  parallax = 0,
  objectPosition,
  sizes,
  children,
  threshold = 0.2,
  rounded = "rounded-2xl",
}: ImageRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });
  const { progress } = useElementProgress<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);

  const scale = inView ? 1 : 1.22;
  const y = parallax ? (progress - 0.5) * -parallax : 0;

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", rounded, aspect, className)}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-[opacity,filter] duration-[1200ms] will-change-transform",
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
          imgClassName
        )}
        style={{
          objectPosition,
          transform: `scale(${scale}) translateY(${y}px)`,
          transition: `opacity 1.2s ease, filter 1.2s ease, transform 1.6s cubic-bezier(0.16,1,0.3,1)`,
        }}
      />
      {children}
    </div>
  );
}
