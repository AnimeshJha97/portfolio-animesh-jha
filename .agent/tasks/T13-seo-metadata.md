# T13 — SEO, metadata, sitemap

**Status:** BLOCKED · **Depends on:** T06–T11 · **Phase:** D

## Goal

Make the eight routes discoverable and shareable. This is the payoff for
choosing real routes over the single-page switcher (D2) — spend it.

## Build

### Root metadata

In `src/app/layout.tsx`:

- `metadataBase` from the canonical URL in `site.ts` — without it, relative OG
  image paths resolve wrong in production.
- Title template: `%s · Animesh Jha` with a default of the full name plus role.
- Description: the positioning line — enterprise SaaS professionally, AI
  products independently through Arkion Labs.
- `openGraph` (type `website`, locale, site name) and `twitter`
  (`summary_large_image`).
- Keep the old `title`/`description` pair out — they described the anime site
  ("Designer & Developer | FROM INDIA WITH LOVE").

### Per-route metadata

Each chapter exports its own `metadata`. Titles should read as the chapter, not
the site: `About`, `Products`, `Work`, `Services`, `Thanks`. Descriptions come
from each chapter's note or lede in `src/content/` — do not write new copy in
the route file.

`/products/[slug]` already has `generateMetadata` from T08. Extend it with
OG title, description, and canonical URL per product.

### OG images

Nothing exists today (sprint parking lot). Two options:

- **Static** — one `opengraph-image.png` at `1200×630` in the app root,
  inheriting to every route. Fast, one asset, same card everywhere.
- **Generated** — `opengraph-image.tsx` using `next/og` `ImageResponse` to
  render per-route cards in the site's own palette and mono type. Better
  sharing, more work, and note that `next/og` needs the font file loaded
  explicitly since `next/font` is not available in that runtime.

Recommend generated for `/products/[slug]` (each product deserves its own card)
and static for the rest.

### `sitemap.ts` and `robots.ts`

Generate the sitemap from `nav.ts` plus `products.ts` so new content cannot
drift out of it. Eight URLs. `robots.ts` allows everything and points at the
sitemap.

### Structured data

A JSON-LD `Person` block in the root layout: name, job title, URL, `sameAs`
for LinkedIn and GitHub, and `worksFor` for Arkion Labs. Inject via
`<script type="application/ld+json">` with `dangerouslySetInnerHTML` —
`JSON.stringify` the object rather than hand-writing the JSON string.

### Housekeeping

- `lang="en"` on `<html>`.
- A real `<title>` and description on the 404 page.
- Canonical URLs per route.

## Acceptance criteria

- [ ] Every route has a unique, descriptive `<title>` and description
- [ ] `metadataBase` set; OG image URLs absolute in built HTML
- [ ] `/sitemap.xml` lists all eight routes
- [ ] `/robots.txt` resolves and references the sitemap
- [ ] JSON-LD validates against a structured-data checker
- [ ] No anime-site copy left in any metadata
- [ ] `curl -s <route> | grep "<title>"` returns the right title per route
- [ ] `npx next build` clean

## Out of scope

Analytics. Raise it separately if wanted.
