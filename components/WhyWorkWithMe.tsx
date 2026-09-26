import Reveal from "./Reveal";

const points = [
  {
    index: "01",
    title: "Not just tools",
    text: "Technology is only useful when it solves a real problem. The starting point is always the business, never the software.",
  },
  {
    index: "02",
    title: "Practical systems",
    text: "Workflows that are understandable and maintainable — documented, visible, and handed over so nothing depends on me.",
  },
  {
    index: "03",
    title: "One connected approach",
    text: "Automation, content and SEO can work together instead of living in separate tools owned by separate people.",
  },
  {
    index: "04",
    title: "Small-business focus",
    text: "Solutions sized for the business — useful now, improvable later, never more system than the problem needs.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section aria-labelledby="why-heading" className="border-t border-white/[0.07] bg-background">
      <div className="container-editorial grid gap-10 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">Why work with me</p>
            <h2
              id="why-heading"
              className="mt-4 font-display text-4xl uppercase leading-[0.92] tracking-tight text-primary md:text-6xl"
            >
              Built for real business problems.
            </h2>
          </div>
        </Reveal>
        <div>
          {points.map((p, i) => (
            <Reveal key={p.index} delay={Math.min(i * 40, 120)}>
              <div
                className={`flex gap-6 border-t border-white/10 py-7 md:gap-10 ${
                  i === points.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-display text-lg text-muted">{p.index}</span>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-primary md:text-[1.7rem]">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-secondary">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
