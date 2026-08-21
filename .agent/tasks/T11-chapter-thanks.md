# T11 — Chapter 06: Thanks

**Status:** BLOCKED · **Depends on:** T03, T04 · **Phase:** C
**Route:** `/thanks` · **Content:** `src/content/thanks.ts`

## Goal

The closing chapter — send the visitor back into whichever track fits them,
and make contact obvious.

## Build

`SectionHead` for `thanks` (note: `// choose how this continues`).

**Headline** — `<h2>` at `clamp(26px, 4vw, 38px)/700`, leading `1.3`,
`max-width: 640px`, `40px` below:

```
The portfolio ends here.
The conversation doesn't.     <- this line in accent
```

**Three route cards** — `repeat(auto-fit, minmax(240px, 1fr))`, gap `16px`,
`--surface` on `--border`, padding `28px`, left-aligned:

| Eyebrow          | Title              | Description                                       |
|------------------|--------------------|---------------------------------------------------|
| `01 → /products` | Build Products     | Try what Arkion Labs is shipping — or get in early. |
| `02 → /work`     | Lead Teams         | Hiring full-time? The case studies are the interview. |
| `03 → /services` | Refine Experiences | Bring a brief — scoped builds or ongoing advisory. |

Eyebrow `12px/.14em` in accent, title `17px/700`, description `12px` in
`--text-muted`. Hover: border to accent plus
`box-shadow: 0 0 26px rgba(229,72,77,.15)`.

These are `next/link`s to real routes, not state switches (D2).

**Contact chips** — flex-wrap, gap `14px`, each bordered `--border-mid`,
padding `12px 18px`, `13px`, with a glyph in accent:

- `@` email (mailto)
- `in` LinkedIn (new tab, `rel="noreferrer"`)
- `</>` GitHub (new tab, `rel="noreferrer"`)
- `⤓` resume PDF (download)

This replaces the design's masked phone number (departure #3). All four come
from `site.ts`.

**Drop the version poll.** The old build closed this chapter with a V1/V2 vote
posting to `/api/send-mail`. There is no V1 anymore (D1) — the block, its
`localStorage` key, and its fetch all go.

Close with `SectionClose`, passing the `// EOF` extra.

## Acceptance criteria

- [ ] Headline, three cards, and four contact chips render per spec
- [ ] Cards link to real routes and are keyboard-reachable
- [ ] External links carry `rel="noreferrer"`; resume link downloads
- [ ] No version poll, no `localStorage` writes, no vote fetch
- [ ] Closing line renders `// EOF`
- [ ] `/thanks` prerenders static
- [ ] `npx tsc --noEmit` clean
