"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectsHome() {
  const [featured, ...rest] = projects;

  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Recent projects, real results"
            subtitle="A few of the homes we've delivered across Western Sydney — each one built to the same uncompromising standard."
          />
          <Reveal delay={200}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-copper hover:text-copper"
            >
              View all projects
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Featured */}
        <div className="mt-14">
          <ProjectCard project={featured} index={0} large />
        </div>

        {/* Grid */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 1} />
          ))}
        </div>

        {/* two wide */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {rest.slice(3, 5).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
