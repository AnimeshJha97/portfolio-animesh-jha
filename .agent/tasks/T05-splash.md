# T05 — Splash / intro gate

**Status:** BLOCKED · **Depends on:** T02, T04 · **Phase:** B

## Goal

The `// INITIALIZING` intro overlay, shown once per session, without hurting
first paint or SEO.

## Design

Full-screen `z-100`,
`radial-gradient(ellipse 70% 55% at 50% 42%, #17090b 0%, #0a0a0c 65%)`,
centered column, `gap: 28px`.

1. **Rings**, 120px square: outer ring `1px solid rgba(229,72,77,.5)` with an
   accent top edge spinning `ringSpin 14s linear infinite`; inner ring at
   `inset: 16px`, `rgba(229,72,77,.3)` with an accent bottom edge, same
   animation `9s reverse`; core at `inset: 44px`, solid accent,
   `box-shadow: 0 0 34px rgba(229,72,77,.55)`, `pulse 2.4s`.
2. **Wordmark block** — `// INITIALIZING` at `12px/.35em` in `--text-muted`,
   `ANIMESH JHA` at `26px/700/.12em`, `ARKION LABS` at `13px/.3em` in accent.
3. `[ ENTER THE STUDIO ]` — outline button, `14px/.18em`, hover lifts the
   border to accent with `box-shadow: 0 0 24px rgba(229,72,77,.25)`.
4. `skip intro →` — bare text button in `--text-dim`.

Stagger: rings `0s`, wordmark `.15s`, enter `.3s`, skip `.9s` (`skipIn`).

**Omit the design's fourth line** — it advertises theme audio that no longer
exists (design-spec departure #1). The old build replaced it with a V1 link;
that goes too (D1). Four elements, not five.

## Behavior

- `"use client"`, mounted from the root layout so it covers every route.
- Shows once per browser session. Persist dismissal in `sessionStorage`
  (not `localStorage` — a returning visitor next week should see it again).
- Wrap every storage read and write in `try/catch`; private-mode browsers throw
  on access. If storage is unreadable, show the splash and let dismissal work
  in memory for that page view.
- Both buttons dismiss. So does `Escape`.
- While open: `overflow: hidden` on the body, and focus moves to the enter
  button so keyboard users are not stranded behind the overlay.

## The SSR trap

Reading `sessionStorage` during render breaks hydration — the server has no
storage, so it always renders "show", and the client may disagree. Either gate
the reveal behind a mounted effect, or render the overlay only after mount.
Whichever route you take, **the chapter content underneath must exist in the
server HTML regardless** — the splash is an overlay, never a gate on rendering
`children`. T13's metadata and crawlability depend on this.

Verify with `curl -s localhost:3000 | grep -c "ANIMESH"` — the hero copy must
be in the server response even though the splash covers it.

## Acceptance criteria

- [ ] Splash renders on first visit, dismisses via both buttons and `Escape`
- [ ] Does not reappear on navigation within the session
- [ ] Reappears in a fresh session (new tab after closing, or cleared storage)
- [ ] No hydration warning in the console
- [ ] Chapter HTML is present in the server response with the splash open
- [ ] Body scroll locked while open, restored after
- [ ] Ring animations stop under `prefers-reduced-motion: reduce`
- [ ] No sound toggle, no V1 link, no audio placeholder line

## Out of scope

Scroll reveals and the scramble effect (T12).
