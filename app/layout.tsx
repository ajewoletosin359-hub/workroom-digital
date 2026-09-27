import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

// Self-hosted fonts — no runtime fetch to Google Fonts (which hangs on
// flaky networks and blocks stylesheet compilation).
const display = localFont({
  src: [
    { path: "../public/fonts/ArchivoNarrow-500.woff2", weight: "500" },
    { path: "../public/fonts/ArchivoNarrow-600.woff2", weight: "600" },
    { path: "../public/fonts/ArchivoNarrow-700.woff2", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "../public/fonts/Manrope-400.woff2", weight: "400" },
    { path: "../public/fonts/Manrope-500.woff2", weight: "500" },
    { path: "../public/fonts/Manrope-600.woff2", weight: "600" },
    { path: "../public/fonts/Manrope-700.woff2", weight: "700" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://workroom-digital.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Workroom Digital — AI Automation, AI Video & SEO",
    template: "%s — Workroom Digital",
  },
  description:
    "Workroom Digital helps small businesses automate repetitive work, create AI-powered video content and improve their online visibility through practical SEO.",
  keywords: ["AI automation", "AI video", "SEO optimization", "small business automation", "lead workflows"],
  authors: [{ name: "Workroom Digital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Workroom Digital",
    title: "Workroom Digital — AI Automation, AI Video & SEO",
    description:
      "Practical automation, video and SEO systems for small businesses.",
    images: [{ url: "/images/social/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workroom Digital — AI Automation, AI Video & SEO",
    description: "Automate. Create. Grow. Practical digital systems for small businesses.",
    images: ["/images/social/og-default.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Workroom Digital",
    description:
      "AI automation, AI video and SEO solutions for small businesses.",
    email: site.email,
    sameAs: site.socials.map((s) => s.href),
    knowsAbout: ["AI Automation", "AI Video", "SEO Optimization"],
  };
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* No-JS fallback: reveal-on-scroll content must never stay hidden. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;}`}</style>
        </noscript>
      </head>
      <body id="top" className="bg-deep font-sans text-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-deep"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
