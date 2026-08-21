# Sprint 01 — Studio rebuild

Rebuild the portfolio from scratch against the Claude Design
(`Animesh Jha Studio.dc.html`). Teardown first, then a clean build on real
routes with a typed local content layer.

**Decisions:** see `decisions.md` — D1 retire V1, D2 real routes, D3 typed TS
content, D4 teardown before rebuild.
**Design authority:** `reference/design-spec.md`.
**Content authority:** `reference/studioData.archived.ts` + `reference/content-inventory.md`.

## Status board

Statuses: `READY` (deps met, take it) · `BLOCKED` (deps open) · `DOING` · `DONE`.

| #   | Task                                | Depends on | Status  |
|-----|-------------------------------------|------------|---------|
| T01 | Teardown and dependency cleanup     | —          | DONE    |
| T02 | Design tokens and global styles     | T01        | READY   |
| T03 | Typed content layer                 | T01        | READY   |
| T04 | App shell — header, nav, footer     | T02, T03   | BLOCKED |
| T05 | Splash / intro gate                 | T02, T04   | BLOCKED |
| T06 | Chapter 01 — Studio (home)          | T04, T03   | BLOCKED |
| T07 | Chapter 02 — About                  | T04, T03   | BLOCKED |
| T08 | Chapter 03 — Products + detail      | T04, T03   | BLOCKED |
| T09 | Chapter 04 — Work                   | T04, T03   | BLOCKED |
| T10 | Chapter 05 — Services + contact     | T04, T03   | BLOCKED |
| T11 | Chapter 06 — Thanks                 | T04, T03   | BLOCKED |
| T12 | Motion and effects pass             | T06..T11   | BLOCKED |
| T13 | SEO, metadata, sitemap              | T06..T11   | BLOCKED |
| T14 | Accessibility and responsive QA     | T12, T13   | BLOCKED |
| T15 | Performance and launch checks       | T14        | BLOCKED |

Update the status column as you go. T06 through T11 are independent of each
other once T04 lands — they can be done in any order, or in parallel.

## Phases

**Phase A — clean slate (T01–T03).** Delete the anime site, strip dead
dependencies, establish tokens and the content layer. The app builds on a stub
page. Nothing user-facing yet.

**Phase B — shell (T04–T05).** The chrome every chapter shares: header,
drawer nav, scanlines, footer, splash. After this, empty chapters are
navigable.

**Phase C — chapters (T06–T11).** Six routes plus the product detail segment.
Each is self-contained and reads from `src/content/`.

**Phase D — polish (T12–T15).** Motion, metadata, a11y, performance. These are
deliberately last so they apply to finished markup once rather than being
redone per chapter.

## Definition of done, every task

- `npx tsc --noEmit` clean.
- `npx next build` succeeds.
- No content hardcoded in a component — it comes from `src/content/`.
- Visual values match `reference/design-spec.md`.
- Status flipped here, committed as `T##: <title>`.

## Target structure at end of sprint

```
src/
  app/
    layout.tsx                 root shell — fonts, header, nav, scanlines, footer
    page.tsx                   01 Studio
    about/page.tsx             02
    products/page.tsx          03
    products/[slug]/page.tsx   03b  (generateStaticParams)
    work/page.tsx              04
    services/page.tsx          05
    thanks/page.tsx            06
    sitemap.ts  robots.ts
    api/send-mail/route.ts     kept from the old site
    globals.css                tokens + keyframes + base
  components/
    chrome/    Header, NavDrawer, Scanlines, Footer, Splash, ChapterNav
    ui/        SectionHead, SectionClose, Card, Pill, StatusDot, Button
    motion/    Reveal, ScrambleText
  content/
    types.ts site.ts nav.ts home.ts about.ts products.ts work.ts services.ts
```

## Parking lot

Things noticed mid-task that are out of scope. Add, don't act.

- Contact form (T10) needs spam protection before launch — honeypot at minimum;
  decide on rate limiting.
- ~~`next.config.js` allows the `res.cloudinary.com` image domain~~ — removed in
  T01; `next.config.js` is now empty. Re-add if remote images are ever needed.
- Open graph images are currently nonexistent — T13 will need either a static
  OG image or `next/og` generation.
- Consider whether `/thanks` should stay a chapter or become a post-contact
  confirmation route once the form is live.
