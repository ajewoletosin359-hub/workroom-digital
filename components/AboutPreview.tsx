import { workingPrinciples } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-y border-white/[0.07] bg-deep scroll-mt-16">
      <div className="container-editorial grid gap-10 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2
            id="about-heading"
            className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-5xl"
          >
            Practical help with automation, content & search
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-5 text-[16px] leading-relaxed text-secondary">
            <p>
              I work at the intersection of AI, content and search. I help small
              businesses identify repetitive processes, improve how they create
              content and strengthen the digital foundations that help customers
              find them.
            </p>
            <p>
              My approach is practical: understand the problem first, choose the
              right tools, build the system, then refine it.
            </p>
            <div className="pt-2">
              <h3 className="eyebrow">Background</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-secondary">
                I started by learning how digital tools can solve practical
                business problems, with a focus on AI automation, AI-powered
                video creation, and SEO. I&rsquo;ve continued developing my skills
                through hands-on projects, online learning, and building real
                workflows with automation platforms, AI tools, content systems,
                and SEO platforms. My approach is practical: learn the
                technology, build with it, test what works, and turn it into
                useful solutions for small businesses.
              </p>
            </div>
            <div className="pt-2">
              <h3 className="eyebrow">How I think</h3>
              <dl className="mt-4 space-y-0 border-t border-white/10">
                {workingPrinciples.map((p) => (
                  <div
                    key={p.title}
                    className="grid gap-1 border-b border-white/[0.07] py-4 sm:grid-cols-[130px_1fr] sm:gap-4"
                  >
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {p.title}
                    </dt>
                    <dd className="text-sm leading-relaxed text-secondary">{p.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
