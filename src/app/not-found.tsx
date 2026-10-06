import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { brand } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-deep px-5 text-center text-cream">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--copper), transparent 70%)" }}
      />
      <div className="grain absolute inset-0" />
      <div className="relative">
        <img src={brand.emblem} alt="" className="mx-auto mb-8 h-14 w-14 object-contain" />
        <p className="display text-[7rem] leading-none text-gradient-dark sm:text-[10rem]">404</p>
        <h1 className="display mt-4 text-3xl sm:text-4xl">This page has been demolished.</h1>
        <p className="mx-auto mt-4 max-w-md text-cream/60">
          The page you&apos;re looking for doesn&apos;t exist — but we build things
          for a living, so let&apos;s get you somewhere useful.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-forest"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
