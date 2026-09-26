"use client";

import { useState } from "react";
import { site } from "@/data/site";

const SERVICE_OPTIONS = [
  "AI Automation",
  "AI Video",
  "SEO Optimization",
  "Something Else",
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setError("Please fill in your name, email, and a short message.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("That email address doesn’t look right.");
      return;
    }
    setError("");
    setStatus("sending");

    // Integration-ready: set NEXT_PUBLIC_CONTACT_ENDPOINT to a real endpoint
    // (Formspree / Resend / your API route). Without it, we surface a clear
    // message instead of faking success.
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "";
    if (!endpoint || endpoint.includes("[your-form-id]")) {
      const subject = encodeURIComponent(`Project enquiry from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\n—\nName: ${name}\nEmail: ${email}\nBusiness: ${data.get("company") || "—"}\nNeeds help with: ${data.get("service") || "—"}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("error");
      setError(
        `No form backend is configured yet. Your message was prepared in your email client instead — or email ${site.email} directly.`
      );
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(`Something went wrong sending. Please email ${site.email} directly.`);
    }
  }

  const input =
    "w-full rounded-btn border border-white/12 bg-surface px-4 py-3.5 text-[15px] text-primary placeholder:text-muted focus:border-accent/60 focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[13px] font-semibold text-secondary">
            Name *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            className={input}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-secondary">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={input}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-[13px] font-semibold text-secondary">
            Business / Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Your business (optional)"
            className={input}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-[13px] font-semibold text-secondary">
            What do you need help with?
          </label>
          <select id="service" name="service" defaultValue="AI Automation" className={input}>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-secondary">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A repetitive process to automate, a video idea, or a website that needs visibility — a few sentences is plenty."
          className="w-full resize-y rounded-btn border border-white/12 bg-surface px-4 py-3.5 text-[15px] leading-relaxed text-primary placeholder:text-muted focus:border-accent/60 focus:outline-none"
        />
      </div>
      {status === "sent" ? (
        <p role="status" className="rounded-btn border border-emerald-200/20 bg-emerald-200/10 px-4 py-3 text-sm leading-relaxed text-emerald-100/90">
          Message sent — thank you. I&rsquo;ll reply within two working days.
        </p>
      ) : null}
      {error ? (
        <p role="alert" className="rounded-btn border border-amber-200/20 bg-amber-200/10 px-4 py-3 text-sm leading-relaxed text-amber-100/90">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-btn bg-accent px-7 py-4 text-sm font-semibold text-deep transition-colors hover:bg-white disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Preparing…" : "Send message ↗"}
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Prefer direct contact? Email <span className="text-secondary">{site.email}</span> or
        message <span className="text-secondary">{site.whatsappLabel}</span> on WhatsApp — no form required.
      </p>
    </form>
  );
}
