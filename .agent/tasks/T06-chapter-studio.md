# T06 — Chapter 01: Studio (home)

**Status:** BLOCKED · **Depends on:** T03, T04 · **Phase:** C
**Route:** `/` · **Content:** `src/content/home.ts`

## Goal

The landing chapter — who this is, proof at a glance, and three doors out.

## Build

`SectionHead` for chapter `studio` (tag, counter, and note all come from
`nav.ts`).

**Hero block**, `position: relative`, padding `12px 0 56px`:

- Decorative glow, `380px` circle at `top:-60px; right:-40px`,
  `radial-gradient(circle, rgba(229,72,77,.14) 0%, transparent 65%)`,
  `pointer-events: none`. It overflows the column deliberately — make sure it
  does not create horizontal scroll on mobile (clip at the container).
- Eyebrow: `Founder, Arkion Labs | Senior Full Stack Developer` at `14px` in
  `--text-muted`, the pipe in `--text-faint`.
- `<h1>`: `ANIMESH` / line break / `JHA` in accent, then a `_` blinking on
  `st-blink 1.1s step-end infinite`. `clamp(38px, 7vw, 64px)`, weight 700,
  `.02em`, leading `1.1`.
- Lede: `max-width: 560px`, `16px`, `--text-body`, with `Arkion Labs` lifted to
  `--text`.

**Stats** — 4 cards, `repeat(auto-fit, minmax(210px, 1fr))`, gap `14px`,
`--surface` on `--border`. Number at `30px/700` in accent, label at `12px/.06em`
in `--text-muted`. Hover lifts the border to `--border-strong`.

**CTAs** — flex-wrap, gap `14px`:

| Label                | Style   | Target      |
|----------------------|---------|-------------|
| `EXPLORE PRODUCTS →` | filled  | `/products` |
| `SEE MY WORK`        | outline | `/work`     |
| `HIRE ME`            | outline | `/services` |

Filled: accent background, `--bg` text, `700`, hover `--accent-hover`. Outline:
transparent on `--border-strong`, hover border to accent. All `15px 26px`,
`14px`, `.1em`.

The old build added a fourth `⤓ RESUME` download button here. Keep it — it
serves the recruiter track the chapter note promises, and the resume PDF
survives teardown. Style as outline.

Close with `SectionClose` and the shared `ChapterNav`.

## Notes

These are navigations, not actions — render them as `next/link`, not `<button>`
with a router push. The old implementation used buttons because it was a
single-page state switcher; D2 removes that constraint.

## Acceptance criteria

- [ ] Hero, stats, and CTAs match `reference/design-spec.md`
- [ ] All copy comes from `src/content/home.ts` — no strings in the component
- [ ] CTAs are real links; middle-click and ctrl-click open new tabs
- [ ] Glow does not cause horizontal overflow at 320px width
- [ ] Blinking underscore stops under `prefers-reduced-motion: reduce`
- [ ] `/` prerenders static in `next build`
- [ ] `npx tsc --noEmit` clean
