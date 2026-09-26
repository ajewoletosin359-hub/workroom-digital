import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const methods = [
    { k: "WhatsApp", v: site.whatsappLabel, href: site.whatsapp },
    { k: "Email", v: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <section id="contact" aria-labelledby="contact-heading" className="grain relative overflow-hidden border-t border-white/[0.07] bg-deep scroll-mt-16">
      {/* Closing backdrop — same visual language as the hero, denser for readability */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(100% 80% at 15% 100%, #242b33 0%, #161b21 45%, #0d1117 80%)",
          }}
        />
        <div className="bg-fine-grid absolute inset-0 opacity-60" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M-60 200 C 300 260, 640 180, 940 300 S 1300 340, 1520 260" stroke="#F1F1EF" strokeOpacity="0.07" strokeWidth="1.2" />
          <path d="M-60 260 C 320 320, 660 240, 960 360 S 1310 400, 1520 320" stroke="#F1F1EF" strokeOpacity="0.05" strokeWidth="1.2" />
          <path d="M720 -40 L 720 940" stroke="#F1F1EF" strokeOpacity="0.05" strokeWidth="1" />
        </svg>
        <div className="vignette-t absolute inset-0" />
      </div>
      <div className="container-editorial relative z-10 grid gap-12 py-20 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight text-primary md:text-7xl"
            >
              Let&rsquo;s build something useful.
            </h2>
            <p className="body-balance mt-6 max-w-md text-[16px] leading-relaxed text-secondary">
              Have a repetitive process that should be automated, a video idea that
              needs a better workflow, or a website that needs stronger search
              visibility? Let&rsquo;s talk about it.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arrow inline-flex items-center gap-2 rounded-btn bg-accent px-7 py-4 text-sm font-semibold text-deep transition-colors hover:bg-white"
              >
                WhatsApp <ArrowUpRight size={16} aria-hidden />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="btn-arrow inline-flex items-center gap-2 rounded-btn border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-primary transition-colors hover:border-white/30"
              >
                Email <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
            <ul className="mt-10 border-t border-white/15">
              {methods.map((m) => (
                <li key={m.k} className="border-b border-white/10">
                  <a
                    href={m.href}
                    {...(m.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                        {m.k}
                      </span>
                      <span className="mt-1 block break-words text-[16px] font-semibold text-primary">
                        {m.v}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden
                      className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </a>
                </li>
              ))}
            </ul>
            {site.socials.length > 0 ? (
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {site.socials.map((s, i) => (
                  <span key={s.label}>
                    {i > 0 && " · "}
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline hover:text-secondary"
                    >
                      {s.label} ↗
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="rounded-card border border-white/10 bg-background p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
