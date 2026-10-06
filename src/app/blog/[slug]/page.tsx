import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import CtaBand from "@/components/sections/CtaBand";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = blogPosts[index];
  const next = blogPosts[(index + 1) % blogPosts.length];

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden bg-forest-deep pb-20 pt-36 text-cream lg:pt-44">
        <div
          className="pointer-events-none absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cream/60 transition-colors hover:text-cream">
              <ArrowLeft size={16} /> All articles
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <span className="rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur">
              {post.category}
            </span>
          </Reveal>
          <TextReveal
            as="h1"
            text={post.title}
            className="display mt-6 text-4xl leading-[1.04] sm:text-5xl lg:text-6xl"
          />
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/60">
              <span className="flex items-center gap-2">
                <Calendar size={15} className="text-copper" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-copper" /> {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-copper text-xs font-bold text-cream">
                  {post.author.charAt(0)}
                </span>
                {post.author} · {post.authorRole}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="mx-auto -mt-6 max-w-5xl px-5 sm:px-8">
        <ImageReveal
          src={post.image}
          alt={post.title}
          aspect="aspect-[16/9]"
          rounded="rounded-[2rem]"
          priority
        />
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <p className="display text-2xl leading-relaxed text-ink sm:text-3xl">
            {post.excerpt}
          </p>
        </Reveal>
        <div className="mt-10 space-y-10">
          {post.body.map((section, i) => (
            <Reveal key={i} delay={i * 40}>
              <h2 className="display text-2xl text-forest sm:text-3xl">{section.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                {section.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* author */}
        <Reveal>
          <div className="mt-14 flex items-center gap-5 rounded-3xl border border-line bg-white/70 p-7">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-forest text-xl font-bold text-cream">
              {post.author.charAt(0)}
            </span>
            <div>
              <p className="font-semibold text-ink">{post.author}</p>
              <p className="text-sm text-ink-soft">{post.authorRole}</p>
            </div>
          </div>
        </Reveal>
      </article>

      {/* next article */}
      <section className="bg-cream-soft py-16 lg:py-20">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <Link href={`/blog/${next.slug}`} className="group block overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/8] overflow-hidden">
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
                  <p className="eyebrow text-copper">Up next</p>
                  <h3 className="display mt-2 max-w-2xl text-3xl text-cream sm:text-4xl">{next.title}</h3>
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
        eyebrow="Planning a build?"
        title="Turn advice into a plan."
        highlight={["plan."]}
      />
    </>
  );
}
