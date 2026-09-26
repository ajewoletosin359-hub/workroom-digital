import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-deep" aria-label="Footer">
      <div className="container-editorial grid gap-12 py-14 md:py-20 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <Image
              src="/images/brand/logo.png"
              alt="Workroom Digital"
              width={1024}
              height={1024}
              className="h-8 w-[112px] rounded-[6px] border border-white/10 object-cover object-center"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary">
            AI automation, AI video and SEO solutions for small businesses.
          </p>
          <p className="mt-4 text-xs text-muted">{site.availability}</p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="#work" className="text-secondary hover:text-primary">Work</Link></li>
            <li><Link href="#services" className="text-secondary hover:text-primary">Services</Link></li>
            <li><Link href="#about" className="text-secondary hover:text-primary">About</Link></li>
            <li><Link href="#contact" className="text-secondary hover:text-primary">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <p className="eyebrow">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#services" className="text-secondary hover:text-primary">AI Automation</Link></li>
            <li><Link href="/#services" className="text-secondary hover:text-primary">AI Video</Link></li>
            <li><Link href="/#services" className="text-secondary hover:text-primary">SEO Optimization</Link></li>
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary"
              >
                WhatsApp — {site.whatsappLabel} ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-secondary hover:text-primary">
                {site.email}
              </a>
            </li>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="container-editorial flex items-center justify-between py-6 text-xs text-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-secondary">
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
