import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-deep pt-[68px]"
    >
      {/* ---- Full-bleed background image layer ---- */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Base photographic-grade falloff */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(110% 75% at 50% 8%, #262c34 0%, #181d23 42%, #0d1117 78%, #0a0e13 100%)",
          }}
        />
        {/* Architectural grid, masked toward the type */}
        <div className="bg-fine-grid mask-fade-b absolute inset-0" />
        {/* Contour sweeps — technical drawing energy, monochrome */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M-60 720 C 300 640, 620 700, 900 560 S 1300 480, 1520 380" stroke="#F1F1EF" strokeOpacity="0.09" strokeWidth="1.2" />
          <path d="M-60 770 C 320 690, 640 750, 920 610 S 1310 530, 1520 430" stroke="#F1F1EF" strokeOpacity="0.06" strokeWidth="1.2" />
          <path d="M-60 820 C 340 740, 660 800, 940 660 S 1320 580, 1520 480" stroke="#F1F1EF" strokeOpacity="0.04" strokeWidth="1.2" />
          <path d="M360 -40 L 360 940" stroke="#F1F1EF" strokeOpacity="0.05" strokeWidth="1" />
          <path d="M1080 -40 L 1080 940" stroke="#F1F1EF" strokeOpacity="0.05" strokeWidth="1" />
          <circle cx="720" cy="180" r="120" stroke="#D6D4CE" strokeOpacity="0.08" strokeWidth="1" />
          <circle cx="720" cy="180" r="78" stroke="#D6D4CE" strokeOpacity="0.06" strokeWidth="1" />
        </svg>
        {/* Readability vignette into the next section */}
        <div className="vignette-b absolute inset-0" />
      </div>

      {/* ---- Centered foreground composition ---- */}
      <div className="container-editorial relative z-10 flex flex-1 flex-col items-center justify-center pb-14 pt-10 text-center md:pt-14">
        <Reveal>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
            <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
            AI Automation&nbsp;&nbsp;·&nbsp;&nbsp;AI Video&nbsp;&nbsp;·&nbsp;&nbsp;SEO
            <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-heading"
            className="mt-6 font-display text-[clamp(3.9rem,15vw,12rem)] uppercase leading-[0.86] tracking-tight text-primary"
          >
            Automate.
            <br />
            <span className="relative inline-block">
              Create.
              <svg
                className="absolute -bottom-2 left-0 w-full md:-bottom-3"
                viewBox="0 0 300 14"
                fill="none"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  className="flow-line-path"
                  d="M4 10 C 80 2, 200 2, 296 8"
                  stroke="#D6D4CE"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </span>
            <br />
            <span className="text-outline" aria-hidden="true">
              Grow.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="body-balance mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-secondary md:text-lg">
            I help small businesses automate repetitive work, create better
            content and build a stronger online presence through practical AI
            systems and SEO.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contact"
              className="btn-arrow inline-flex items-center gap-2 rounded-btn bg-accent px-7 py-4 text-sm font-semibold text-deep transition-colors hover:bg-white"
            >
              Let&rsquo;s talk <ArrowUpRight size={16} aria-hidden />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-btn border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-primary backdrop-blur-sm transition-colors hover:border-white/40"
            >
              View my work <ArrowDown size={16} aria-hidden />
            </Link>
          </div>
          <p className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-muted">
            <a href={`mailto:${site.email}`} className="link-underline hover:text-secondary">
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-secondary"
            >
              {site.whatsappLabel} ↗
            </a>
          </p>
        </Reveal>
      </div>

      <div className="container-editorial relative z-10 flex items-center justify-between pb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        <span>{site.name} — practical digital systems</span>
        <span className="hidden sm:inline">Scroll ↓</span>
      </div>
    </section>
  );
}
