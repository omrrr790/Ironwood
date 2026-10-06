"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "New Build",
  "Extension",
  "Renovation",
  "Timber Structure",
  "Heritage",
  "Custom Build",
];

export default function ProjectFilterGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      {/* filters */}
      <div className="no-scrollbar mb-12 flex gap-3 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              active === c
                ? "border-forest bg-forest text-cream"
                : "border-line bg-white/60 text-ink hover:border-forest/40"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* grid */}
      <div key={active} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
