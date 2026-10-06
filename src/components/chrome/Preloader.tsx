"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/data";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(100);
      setExiting(true);
      setHidden(true);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        window.setTimeout(() => setHidden(true), 800);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-deep transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{ transform: exiting ? "translateY(-100%)" : "translateY(0)" }}
      aria-hidden
    >
      <div className="flex flex-col items-center">
        <div className="mb-8 flex items-center gap-3 overflow-hidden">
          <img
            src={brand.emblem}
            alt=""
            className="h-12 w-auto object-contain"
            style={{ animation: "floaty-soft 3s ease-in-out infinite" }}
          />
          <span
            className="display text-2xl tracking-[0.14em] text-cream"
            style={{ animation: "floaty-soft 3s ease-in-out infinite 0.15s" }}
          >
            IRONWOOD
          </span>
        </div>
        <div className="h-px w-56 overflow-hidden bg-cream/15">
          <div
            className="h-full bg-copper transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 flex w-56 items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-cream/50">
          <span>Carpentry &amp; Construction</span>
          <span className="tabular-nums text-cream/80">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
