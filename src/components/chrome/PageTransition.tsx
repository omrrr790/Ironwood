"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Cinematic route transition: a two-layer curtain wipes in, the new page
 * reveals underneath, then the curtain lifts. Plus a thin progress bar.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setPhase("cover");
    const t1 = window.setTimeout(() => setPhase("reveal"), 480);
    const t2 = window.setTimeout(() => setPhase("idle"), 1150);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  const cover = phase === "cover";
  const reveal = phase === "reveal";
  const idle = phase === "idle";

  return (
    <>
      {/* progress bar */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[85] h-[2px] w-full origin-left bg-copper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: idle ? "scaleX(0)" : cover ? "scaleX(0.55)" : "scaleX(1)" }}
        aria-hidden
      />

      {/* curtain layer 1 */}
      <div
        className="pointer-events-none fixed inset-0 z-[80] bg-forest transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: idle
            ? "translateY(-100%)"
            : cover
              ? "translateY(0)"
              : "translateY(-100%)",
          transitionDelay: reveal ? "0ms" : "0ms",
        }}
        aria-hidden
      />
      {/* curtain layer 2 */}
      <div
        className="pointer-events-none fixed inset-0 z-[79] bg-copper transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: idle
            ? "translateY(-100%)"
            : cover
              ? "translateY(0)"
              : "translateY(-100%)",
          transitionDelay: cover ? "110ms" : reveal ? "90ms" : "0ms",
        }}
        aria-hidden
      />
    </>
  );
}
