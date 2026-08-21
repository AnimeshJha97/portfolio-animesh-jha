# T04 — App shell: header, nav, footer

**Status:** BLOCKED · **Depends on:** T02, T03 · **Phase:** B

## Goal

Build the chrome every chapter shares, in the root layout, so chapters contain
only their own content. After this task all six routes exist and are navigable,
even if their bodies are empty.

## Root layout

`src/app/layout.tsx` — server component. Applies the JetBrains Mono variable
from T02, renders `<Scanlines />`, `<Header />`, `<main>{children}</main>`,
`<Footer />`, and mounts the nav drawer. Main column: `max-width: 1080px`,
padding `110px 24px 80px`.

Keep the layout a server component. Only the pieces that need interactivity
(drawer open state, pathname-derived active chapter) become `"use client"`.

## Routes

Create all six with placeholder bodies so navigation is testable:
`/`, `/about`, `/products`, `/work`, `/services`, `/thanks`. The
`/products/[slug]` segment is T08's job, not this one.

## Components

### `components/chrome/Header.tsx`

Fixed, `z-60`, `rgba(10,10,12,.85)` + `backdrop-filter: blur(8px)`, bottom rule
`--border-faint`, padding `16px 22px`. Three zones: hamburger (24px/16px/24px
bars, middle bar in accent), the wordmark from `site.ts` linking home, and —
per design-spec departure #1 — **no sound toggle**. The old header's V1/V2
switcher also goes (D1).

Worth carrying over from the old implementation: an inline chapter nav at
`lg:` and up, so desktop users reach any chapter in one click and the drawer
is mobile-only. Derive it from `nav.ts`.

### `components/chrome/NavDrawer.tsx` (`"use client"`)

300px / 85vw, `--surface`, right border, `z-80`, entering on `st-fadeUp .25s`.
Scrim at `z-70`, `rgba(5,5,7,.7)` + `blur(3px)`, closes on click. Header row
`NAVIGATE` in accent with a `✕`. Items from `nav.ts`: dim `NN`, label, a `2px`
left border in accent when active. Footer row shows the email from `site.ts`.

Active chapter comes from `usePathname()`, **not** component state (D2).
`/products/[slug]` must mark `/products` active — match on path prefix.

Close on `Escape`, and close on route change so the drawer never survives a
navigation.

### `components/chrome/Scanlines.tsx`

`z-90`, `pointer-events: none`, fixed inset-0, the repeating gradient from the
design spec. Static — no props (departure #5).

### `components/chrome/Footer.tsx`

Rule on top, `max-width: 1080px`, `11px` at `.12em` in `--text-faint`. Left:
the footer line from `site.ts`. Right: the chapter label (`01 — Studio`),
derived from the current pathname against `nav.ts`.

### `components/chrome/ChapterNav.tsx`

Prev/next stepping at the bottom of every chapter, from the old implementation
— worth keeping. Derives from `nav.ts` order; on the last chapter, offers a
loop back to `/`. Include the desktop hint line about arrow keys **only if**
T12 ships the keyboard handler; otherwise omit the hint.

### `components/ui/SectionHead.tsx` and `SectionClose.tsx`

The header pattern every chapter repeats: accent `<tag>`, `NN / 06` counter,
`// note` line, `52px` gap. Takes a chapter slug and reads tag/note/counter
from `nav.ts` (T03 put them there) — call sites should not repeat that copy.

`SectionClose` renders the faint closing tag `60px` below, with an optional
`extra` slot for chapter 06's `// EOF`.

## Acceptance criteria

- [ ] All six routes render with shared chrome and are reachable from the drawer
      and the desktop nav
- [ ] Active chapter is correct on every route, including `/products/anything`
- [ ] Drawer closes on scrim click, `✕`, `Escape`, and route change
- [ ] Footer chapter label matches the route
- [ ] Header does not render a sound toggle or a version switcher
- [ ] Layout is a server component; only interactive leaves are `"use client"`
- [ ] `npx next build` shows 6 statically prerendered routes

## Out of scope

Chapter content, the splash (T05), scroll animations (T12).
