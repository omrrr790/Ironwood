import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Clock, Calendar } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaBand from "@/components/sections/CtaBand";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-forest-deep text-cream">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: "scale(1.02)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-forest-deep/30" />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-20">
          <Reveal>
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cream/70 transition-colors hover:text-cream"
            >
              <ArrowLeft size={16} /> Back to all work
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <span className="rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur">
              {project.category}
            </span>
          </Reveal>
          <TextReveal
            as="h1"
            text={project.title}
            className="display mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl xl:text-8xl"
          />
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/75">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-copper" /> {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-copper" /> {project.year}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-copper" /> {project.duration}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-copper">Client</span> {project.client}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview + stats */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Overview" title="The project at a glance" />
              <Reveal delay={120}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-4 rounded-3xl border border-line bg-white/60 p-7">
                {project.stats.map((s, i) => (
                  <Reveal key={i} delay={i * 90} className="text-center">
                    <p className="display text-2xl text-forest sm:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs text-ink-soft">{s.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="bg-cream-soft py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { tag: "The challenge", title: "What we were up against", text: project.challenge, tone: "forest" as const },
              { tag: "The solution", title: "How we solved it", text: project.solution, tone: "copper" as const },
            ].map((b, i) => (
              <Reveal key={b.tag} delay={i * 120}>
                <div className="h-full rounded-3xl bg-white/70 p-8 backdrop-blur sm:p-10">
                  <span className="eyebrow text-copper-deep">{b.tag}</span>
                  <h3 className="display mt-3 text-3xl text-ink">{b.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Large image */}
      <section className="relative h-[90vh] overflow-hidden">
        <ImageReveal
          src={project.gallery[1] ?? project.image}
          alt={`${project.title} — detail`}
          aspect="h-full w-full"
          rounded="rounded-none"
          className="h-full w-full"
          parallax={80}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
      </section>

      {/* Result */}
      <section className="bg-forest-deep py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <TextReveal
                as="h2"
                text="The result speaks for itself."
                highlight={["itself."]}
                highlightClassName="text-gradient-dark"
                className="display text-4xl sm:text-5xl lg:text-6xl"
              />
            </div>
            <Reveal delay={150} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-cream/80">{project.result}</p>
            </Reveal>
          </div>

          {/* gallery */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.gallery.map((g, i) => (
              <Reveal key={i} delay={(i % 4) * 80}>
                <ImageReveal
                  src={g}
                  alt={`${project.title} gallery ${i + 1}`}
                  aspect={i === 0 ? "aspect-[4/5]" : "aspect-square"}
                  rounded="rounded-2xl"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection dark={false} />

      {/* Quote */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="display text-4xl leading-tight text-ink sm:text-5xl">
              “{project.quote.text}”
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-forest text-lg font-bold text-cream">
                {project.quote.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-ink">{project.quote.name}</p>
                <p className="text-sm text-ink-soft">{project.quote.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      <section className="bg-cream pb-24 lg:pb-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <Link
            href={`/work/${next.slug}`}
            className="group block overflow-hidden rounded-[2rem]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={next.image}
                alt={next.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 sm:p-10">
                <div>
                  <p className="eyebrow text-copper">Next project</p>
                  <h3 className="display mt-2 text-3xl text-cream sm:text-5xl">{next.title}</h3>
                  <p className="mt-2 text-sm text-cream/70">
                    {next.category} · {next.location}
                  </p>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-cream text-forest transition-all duration-500 group-hover:bg-copper group-hover:text-cream">
                  <ArrowRight size={22} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Like what you see?"
        title="Let's talk about your project."
        highlight={["project."]}
      />
    </>
  );
}
