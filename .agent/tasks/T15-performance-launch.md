# T15 — Performance and launch checks

**Status:** BLOCKED · **Depends on:** T14 · **Phase:** D

## Goal

Final pass before the rebuilt site replaces the old one in production.

## Baseline

The pre-rebuild site: `/` at 4.66 kB / 157 kB first load, `/studio` at
13.3 kB / 156 kB, 77.4 kB shared. The rebuild should beat this comfortably —
teardown removed `recoil`, `tsparticles`, and `react-icons`, and the
single-page bundle is now split across routes.

Record the new numbers against these in the commit message.

## Bundle

- `npx next build` and review per-route sizes. Anything above ~150 kB first
  load deserves an explanation.
- Confirm removed deps are actually gone from the lockfile:
  `npm ls recoil tsparticles react-icons react-typed axios` should fail to find
  any.
- Audit `"use client"` placement. Every client component pulls its subtree into
  the browser bundle — the chapters themselves should be server components,
  with only the drawer, splash, motion wrappers, and contact form on the
  client.
- `framer-motion` is the heaviest remaining dependency. If `Reveal` is its only
  consumer, weigh replacing it with an `IntersectionObserver` plus a CSS class
  — typically a ~30 kB gzip saving. Judgment call; measure before deciding.

## Images

- `naruto-body.png` — check the source dimensions against its `360px` display
  width. Resize the source if it is dramatically oversized, and confirm
  `next/image` serves WebP or AVIF.
- Confirm `sizes` is set (T07) so mobile does not download the desktop asset.
- The portrait is below the fold on `/about` — it should lazy-load, not carry
  `priority`.

## Fonts

- JetBrains Mono loads four weights plus italic. Confirm every one is actually
  used; each unused weight is a wasted file.
- `display: swap` set, and `next/font` self-hosting the files (no runtime
  request to fonts.gstatic.com in the network panel).
- Font preload for the weights used above the fold.

## Lighthouse

Run on a production build (`next build && next start`), mobile preset, on every
route. Targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95,
SEO 100.

Watch CLS specifically — the splash overlay and the reveal animations are the
likely sources.

## Launch checklist

- [ ] `MAIL_USER`, `MAIL_APP_PASSWORD`, `MAIL_TO` set in the deploy environment
      (only if T10 chose Option A)
- [ ] Contact path tested against the real inbox in production
- [ ] Resume PDF downloads correctly from the deployed URL
- [ ] All external links resolve — the three `arkionlabs.in` product URLs,
      LinkedIn, GitHub
- [ ] 404 page styled to match the site
- [ ] Favicon present; no `favicon1.ico` left behind
- [ ] No `console.log` or commented-out code in `src/`
- [ ] `README.md` updated — it still describes the anime portfolio
- [ ] `docs/portfolio-phase2-creative-directions-brief.md` still accurate, or
      archived to `.agent/reference/`
- [ ] Old routes (`/Experience`, `/Projects`, `/Thanks`, `/studio`) return 404
      or redirect — decide which, and if redirecting, add them to
      `next.config.js`

## The redirect question

`/studio`, `/Projects`, and `/Experience` may have been shared or indexed.
Decide deliberately: 301 them to their nearest new equivalent (`/studio` → `/`,
`/Projects` → `/products`, `/Experience` → `/work`), or let them 404. Redirects
are the safer default if any link was ever shared publicly.

## Acceptance criteria

- [ ] Lighthouse targets met on all eight routes
- [ ] Bundle sizes recorded and no route unexplainably large
- [ ] Removed dependencies absent from the lockfile
- [ ] Launch checklist fully ticked
- [ ] Redirect decision made and implemented
