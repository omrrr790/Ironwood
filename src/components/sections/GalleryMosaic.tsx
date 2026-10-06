"use client";

import { gallery } from "@/lib/data";
import ImageReveal from "@/components/ui/ImageReveal";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const spans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
];

export default function GalleryMosaic() {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
      {gallery.slice(0, 8).map((src, i) => (
        <Reveal key={i} delay={(i % 4) * 80} className={cn(spans[i])}>
          <ImageReveal
            src={src}
            alt="Ironwood project gallery"
            aspect="h-full w-full"
            rounded="rounded-2xl"
            className="h-full w-full"
          />
        </Reveal>
      ))}
    </div>
  );
}
