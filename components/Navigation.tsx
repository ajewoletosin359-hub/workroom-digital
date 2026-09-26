"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-deep/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-editorial flex h-[68px] items-center justify-between"
        >
          <Link
            href="#top"
            className="flex items-center gap-3"
            aria-label="Back to top"
            onClick={() => setOpen(false)}
          >
            {/* Real logo: public/images/brand/logo.png */}
            <Image
              src="/images/brand/logo.png"
              alt="Workroom Digital"
              width={1024}
              height={1024}
              className="h-9 w-[128px] rounded-[6px] border border-white/10 object-cover object-center"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="link-underline text-[13.5px] font-medium tracking-wide text-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-arrow inline-flex items-center gap-1.5 rounded-btn bg-accent px-5 py-2.5 text-[13.5px] font-semibold text-deep transition-colors hover:bg-white"
            >
              Let&rsquo;s talk <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-btn border border-white/15 text-primary md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu — designed panel, not a collapsed afterthought */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-3 top-[76px] rounded-card border border-white/10 bg-surface p-6 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          role={open ? "dialog" : undefined}
          aria-label="Menu"
        >
          <p className="eyebrow">Menu</p>
          <ul className="mt-4 space-y-1">
            {site.nav.map((item, i) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline justify-between border-b border-white/[0.07] py-3.5 font-display text-3xl uppercase tracking-tight text-primary"
                >
                  {item.label}
                  <span className="font-sans text-xs text-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-6 flex items-center justify-center gap-2 rounded-btn bg-accent px-6 py-4 text-sm font-semibold text-deep"
          >
            Let&rsquo;s talk <ArrowUpRight size={16} aria-hidden />
          </Link>
          <p className="mt-4 text-center text-xs text-muted">{site.email}</p>
        </div>
      </div>
    </>
  );
}
