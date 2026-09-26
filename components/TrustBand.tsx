import { positioning } from "@/data/site";
import Reveal from "./Reveal";

export default function TrustBand() {
  return (
    <section aria-label="What Sam Logistics does" className="bg-deep">
      <div className="container-editorial py-12 md:py-16">
        <Reveal>
          {/* Compact positioning band — capability statements, no invented numbers. */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
            {positioning.map((p) => (
              <div key={p.title} className="border-t border-white/15 pt-5">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {p.title}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-secondary">{p.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
