import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import VideoShowcase from "./VideoShowcase";
import AutomationShowcase from "./AutomationShowcase";
import Reveal from "./Reveal";

function CapabilityList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="border-t border-white/10" aria-label={label}>
      {items.map((c) => (
        <li
          key={c}
          className="flex items-center gap-3 border-b border-white/[0.07] py-3 text-sm text-secondary"
        >
          <span className="tick" aria-hidden />
          {c}
        </li>
      ))}
    </ul>
  );
}

function ServiceCta({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="btn-arrow mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
    >
      {label} <ArrowUpRight size={15} aria-hidden />
    </Link>
  );
}

/* 02 visual: the real video pieces — no abstract stand-in. */
function VideoVisual() {
  return <VideoShowcase />;
}

/* 03 visual: the real audit screenshots — same files as Selected Work. */
function SeoVisual() {
  return (
    <div className="grid gap-6">
      <figure className="media-frame relative bg-[#0d1218]">
        <Image
          src="/seo/audit-overview.webp"
          alt="SEO audit overview report showing overall site health"
          width={1536}
          height={1024}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <figcaption className="border-t border-white/10 px-5 py-3 font-mono text-[11px] text-muted">
          Audit overview — site health at a glance
        </figcaption>
      </figure>
      <figure className="media-frame relative bg-[#0d1218]">
        <Image
          src="/seo/audit-findings.webp"
          alt="Detailed SEO findings across technical, on-page and content areas"
          width={1536}
          height={1024}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <figcaption className="border-t border-white/10 px-5 py-3 font-mono text-[11px] text-muted">
          Detailed findings with recommended actions
        </figcaption>
      </figure>
    </div>
  );
}

export default function Services() {
  const [automation, video, seo] = services;
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-deep scroll-mt-16">
      <div className="container-editorial py-20 md:py-32">
        <Reveal>
          <p className="eyebrow">Services</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2
              id="services-heading"
              className="max-w-xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-6xl"
            >
              What I build
            </h2>
            <p className="max-w-sm text-[15px] leading-relaxed text-secondary">
              Three connected capabilities, one goal: less busywork, clearer
              communication, steadier growth.
            </p>
          </div>
        </Reveal>

        {/* 01 — large featured editorial block */}
        <Reveal>
          <article className="mt-14 border-t border-white/10 pt-10 md:pt-12">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <p className="font-display text-lg text-muted">{automation.index}</p>
              <h3 className="font-display text-5xl uppercase leading-[0.9] tracking-tight text-primary md:text-7xl">
                {automation.title}
              </h3>
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-[15px] font-semibold text-accent">{automation.outcome}</p>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-secondary">
                  {automation.description}
                </p>
                <ServiceCta label={automation.cta.label} href={automation.cta.href} />
              </div>
              <CapabilityList items={automation.capabilities} label="AI Automation capabilities" />
            </div>
            {/* Real automation proof — video, screenshots, documents */}
            <div className="mt-10">
              <AutomationShowcase />
            </div>
          </article>
        </Reveal>

        {/* 02 — media-oriented split */}
        <Reveal>
          <article className="grid items-center gap-8 border-t border-white/10 pt-10 md:pt-14 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="font-mono text-xs text-muted">{video.index} — AI Video</p>
              <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight text-primary md:text-4xl">
                {video.title}
              </h3>
              <p className="mt-2 text-[15px] font-semibold text-accent">{video.outcome}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary">
                {video.description}
              </p>
              <div className="mt-6">
                <CapabilityList items={video.capabilities} label="AI Video capabilities" />
              </div>
              <ServiceCta label={video.cta.label} href={video.cta.href} />
            </div>
            <VideoVisual />
          </article>
        </Reveal>

        {/* 03 — search-oriented split, reversed */}
        <Reveal>
          <article className="grid items-center gap-8 border-t border-white/10 pt-10 md:pt-14 lg:grid-cols-2 lg:gap-14">
            <SeoVisual />
            <div>
              <p className="font-mono text-xs text-muted">{seo.index} — SEO</p>
              <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight text-primary md:text-4xl">
                {seo.title}
              </h3>
              <p className="mt-2 text-[15px] font-semibold text-accent">{seo.outcome}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary">
                {seo.description}
              </p>
              <div className="mt-6">
                <CapabilityList items={seo.capabilities} label="SEO capabilities" />
              </div>
              <ServiceCta label={seo.cta.label} href={seo.cta.href} />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
