"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const pieces = [
  {
    src: "/videos/projects/fomo-moved-faster.mp4",
    title: "Maybe They Just Moved Faster",
    meta: "Social piece · 0:30",
  },
  {
    src: "/videos/projects/flavor-lab-protein.mp4",
    title: "Flavor Lab: Perfectly Cooked Protein",
    meta: "Culinary science · 0:56",
  },
  {
    src: "/videos/projects/crossing-the-line.mp4",
    title: "Crossing the Line",
    meta: "Short drama · 1:00",
  },
];

/* Real footage inside the service section — a featured player with a
   selector list, replacing the old abstract format frame. */
export default function VideoShowcase() {
  const [active, setActive] = useState(0);
  const current = pieces[active];

  return (
    <div>
      <div className="media-frame relative aspect-video w-full bg-[#0d1218]">
        <video
          key={current.src}
          className="absolute inset-0 h-full w-full"
          src={current.src}
          controls
          preload="metadata"
          playsInline
          aria-label={`${current.title} — AI video piece`}
        />
        <span className="absolute left-4 top-4 rounded-[6px] bg-deep/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
          AI Video
        </span>
      </div>
      <div className="mt-4 border-t border-white/10" role="group" aria-label="Choose a video piece">
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
                <Play size={13} className="ml-px" />
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
