"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import DocCard from "./DocCard";
import Reveal from "./Reveal";

/* Small square label — metadata, not an action. */
function MediaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute left-4 top-4 rounded-[6px] bg-deep/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
      {children}
    </span>
  );
}

function MediaLabelInline({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[6px] bg-deep px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
      {children}
    </span>
  );
}

function ConceptTag() {
  return (
    <span className="rounded-[6px] border border-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
      Concept project
    </span>
  );
}

function MediaPlaceholder({ project }: { project: Project }) {
  // Real screenshot.
  if (project.mediaKind === "image" && project.imageSrc) {
    return (
      <div className="media-frame relative w-full bg-[#0d1218]">
        <Image
          src={project.imageSrc.src}
          alt={project.imageSrc.alt}
          width={project.imageSrc.width}
          height={project.imageSrc.height}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <MediaLabel>{project.categoryLabel}</MediaLabel>
      </div>
    );
  }
  // Real document.
  if (project.mediaKind === "doc" && project.docSrc) {
    return (
      <div className="relative">
        <DocCard src={project.docSrc.src} title={project.docSrc.title} meta={project.docSrc.meta} />
        <div className="mt-3 flex items-center gap-3">
          <MediaLabelInline>{project.categoryLabel}</MediaLabelInline>
          <p className="font-mono text-[11px] text-muted">{project.mediaLabel}</p>
        </div>
      </div>
    );
  }
  if (project.mediaKind === "video") {
    // Real footage — a proper player with metadata preload so the first
    // frame shows without downloading the whole file upfront.
    if (project.videoSrc) {
      return (
        <div className="media-frame relative aspect-video w-full bg-[#0d1218]">
          <video
            className="absolute inset-0 h-full w-full"
            src={project.videoSrc}
            controls
            preload="metadata"
            playsInline
            aria-label={`${project.title} — ${project.mediaLabel}`}
          />
          <MediaLabel>{project.categoryLabel}</MediaLabel>
        </div>
      );
    }
    return (
      <div className="media-frame grain relative aspect-video w-full bg-[#0d1218]">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 0%, #2b3138 0%, #181d23 55%, #0d1218 100%)",
          }}
        />
        <div className="bg-fine-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <span
          className="text-outline absolute -right-2 top-0 select-none font-display text-[9rem] font-bold leading-none md:text-[11rem]"
          aria-hidden="true"
        >
          {project.index}
        </span>
        <div className="absolute inset-0 grid place-items-center p-8 text-center">
          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
              16:9 · 9:16 · 1:1
            </p>
            <p className="eyebrow mt-4">{project.mediaLabel}</p>
            <p className="mt-2 font-mono text-[11px] text-muted">
              Footage slot — add a video file to feature it here
            </p>
          </div>
        </div>
        <MediaLabel>{project.categoryLabel}</MediaLabel>
      </div>
    );
  }
  if (project.mediaKind === "seo") {
    // Real audit screenshots — captioned gallery, no invented charts.
    if (project.images && project.images.length > 0) {
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {project.images.map((img) => (
            <figure key={img.src} className="media-frame relative bg-[#0d1218]">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="border-t border-white/10 px-5 py-3.5 font-mono text-[11px] text-muted">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      );
    }
    return (
      <div className="media-frame grain relative aspect-[16/9] w-full bg-[#0d1218]">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: "linear-gradient(115deg, #20262e 0%, #161b21 50%, #0d1218 100%)",
          }}
        />
        <div className="bg-fine-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <span
          className="text-outline absolute -left-2 bottom-0 select-none font-display text-[8rem] font-bold leading-none md:text-[10rem]"
          aria-hidden="true"
        >
          {project.index}
        </span>
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
              {project.categoryLabel}
            </span>
            <span className="font-mono text-[11px] text-muted">GSC / Analytics</span>
          </div>
          {/* Abstract but honest placeholder chart skeleton — no fake numbers */}
          <div className="mt-6 flex h-28 items-end gap-2" aria-hidden="true">
            {[34, 48, 40, 62, 55, 74, 66, 88, 80, 96, 90, 104].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-white/[0.09]"
                style={{ height: `${(h / 104) * 100}%` }}
              />
            ))}
          </div>
          <p className="eyebrow mt-5 text-center">{project.mediaLabel}</p>
        </div>
      </div>
    );
  }
  // No other media kinds remain — every project carries video, image, doc or gallery.
  return null;
}
function ProjectDetails({ project }: { project: Project }) {
  const rows = [
    { h: "Problem", t: project.problem },
    { h: "Approach", t: project.approach },
    { h: "Solution", t: project.solution },
    { h: "Outcome", t: project.outcome },
  ];
  return (
    <div className="mt-8 border-t border-white/10 pt-8">
      <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
        {rows.map((r, i) => (
          <div key={r.h}>
            <p className="font-mono text-xs text-muted">0{i + 1} — {r.h}</p>
            <p className="mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-secondary">{r.t}</p>
          </div>
        ))}
        <div>
          <p className="font-mono text-xs text-muted">05 — Tools</p>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-secondary">
            {project.tools.join("  ·  ")}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted">06 — Role</p>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-secondary">{project.role}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectItem({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) {
  const media = <MediaPlaceholder project={project} />;
  const body = (
    <div>
      <p className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
        {project.index} — {project.categoryLabel} · {project.timeline}
        {project.concept ? <ConceptTag /> : null}
      </p>
      <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight text-primary md:text-4xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary">{project.summary}</p>
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`details-${project.slug}`}
        className="group mt-6 inline-flex items-center gap-2.5 text-sm font-semibold text-primary"
      >
        <span
          aria-hidden="true"
          className={`grid h-8 w-8 place-items-center rounded-full border transition-colors duration-200 ${
            open
              ? "border-accent bg-accent text-deep"
              : "border-white/20 text-primary group-hover:border-white/45"
          }`}
        >
          <Plus size={15} className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`} />
        </span>
        <span className="link-underline">{open ? "Hide details" : "Show details"}</span>
      </button>
    </div>
  );

  return (
    <article className="border-t border-white/10 pt-10 md:pt-14">
      {project.layout === "full" ? (
        <div className="max-w-2xl">{body}</div>
      ) : (
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {project.layout === "split-left" ? (
            <>
              {media}
              {body}
            </>
          ) : (
            <>
              {body}
              {media}
            </>
          )}
        </div>
      )}
      {project.layout === "full" ? <div className="mt-8">{media}</div> : null}
      {open ? (
        <div id={`details-${project.slug}`}>
          <ProjectDetails project={project} />
        </div>
      ) : null}
    </article>
  );
}

export default function SelectedWork() {
  // First project open by default — demonstrates the interaction once,
  // everything else stays collapsed.
  const [openSlug, setOpenSlug] = useState<string | null>(projects[0]?.slug ?? null);

  return (
    <section id="work" aria-labelledby="work-heading" className="bg-background scroll-mt-16">
      <div className="container-editorial py-20 md:py-32">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2
            id="work-heading"
            className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-6xl"
          >
            Selected work
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-secondary">
            Real systems and digital experiences: finished video pieces play
            above in the AI Video service, with automation and SEO work
            detailed below — every entry expandable.
          </p>
        </Reveal>
        <div className="mt-12 space-y-14 md:space-y-20">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <ProjectItem
                project={p}
                open={openSlug === p.slug}
                onToggle={() => setOpenSlug(openSlug === p.slug ? null : p.slug)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
