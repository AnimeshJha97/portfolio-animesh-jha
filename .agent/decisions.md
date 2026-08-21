# Locked decisions

Settled 2026-08-22, before sprint 01. Changing any of these invalidates task
specs downstream — reopen deliberately, don't drift.

## D1 — The Studio design becomes the entire site

The anime "V1" experience is retired, not archived. `/` serves chapter 01 of
the Studio design.

**Retired:** `Particle`, `Sasuke`, `SkillBox`, `CodeSection`, `StartAnimation`,
`BackgroundAudio`, `ThemePaletteSync`, `Loading`, `PageShell`, `Title`,
`ContactMe`, `EmailModal`, `Input`, all of `src/app/recoil/`, `themeData.ts`,
`intro.ts`, and the `/Experience`, `/Projects`, `/Thanks` routes.

**Consequence:** the V1/V2 version poll in the current studio page goes away —
there is no second version left to vote on. The `castVote` handler and its
`send-mail` call are deleted with it.

**Survives:** `src/app/api/send-mail/route.ts` (rewired to a real contact form
in T10), `public/Resume_AnimeshJha.pdf`, `src/assets/naruto-body.png` (the
design calls for anime-style portrait art in chapter 02, so the art outlives
the anime theme), and the favicon.

## D2 — Real App Router segments, one shared layout

Each chapter is its own route with its own metadata and static prerender:

| Route              | Chapter          |
|--------------------|------------------|
| `/`                | 01 Studio        |
| `/about`           | 02 About         |
| `/products`        | 03 Products      |
| `/products/[slug]` | 03b Detail       |
| `/work`            | 04 Work          |
| `/services`        | 05 Services      |
| `/thanks`          | 06 Thanks        |

Rejected: the current single-page `useState` chapter switcher. It gives the
whole site one URL, one `<title>`, and no shareable product links.

**Consequence:** "active chapter" derives from `usePathname()`, not state.
Chapter order for prev/next and the footer label lives in `src/content/nav.ts`
as the single source of truth.

## D3 — Content as typed TypeScript modules

`src/content/*.ts` exporting typed objects, with shared types in
`src/content/types.ts`. No database, no CMS, no runtime fetch.

Rejected: JSON+zod (schema upkeep for a single-author site) and MDX (heavier
than the current copy needs; revisit if long-form case studies arrive).

**Consequence:** renaming a content field is a compile error, not a blank
section on the deployed page.

## D4 — Teardown before rebuild

T01 deletes first and leaves the app building on a stub page. Nothing is
rebuilt "alongside" the old code. This keeps every later task working against
a clean tree instead of dodging dead imports.

**The one thing that must not be lost:** `src/data/studioData.ts` holds real,
researched copy — actual employment history, real product descriptions, the
Mass Changes recovery metrics. The design file it came from has `[Placeholder]`
in all those slots. T01 archives this content to
`reference/content-inventory.md` **before** deleting anything, and T03 ports
it into `src/content/`. Never re-derive content from the design file.
