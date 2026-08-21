# T14 — Accessibility and responsive QA

**Status:** BLOCKED · **Depends on:** T12, T13 · **Phase:** D

## Goal

An audit-and-fix pass over the finished site. The design is dark, low-contrast
by intent, and heavy on decorative glyphs — three things that need checking
rather than assuming.

## Contrast

Check every foreground token against its background at
[WebAIM](https://webaim.org/resources/contrastchecker/). Expected trouble:

| Pair                          | Where                      | Concern            |
|-------------------------------|----------------------------|--------------------|
| `--text-faint` on `--bg`      | footer, closing tags       | likely below 4.5:1 |
| `--text-dim` on `--bg`        | section notes, captions    | borderline         |
| `--text-muted` on `--surface` | card sublines              | check              |
| `--accent` on `--bg`          | links, tags                | check              |
| `--bg` on `--accent`          | filled button labels       | check              |

Where a pair fails, the fix is a lighter token for that role — **not** a
palette-wide change that flattens the design's depth. Decorative-only text
(closing `</tag>` lines, the chapter counter) may stay dim if it is also
`aria-hidden`, since it carries no information a screen reader user needs.

Record the results in a table in the commit message so the tradeoffs are
documented.

## Keyboard

- Visible focus ring on every interactive element, in accent, that meets
  contrast against both `--bg` and `--surface`. The design specifies hover
  states only — focus styles have to be added.
- Logical tab order per route.
- Skip-to-content link, visible on focus.
- Nav drawer: focus trapped while open, restored to the hamburger on close.
- Splash: focus moves in on open, restored on dismiss.
- Product cards and thanks cards reachable and activatable by keyboard.
- Arrow-key chapter nav (T12) does not hijack typing in the contact form.

## Screen readers

- One `<h1>` per route; no skipped heading levels.
- Decorative glyphs (`◈`, `▣`, `›`, `★`, `⌥`, `✆`) get `aria-hidden="true"` —
  they announce as garbage otherwise.
- Status dots: the `●` is decorative, but the status text must be readable.
- The `<studio>` / `</studio>` tag ornamentation is decorative — hide it.
- Hamburger and close buttons have `aria-label`s; the drawer is a `<nav>` with
  a label; `aria-expanded` reflects state.
- Portrait `alt` text is descriptive (set in T07 — verify it survived).
- Icon-only links (contact chips) have accessible names beyond the glyph.

## Responsive

Test at 320, 375, 768, 1024, 1440, and 1920.

- No horizontal scroll at any width — the chapter 01 glow and the wide grids
  are the likely culprits.
- Chapter 04's `110px 1fr` timeline stacks below `~380px`.
- Chapter 03 detail CTA box wraps rather than overflowing.
- Header wordmark and nav do not collide at `768px`.
- Tap targets at least `44×44` on touch.
- `clamp()` headings do not overflow at `320px`.
- Drawer at `85vw` still shows all six items without scrolling.

## Reduced motion

Re-verify T12's guarantees with the OS setting on. Nothing should animate.

## Acceptance criteria

- [ ] All informational text meets 4.5:1; large text meets 3:1
- [ ] Every interactive element has a visible focus indicator
- [ ] Full site operable by keyboard alone, including drawer and splash
- [ ] Decorative glyphs hidden from assistive tech
- [ ] No horizontal scroll at any tested width
- [ ] Lighthouse Accessibility ≥ 95 on every route
- [ ] Zero axe-devtools violations
- [ ] Contrast results recorded in the commit message
