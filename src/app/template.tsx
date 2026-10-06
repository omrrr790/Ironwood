"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Root template — re-mounts on every navigation, giving each page
 * a subtle entrance animation as the transition curtain lifts.
 */
export default function Template({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setEntered(true), 60);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? "none" : "translateY(16px)",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}
