# T12 — Motion and effects pass

**Status:** BLOCKED · **Depends on:** T06–T11 · **Phase:** D

## Goal

Add motion once, across finished markup. Deliberately after the chapters so it
is applied uniformly instead of re-invented six times.

## Build

### `components/motion/Reveal.tsx` (`"use client"`)

Fade-and-rise on scroll entry, using `framer-motion` (kept through teardown for
exactly this). Props: `delay`, and `children`. Matches the `fadeUp` keyframe —
`14px` rise, `.5s ease`, `opacity 0 → 1`.

Trigger once per element, not on every re-entry. Stagger within a group via the
`delay` prop (the old build used `i * 0.07` for stats, `i * 0.08` for beliefs
and cards, `0.1 + i * 0.05` for the lead-case grid — those read well, reuse
them).

Apply to: stat cards, belief cards, product cards, case-study cards, timeline
rows, offering cards, and thanks cards. Do **not** wrap the hero, section
headers, or body prose — content above the fold should not fade in.

### `components/motion/ScrambleText.tsx` (`"use client"`)

Character-scramble reveal for headline text. The old implementation used it on
the hero name, the splash wordmark, section tags, and product detail titles.
Keep it to the hero `<h1>` and the splash wordmark — on section tags it fired on
every chapter change and read as noise.

Must render the final text on the server so it is in the HTML for crawlers;
scramble only after mount.

### Chapter transitions

Route changes should feel like the old chapter switch. A `fadeUp .5s` on the
main content per route via `template.tsx` (which re-mounts on navigation, unlike
`layout.tsx`) is the simplest approach and needs no client component.

### Keyboard navigation

`←` / `→` step chapters in `nav.ts` order, `Escape` closes the drawer. Ignore
the arrow keys when focus is in an input or textarea (the T10 contact form),
and when a modifier key is held.

If this ships, T04's `ChapterNav` hint line about arrow keys becomes accurate —
enable it. If it does not, remove the hint.

### Cursor effect

The old build had a `CursorFluid` accent trail. Optional. If restored: pointer
devices only (`@media (hover: hover) and (pointer: fine)`), `pointer-events:
none`, and off under reduced motion. Skip it if it costs frames on mid-range
hardware — it is the least load-bearing effect on the site.

## Reduced motion

Every effect in this task honors `prefers-reduced-motion: reduce`:

- `Reveal` renders content at final state, no transition
- `ScrambleText` renders plain text, never scrambles
- Route transition, blink, pulse, and ring spin all stop
- Cursor effect does not mount

This is not optional polish — scramble and blink effects are genuinely hostile
to vestibular disorders.

## Acceptance criteria

- [ ] Cards reveal on scroll with a stagger; above-fold content does not fade
- [ ] Scramble runs on the hero and splash only; final text present in SSR HTML
- [ ] Route changes animate
- [ ] Arrow keys step chapters, ignored while typing in a field
- [ ] With `prefers-reduced-motion: reduce` set, the site is fully static and
      completely usable
- [ ] No layout shift from any animation (check CLS in the T15 pass)
- [ ] `npx tsc --noEmit` clean
