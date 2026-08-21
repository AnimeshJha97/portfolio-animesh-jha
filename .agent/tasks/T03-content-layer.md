# T03 — Typed content layer

**Status:** BLOCKED · **Depends on:** T01 · **Phase:** A

## Goal

Build `src/content/` as the single source of every word on the site (D3). No
database, no CMS, no runtime fetch — typed modules imported at build time.

## Source of truth

Port from `.agent/reference/studioData.archived.ts`. **Do not** re-derive copy
from the design file — it has `[Placeholder]` where the archive has real,
researched content. Read `reference/content-inventory.md` first; it maps every
archived export to its new home and lists the copy still trapped in the old
JSX that must be lifted out.

## Files to create

### `types.ts`

Shared types for everything below. Start from the archived `StudioProduct` and
widen as needed. Types worth having: `Product`, `Stat`, `Belief`, `CaseStudy`,
`LeadCase`, `Job`, `Service`, `EngagementModel`, `Chapter`, `ContactLink`.

Model product accents as a union (`"ai" | "oss"`) resolved to hex through a
lookup, rather than storing raw hex per product — it keeps the palette in T02's
tokens instead of scattering `#e5484d` through content. Same for status:
`"live" | "waitlist" | "wip"` resolved to label and dot color.

### `site.ts`

Identity and links: email, LinkedIn, GitHub, resume path, wordmark
(`AJ // ARKION LABS`), footer line, and the site's canonical URL (T13 needs it
for metadata and sitemap).

### `nav.ts`

The chapter list — the single source of truth for order, labels, routes, and
the `NN / 06` counters. Everything derives from it: drawer nav, footer chapter
label, prev/next stepping, and the sitemap.

```ts
export const chapters = [
  { n: "01", slug: "studio", label: "STUDIO", href: "/", tag: "studio",
    note: "// for recruiters · clients · product users — pick your track below" },
  // about, products, work, services, thanks
] as const;
```

Include each chapter's `tag` and `note` here so `SectionHead` (T04) reads them
from content rather than taking them as props at every call site.

### `home.ts`

Hero eyebrow, headline parts, lede, and the four stats.

### `about.ts`

The h2, the three paragraphs, the three beliefs, and the portrait caption.

### `products.ts`

All five products. **Add a `slug` field** — `/products/[slug]` needs it and the
archive has no such field (its `id` values work as slugs: `p3kit`, `ledeqor`,
`frontmate`, `query-guardian`, `statement`). Keep the real `ctaHref` values;
do not revert to the design's `href="#"`.

### `work.ts`

The lead case study (title, status, 3 metrics, 6 tagged sections), the three
case studies, and the four jobs with their skill tags.

### `services.ts`

The four offerings, plus the two engagement models that are currently hardcoded
in the old JSX — see `content-inventory.md` for their exact copy.

### `thanks.ts`

The h2 pair, the three route cards, and the contact link list.

## Conventions

- Every module exports typed constants, `as const` where the shape should stay
  narrow.
- No JSX, no React imports, no Tailwind class names in `src/content/`.
- Em dashes and typographic quotes go in the content as real characters — not
  HTML entities. JSX renders them fine; the entities in the old code were an
  artifact of hand-porting HTML.

## Acceptance criteria

- [ ] All nine modules exist and are fully typed; no `any`
- [ ] Every real string from the archive is present — spot-check the four job
      blurbs, five product `how` arrays, and the six lead-case sections
- [ ] No `[Placeholder]` text anywhere in `src/content/`
- [ ] Products carry a unique `slug`; accents and statuses are unions, not hex
- [ ] `npx tsc --noEmit` passes
- [ ] Nothing in `src/content/` imports from `react`, `next`, or `tailwind`

## Out of scope

Rendering any of it. This task ships data only — T06 through T11 consume it.
