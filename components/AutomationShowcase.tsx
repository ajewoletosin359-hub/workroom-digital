"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, ImageIcon, Play } from "lucide-react";
import DocCard from "./DocCard";

type Piece =
  | { kind: "video"; src: string; title: string; meta: string }
  | { kind: "image"; src: string; width: number; height: number; alt: string; title: string; meta: string }
  | { kind: "doc"; src: string; title: string; meta: string; label: string };

const pieces: Piece[] = [
  {
    kind: "video",
    src: "/automation/tiktok-reels.mp4",
    title: "TikTok-to-Instagram Content Automation",
    meta: "Video walkthrough",
  },
  {
    kind: "image",
    src: "/automation/lead-outreach.png",
    width: 1366,
    height: 629,
    alt: "Screenshot of the AI lead outreach and follow-up workflow",
    title: "AI-Powered Lead Outreach & Follow-Up",
    meta: "Workflow screenshot",
  },
  {
    kind: "image",
    src: "/automation/deal-analyzer.png",
    width: 1366,
    height: 683,
    alt: "Screenshot of the AI real estate deal analyzer workflow",
    title: "AI Real Estate Deal Analyzer",
    meta: "Workflow screenshot",
  },
  {
    kind: "doc",
    src: "/automation/deal-screening.pdf",
    title: "AI Investment Deal Screening",
    meta: "PDF documentation",
    label: "Deal screening — workflow documentation",
  },
  {
    kind: "doc",
    src: "/automation/reddit-monitoring.pdf",
    title: "AI Reddit Brand Monitoring",
    meta: "PDF documentation",
    label: "Brand monitoring — workflow documentation",
  },
];

function KindIcon({ kind, selected }: { kind: Piece["kind"]; selected: boolean }) {
  const cls = selected ? "text-deep" : "text-secondary group-hover:text-primary";
  if (kind === "video") return <Play size={13} className={`ml-px ${cls}`} aria-hidden />;
  if (kind === "image") return <ImageIcon size={13} className={cls} aria-hidden />;
  return <FileText size={13} className={cls} aria-hidden />;
}

/* Real automation proof inside the service section — video, screenshots
   and documents behind one selector, mirroring the video showcase. */
export default function AutomationShowcase() {
  const [active, setActive] = useState(0);
  const current = pieces[active];

  return (
    <div>
      <div className="media-frame relative w-full bg-[#0d1218]">
        {current.kind === "video" ? (
          <div className="relative aspect-video w-full">
            <video
              key={current.src}
              className="absolute inset-0 h-full w-full"
              src={current.src}
              controls
              preload="metadata"
              playsInline
              aria-label={`${current.title} — automation walkthrough`}
            />
          </div>
        ) : current.kind === "image" ? (
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        ) : (
          <div className="p-4 md:p-5">
            <DocCard src={current.src} title={current.label} meta="PDF · opens in browser" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-[6px] bg-deep/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
          AI Automation
        </span>
      </div>
      <div className="mt-4 border-t border-white/10" role="group" aria-label="Choose an automation">
        {pieces.map((p, i) => {
          const selected = i === active;
          return (
            <button
              key={p.src}
              onClick={() => setActive(i)}
              aria-pressed={selected}
              className="group flex w-full items-center gap-4 border-b border-white/[0.07] py-3.5 text-left"
            >
              <span
                aria-hidden="true"
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${
                  selected
                    ? "border-accent bg-accent text-deep"
                    : "border-white/20 text-secondary group-hover:border-white/45 group-hover:text-primary"
                }`}
              >
                <KindIcon kind={p.kind} selected={selected} />
              </span>
              <span className="min-w-0">
                <span
                  className={`block truncate text-sm font-semibold transition-colors ${
                    selected ? "text-primary" : "text-secondary group-hover:text-primary"
                  }`}
                >
                  {p.title}
                </span>
                <span className="mt-0.5 block font-mono text-[11px] text-muted">{p.meta}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
