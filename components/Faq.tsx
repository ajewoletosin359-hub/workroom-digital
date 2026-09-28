import { faqs } from "@/data/content";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-white/[0.07] bg-deep scroll-mt-16">
      <div className="container-editorial grid gap-10 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">Questions</p>
            <h2
              id="faq-heading"
              className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-5xl"
            >
              Asked, answered.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-secondary">
              Straight answers, no sales talk. Anything else — just ask directly.
            </p>
          </div>
        </Reveal>
        <div>
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <div className="border-t border-white/10 py-7 last:border-b">
                <h3 className="font-display text-2xl uppercase tracking-tight text-primary">
                  {f.q}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-secondary">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
