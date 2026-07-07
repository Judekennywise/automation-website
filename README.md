# Jude · School Systems — Website

One-page credibility site for a founder-led school-systems business in Lagos,
built with Next.js (App Router, TypeScript). The strategy behind it lives in
[school-systems-strategy-v2.md](school-systems-strategy-v2.md) — the site is a
credibility asset, not a lead engine.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
```

## Before going live — placeholders to replace

All contact details live in one file: [`lib/site.ts`](lib/site.ts).

1. **WhatsApp number** — `whatsappNumber` (country code, no `+`). Every CTA on
   the site links to it.
2. **Email, LinkedIn, domain** — `email`, `linkedin`, `url` (the domain also
   drives sitemap/robots/Open Graph URLs).
3. **Your photo** — replace the placeholder block in
   [`components/About.tsx`](components/About.tsx) with a real photo via
   `next/image`.
4. **Demo video** — replace the placeholder slot in
   [`components/System.tsx`](components/System.tsx) with the recorded fee-system
   walkthrough (Loom/YouTube embed or `<video>`).

## Structure

- `app/` — layout (fonts, SEO metadata, JSON-LD), page, globals.css, sitemap, robots, favicon
- `components/` — one component per page section
- `lib/site.ts` — single source of truth for name, contacts, and links
- `legacy/index.html` — the original static prototype this site replaced
