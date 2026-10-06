"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle custom cursor: a small dot plus a lagging ring that expands over
 * interactive elements. Desktop-only, ref-driven (no re-renders) for smoothness.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = -100;
    let ty = -100;
    let rx = -100;
    let ry = -100;
    let hovering = false;
    let shown = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target as HTMLElement | null;
      hovering = !!target?.closest?.("a, button, [data-cursor]");
      if (!shown) {
        shown = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const loop = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.width = hovering ? "64px" : "36px";
        ringRef.current.style.height = hovering ? "64px" : "36px";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 rounded-full bg-copper opacity-0"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[89] h-9 w-9 rounded-full border border-copper/70 mix-blend-difference opacity-0 transition-[width,height] duration-300"
        aria-hidden
      />
    </>
  );
}
