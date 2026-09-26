import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section aria-labelledby="proof-heading" className="bg-background">
      <div className="container-editorial py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Social proof</p>
          <h2
            id="proof-heading"
            className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-primary md:text-5xl"
          >
            What clients say
          </h2>
        </Reveal>
        {testimonials.length === 0 ? (
          <Reveal delay={100}>
            <div className="mt-10 grid gap-8 rounded-card border border-dashed border-white/15 bg-white/[0.015] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
              <div>
                <p className="font-display text-2xl uppercase tracking-tight text-secondary md:text-3xl">
                  [Client testimonial]
                </p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                  Testimonials will appear here once supplied — quote, name, role, and
                  company. Nothing is fabricated. If you&rsquo;ve worked with me and
                  want to be featured, get in touch.
                </p>
              </div>
              <Link
                href="#contact"
                className="btn-arrow inline-flex items-center gap-2 rounded-btn border border-white/15 px-6 py-3.5 text-sm font-semibold text-primary hover:border-white/30"
              >
                Become a client <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
