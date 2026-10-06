"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<FormState> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.phone && !/^[\d\s()+.-]{6,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 10) next.message = "Tell us a little more (at least 10 characters).";
    return next;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setForm(initial);
    }, 1400);
  };

  const inputClass = (hasError?: string) =>
    cn(
      "w-full rounded-2xl border bg-white/70 px-5 py-4 text-sm text-ink placeholder:text-ink/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-copper/50",
      hasError ? "border-red-500/60" : "border-line focus:border-copper"
    );

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[28rem] flex-col items-center justify-center rounded-3xl border border-line bg-white/70 p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-forest text-cream">
          <Check size={28} />
        </span>
        <h3 className="display mt-6 text-3xl text-ink">Message received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          Thanks — we&apos;ll be in touch within one business day. Need us sooner?
          Call{" "}
          <a href="tel:0432771154" className="font-semibold text-forest">
            0432 771 154
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-copper underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-line bg-white/70 p-6 backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Jane Smith"
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="jane@email.com"
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="0400 000 000"
            className={inputClass(errors.phone)}
          />
        </Field>
        <Field label="Service">
          <select
            value={form.service}
            onChange={(e) => set("service", e.target.value)}
            className={cn(inputClass(), "appearance-none")}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Approximate budget">
          <div className="flex flex-wrap gap-2">
            {["Under $50k", "$50k – $150k", "$150k – $400k", "$400k+"].map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => set("budget", b)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-300",
                  form.budget === b
                    ? "border-forest bg-forest text-cream"
                    : "border-line bg-white/60 text-ink hover:border-forest/40"
                )}
              >
                {b}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us about your project" required error={errors.message}>
          <textarea
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="What are you planning? Where's the property, and when would you like to start?"
            rows={4}
            className={cn(inputClass(errors.message), "resize-none")}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-copper disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message
            <Send size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-copper">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}
