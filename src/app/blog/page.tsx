import type { Metadata } from "next";
import { blogPosts, images } from "@/lib/data";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import BlogCard from "@/components/sections/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Building science, costs, guides and timber talk from the Ironwood team — honest advice for anyone planning a build in Western Sydney.",
};

const categories = [
  "All",
  "Building Science",
  "Costs & Budgeting",
  "Guides",
  "Outdoor",
  "Sustainability",
];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        crumb="Insights"
        eyebrow="The Ironwood Journal"
        title="Advice worth reading before you build."
        highlight={["build."]}
        subtitle="Real costs, honest timelines and timber talk — written by the builders who actually do the work. No sales spin."
        image={images.blueprint}
        imageAlt="Architectural plans and drawings"
        meta={[
          { label: "Articles", value: `${blogPosts.length}+ and counting` },
          { label: "Topics", value: "Costs, guides, science" },
          { label: "Written by", value: "Our builders" },
          { label: "Updated", value: "Monthly" },
        ]}
      />

      {/* Featured */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <BlogCard post={featured} index={0} featured />
            </div>
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Featured article"
                title="Start here"
                subtitle="Our most-read guide — the honest trade-off between the two framing systems, explained without the jargon."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-line bg-cream-soft py-8">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="no-scrollbar flex gap-3 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                className="shrink-0 rounded-full border border-line bg-white/60 px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-cream"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Latest" title="All articles" className="mb-14" />
          <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip
        items={["Building science", "Real costs", "Renovation guides", "Outdoor living", "Sustainability"]}
        variant="dark"
      />

      {/* Editorial image section */}
      <section className="relative h-[80vh] overflow-hidden">
        <ImageReveal
          src={images.saw}
          alt="A carpenter at work in the Ironwood workshop"
          aspect="h-full w-full"
          rounded="rounded-none"
          className="h-full w-full"
          parallax={60}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-forest-deep/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[90rem] px-5 pb-20 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-4 text-oat">From the workshop</p>
            <p className="display max-w-3xl text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              “Good advice, like good timber, only comes from experience.”
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Got a question we haven't answered?"
        title="Ask the builders directly."
        highlight={["directly."]}
        subtitle="No sales team, no call centre. Ask us anything about your project and get a straight answer."
      />
    </>
  );
}
