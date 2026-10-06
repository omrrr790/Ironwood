"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  aspect?: string;
  objectPosition?: string;
  eager?: boolean;
  onErrorFallback?: string;
};

/**
 * Performant image with lazy loading, fade-in on load and graceful error handling.
 * Supports both local (/images/...) and remote (Unsplash) sources.
 */
export default function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  aspect,
  objectPosition,
  eager = false,
  onErrorFallback,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    if (onErrorFallback && !failed) {
      setFailed(true);
    }
  }, [onErrorFallback, failed]);

  const resolved = failed && onErrorFallback ? onErrorFallback : src;

  return (
    <div
      className={cn("relative overflow-hidden", aspect, className)}
      style={aspect ? undefined : { position: "relative" }}
    >
      <img
        src={resolved}
        alt={alt}
        loading={priority || eager ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={cn(
          "h-full w-full object-cover transition-[opacity,filter] duration-[1200ms]",
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
          imgClassName
        )}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
