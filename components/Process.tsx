import Reveal from "./Reveal";
import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-deep">
      <div className="container-editorial py-20 md:py-32">
        <Reveal>
          <p className="eyebrow">How I work</p>
          <h2
            id="process-heading"
            className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-6xl"
          >
            Simple process, senior judgment
          </h2>
        </Reveal>

        {/* Open horizontal rule-columns on desktop, stacked timeline on mobile.
            No box, no per-cell entrance choreography — the content is the design. */}
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processSteps.map((s) => (
            <li key={s.index} className="border-t border-white/15 pt-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted">{s.index}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-primary">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
