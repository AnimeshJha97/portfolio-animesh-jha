# T07 — Chapter 02: About

**Status:** BLOCKED · **Depends on:** T03, T04 · **Phase:** C
**Route:** `/about` · **Content:** `src/content/about.ts`

## Goal

The human chapter — origin, the design thread, and what the work optimizes for.

## Build

`SectionHead` for `about` (note: `// the human, not the resume`).

**Two-column band**, `repeat(auto-fit, minmax(300px, 1fr))`, gap `44px`,
`align-items: start`:

*Left — prose*, `max-width: 620px`:
- `<h2>` at `clamp(26px, 4vw, 36px)`, weight 700, leading `1.25`:
  "I think in systems and products — and I build full specs before I write code."
- The three paragraphs from `about.ts` in `--text-body`, `18px` apart, last one
  flush. These are real biography (99designs, Canva, Veritas Prime Labs) — do
  not substitute the design file's placeholder text.

*Right — portrait*, `max-width: 360px`, centered in its track:
- `3/4` aspect box, `1px solid --border`, `radius: 4`, `overflow: hidden`, on a
  `radial-gradient(ellipse 80% 60% at 50% 40%, #17090b 0%, #0d0d10 70%)` wash.
- `naruto-body.png` through `next/image` with `fill`,
  `object-fit: contain`, `object-position: bottom`,
  `sizes="(max-width: 768px) 85vw, 360px"`. This replaces the design's
  `<x-import image-slot>` placeholder (departure #4).
- Caption below: `// fig.01 — the founder, illustrated`, `11px/.12em` in
  `--text-dim`.

Give the image real `alt` text describing the portrait — it carries meaning
here, it is not decoration.

**Beliefs** — 3 cards, `repeat(auto-fit, minmax(220px, 1fr))`, gap `14px`,
`--surface` on `--border`, padding `20px`. Tag (`<taste>`, `<maintainability>`,
`<clarity>`) at `12px/.14em` in accent; body at `13px` in `--text-body`.

Close with `SectionClose` and `ChapterNav`.

## Acceptance criteria

- [ ] Prose and beliefs read from `src/content/about.ts`
- [ ] Portrait renders through `next/image`, not a raw `<img>` or a placeholder
- [ ] Image has descriptive `alt` text
- [ ] Columns stack cleanly below the `300px` track minimum
- [ ] Paragraphs are the real biography, not design-file placeholders
- [ ] `/about` prerenders static
- [ ] `npx tsc --noEmit` clean
