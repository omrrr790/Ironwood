"use client";

import { faqs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FaqSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Questions"
              title="Everything you need to know"
              subtitle="The honest answers to the questions every homeowner asks before they build."
              className="lg:sticky lg:top-28"
            />
            <Reveal delay={200}>
              <div className="mt-8 hidden lg:block">
                <Button href="/contact" variant="secondary" withArrow>
                  Ask us anything
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <Accordion items={compact ? faqs.slice(0, 5) : faqs} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
