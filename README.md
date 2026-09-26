# Workroom Digital — AI Automation · AI Video · SEO

Single-page dark editorial portfolio for Workroom Digital.
Next.js 14 + TypeScript + Tailwind + Lucide. One public route: `/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production check (run with the dev server stopped)
```

## Customise (all content is centralised)

| What | Where |
|---|---|
| Brand, email, WhatsApp, socials, nav | `data/site.ts` |
| Services (3 pillars) | `data/services.ts` |
| Projects (`concept: true` until real) | `data/projects.ts` |
| Tools, process, principles, testimonials | `data/content.ts` |
| Contact form endpoint | `.env` → `NEXT_PUBLIC_CONTACT_ENDPOINT` |

Contact: WhatsApp +234 903 141 3869, email `ajewoletosin359@gmail.com`,
LinkedIn in `data/site.ts` socials (only verified URLs are listed).

## Media policy

Supplied video/images are compressed on ingest — no need to ask.
Convention: video → 720p H.264 + faststart, images → web-appropriate
sizes. Optimized copies live under `public/`:

- Logo: `public/images/brand/logo.png`
- Portrait: `public/images/profile/profile-main.jpg`
- Videos: `public/videos/projects/*.mp4`
- Automation: `public/automation/` (video, screenshots, PDF guides)
- SEO: `public/seo/*.webp`
- Fonts (self-hosted): `public/fonts/*.woff2`
- OG image: `public/images/social/og-default.png` (1200×630) — SVG placeholder provided

## Honesty rules enforced in code

- No statistics anywhere: positioning band states capabilities, not numbers.
- No testimonials shown until verified ones exist (`components/Testimonials.tsx` retained).
- Concept entries carry `concept: true` and a visible label; finished pieces claim no metrics.
- The contact form never fakes delivery — without a backend it opens the visitor's email client and says so.
