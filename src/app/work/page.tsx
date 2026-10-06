import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StatsBand from "@/components/sections/StatsBand";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";
import ProjectCard from "@/components/sections/ProjectCard";
import ProjectFilterGrid from "@/components/sections/ProjectFilterGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse Ironwood's portfolio of new builds, extensions, heritage restorations and timber structures across Sydney's Western Suburbs.",
};

export default function WorkPage() {
  const [featured, ...rest] = projects;
  return (
    <>
      <PageHero
        crumb="Work"
        eyebrow="Portfolio"
        title="Work we're proud to sign."
        highlight={["sign."]}
        subtitle="Every project is a partnership. Here are a few homes and structures that show what happens when craft meets a clear brief."
        image={images.exteriorModern}
        imageAlt="A completed Ironwood new build"
        meta={[
          { label: "Projects", value: "240+" },
          { label: "Categories", value: "6" },
          { label: "Repeat clients", value: "60%+" },
          { label: "Awards", value: "12" },
        ]}
      />

      {/* Featured */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Featured case study"
            title="This month's build"
            align="center"
            className="mx-auto mb-14"
          />
          <ProjectCard project={featured} index={0} large />
        </div>
      </section>

      {/* Filterable grid */}
      <section className="bg-cream-soft py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="All projects"
            title="Browse by category"
            subtitle="Filter the portfolio to see the kind of work you're planning. Every project links through to its full case study."
            className="mb-14"
          />
          <ProjectFilterGrid />
        </div>
      </section>

      <StatsBand tone="dark" items={[
        { value: 240, suffix: "+", prefix: "", label: "Projects delivered", decimals: 0 },
        { value: 60, suffix: "%", prefix: "", label: "Repeat & referral clients", decimals: 0 },
        { value: 11, suffix: "", prefix: "", label: "Avg. months on site", decimals: 0 },
        { value: 32, suffix: "%", prefix: "", label: "Avg. value uplift", decimals: 0 },
      ]} />

      <Testimonials />

      <CtaBand
        eyebrow="Have a project in mind?"
        title="Your home could be next."
        highlight={["next."]}
        subtitle="Tell us about your block and your vision. We'll bring the craft, the crew and a clear, fixed-price plan."
      />
    </>
  );
}
