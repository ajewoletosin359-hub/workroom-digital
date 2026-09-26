import Reveal from "./Reveal";
import { toolGroups } from "@/data/content";

export default function Tools() {
  return (
    <section aria-labelledby="tools-heading" className="border-y border-white/[0.07] bg-deep">
      <div className="container-editorial grid gap-10 py-20 md:py-28 lg:grid-cols-[0.9fr_1.4fr]">
        <Reveal>
          <p className="eyebrow">Tools & workflows</p>
          <h2
            id="tools-heading"
            className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-5xl"
          >
            An editable working list
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-secondary">
            The tools I work with day to day — a practical list, not a wall of
            logos or certification badges.
          </p>
        </Reveal>
        <div>
          {toolGroups.map((g) => (
            <Reveal key={g.label}>
              <div className="grid gap-3 border-t border-white/10 py-6 sm:grid-cols-[160px_1fr] sm:gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {g.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{g.note}</p>
                </div>
                <p className="text-[15px] leading-relaxed text-secondary">
                  {g.tools.join("  ·  ")}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-b border-white/10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
