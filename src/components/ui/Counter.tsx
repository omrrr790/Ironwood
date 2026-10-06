"use client";

import { useInView, useCountUp } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  label?: string;
  labelClassName?: string;
};

export default function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2000,
  className,
  label,
  labelClassName,
}: CounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const current = useCountUp(value, inView, duration);

  const formatted = current.toLocaleString("en-AU", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className={cn("text-left", className)}>
      <div className="display text-5xl sm:text-6xl lg:text-7xl tabular-nums">
        {prefix}
        {formatted}
        <span className="text-copper">{suffix}</span>
      </div>
      {label && (
        <p className={cn("mt-3 text-sm font-medium text-ink-soft", labelClassName)}>
          {label}
        </p>
      )}
    </div>
  );
}
