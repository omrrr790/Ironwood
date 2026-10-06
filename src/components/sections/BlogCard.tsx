"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { BlogPost } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function BlogCard({
  post,
  index,
  featured = false,
}: {
  post: BlogPost;
  index: number;
  featured?: boolean;
}) {
  return (
    <Reveal delay={(index % 3) * 90}>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl",
            featured ? "aspect-[16/9]" : "aspect-[16/10]"
          )}
        >
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-4 text-xs text-ink-soft">
            <span>{post.date}</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
          <h3
            className={cn(
              "display mt-3 text-ink transition-colors group-hover:text-copper-deep",
              featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
            )}
          >
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-2">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors group-hover:text-copper">
            Read article
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
