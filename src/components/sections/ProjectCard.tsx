"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Project } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  large?: boolean;
  className?: string;
};

export default function ProjectCard({ project, index, large = false, className }: ProjectCardProps) {
  return (
    <Reveal delay={(index % 3) * 90} className={className}>
      <Link
        href={`/work/${project.slug}`}
        className="group block"
        aria-label={`View project: ${project.title}`}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl",
            large ? "aspect-[16/10]" : "aspect-[4/3]"
          )}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          {/* top row */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
            <span className="rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur">
              {project.category}
            </span>
            <span className="grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-cream text-forest opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </span>
          </div>

          {/* bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <p className="mb-2 flex items-center gap-2 text-xs text-cream/70">
              <MapPin size={13} /> {project.location} · {project.year}
            </p>
            <h3
              className={cn(
                "display text-cream",
                large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
              )}
            >
              {project.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-cream/70 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0">
              {project.summary}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
