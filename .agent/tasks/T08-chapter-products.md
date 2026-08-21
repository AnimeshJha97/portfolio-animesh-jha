# T08 — Chapter 03: Products index and detail

**Status:** BLOCKED · **Depends on:** T03, T04 · **Phase:** C
**Routes:** `/products`, `/products/[slug]` · **Content:** `src/content/products.ts`

The largest chapter task — two routes, and the only one with dynamic params.

## Part A — `/products`

`SectionHead` for `products` (note: `// for people who want to use what I build`).

Lede at `max-width: 600px`, then five cards in
`repeat(auto-fit, minmax(300px, 1fr))`, gap `16px`.

**Card** — `--surface` on `--border`, padding `26px`, flex column, gap `14px`,
with a `2px` top border in the product's own accent (red for AI, green for
open-core). Contents:

- Top row: icon glyph at `20px` in the accent; type pill (`AI PRODUCT` /
  `OPEN-CORE`) at `10px/.14em`, bordered in the accent.
- Name at `19px/700/.04em`; pitch at `13px` in `--text-muted`.
- Footer row pushed to the bottom (`margin-top: auto`), separated by a `1px`
  `--border-faint` rule: status dot plus label in the status color on the left,
  `<cta> →` in `--text` on the right.

Hover: border to the accent, `box-shadow: 0 0 30px <accent glow>`.

The whole card is the link to `/products/<slug>`. Wrap it in one `next/link`
rather than nesting interactive elements — the old build used an `onClick` on a
div, which is neither keyboard-reachable nor middle-clickable.

## Part B — `/products/[slug]`

```ts
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
```

Call `notFound()` for an unknown slug. Export `generateMetadata` per product —
title, description from `pitch`, and OG tags (T13 refines these).

**Layout:**

- `← back to /products` link, `13px/.1em` in `--text-muted`.
- Tag row: `<product id="<slug>">` in the product accent, type pill at right.
- Title row: icon at `28px`, `<h1>` at `clamp(30px, 5vw, 46px)/700`, status
  pill bordered `--border-mid`.
- Lede at `17px`, `max-width: 620px`, in `--text-body`.
- Then a `max-width: 680px` column, gap `36px`, of `<why>` / `<who>` / `<how>`
  blocks. Each opens with its tag at `13px/.08em` in the product accent. `how`
  is a list, each row prefixed by a `›` in the accent.
- CTA box: `--surface` on `--border-mid`, padding `28px`, space-between, wrap.
  Left is `tryHead` (`15px/700`) over `trySub` (`13px`, `--text-muted`); right
  is a filled button in the **product's** accent with `--bg` text reading
  `<ctaBig> →`.

**Every accent on this page is the product's own**, never the global red — a
detail the design is explicit about and easy to get wrong.

The CTA uses the real `ctaHref` from content (departure #2). External links get
`target="_blank"` and `rel="noreferrer"`; the `mailto:` for FrontMate must not.
Branch on the protocol, not on the product.

Close both routes with `SectionClose`; the index also gets `ChapterNav`.

## Acceptance criteria

- [ ] Five cards render; each links to its detail route
- [ ] Cards are keyboard-focusable and open on `Enter`
- [ ] `next build` prerenders five `/products/[slug]` pages
- [ ] Unknown slug returns the 404 page, not a crash
- [ ] Detail pages use per-product accents throughout
- [ ] External CTAs open in a new tab; the mailto CTA does not
- [ ] Each detail page has its own `<title>` and description
- [ ] `npx tsc --noEmit` clean
