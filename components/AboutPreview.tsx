import Image from "next/image";
import { workingPrinciples } from "@/data/content";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-y border-white/[0.07] bg-deep scroll-mt-16">
      <div className="container-editorial py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2
            id="about-heading"
            className="mt-4 max-w-3xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-5xl"
          >
            Practical help with automation, content & search
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Portrait — the photo is landscape (1000×562), so the frame
              matches it instead of cropping it into a tall well. */}
          <Reveal className="lg:col-span-5">
            <figure className="lg:sticky lg:top-24">
              <div className="media-frame grain relative aspect-video w-full overflow-hidden bg-[#0d1218]">
                <Image
                  src="/images/profile/profile-main.jpg"
                  alt="Portrait — Workroom Digital"
                  width={1000}
                  height={562}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
                  {site.availability}
                </span>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[11px] font-medium uppercase tracking-[0.14em] text-muted hover:text-secondary"
                >
                  WhatsApp ↗
                </a>
              </div>
            </figure>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
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
      </div>
    </section>
  );
}
