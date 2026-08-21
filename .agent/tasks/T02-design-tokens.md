# T02 — Design tokens and global styles

**Status:** BLOCKED · **Depends on:** T01 · **Phase:** A

## Goal

Establish the visual system once, in CSS variables and Tailwind theme, so no
chapter has to hand-write a hex value. The old code used inline `style={{}}`
objects with literal hexes on nearly every element — that is what this task
exists to prevent recurring.

## Work

### 1. Font

JetBrains Mono via `next/font/google` in the root layout — weights
`300, 400, 500, 700`, styles `normal, italic`, `subsets: ["latin"]`, exposed as
a CSS variable (`variable: "--font-mono"`) so Tailwind can reference it. Set
`display: "swap"`.

### 2. `src/app/globals.css`

Define the full palette from `reference/design-spec.md` as custom properties on
`:root`. The site is dark-only by design — do not add a light theme or
`prefers-color-scheme` block.

```css
:root {
  --bg: #0a0a0c;
  --surface: #0d0d10;
  --border-faint: #1a1a20;
  --border: #1f1f26;
  --border-mid: #26242e;
  --border-strong: #33313b;
  --text: #e8e6e3;
  --text-body: #b8b5c0;
  --text-muted: #8a8794;
  --text-dim: #55525e;
  --text-faint: #3d3b45;
  --accent: #e5484d;
  --accent-hover: #ff6b70;
  --accent-oss: #46c98c;
  --status-live: #4cc38a;
  --status-wait: #e2b53e;
  --status-wip: #8a8794;
}
```

Then base styles: `box-sizing: border-box` globally, body at `15px / 1.7` on
`--bg` in `--text`, links in `--accent` with `--accent-hover` on hover and no
underline, `::selection` at `rgba(229,72,77,.35)` on white, and
`text-wrap: pretty` on `p`.

### 3. Keyframes

All five from the design spec — `fadeUp`, `skipIn`, `pulse`, `blink`,
`ringSpin`. Prefix them `st-` to avoid collisions. Wrap the infinite ones
(`pulse`, `blink`, `ringSpin`) so they are disabled under
`@media (prefers-reduced-motion: reduce)`; T14 audits this, but establish the
pattern now.

### 4. `tailwind.config.js`

Replace the theme block. The old `bgCol` / `primary` / `textWhite` /
`textLight` colors and the `fontSize` / `padding` scales were built for the
anime site — delete them.

- `colors`: map every token above to a Tailwind name reading from the CSS
  variable, so `bg-surface`, `text-muted`, `border-strong` all work.
- `fontFamily.mono`: `var(--font-mono)` with a monospace fallback stack.
- `letterSpacing`: add the design's scale — `.02em, .06em, .08em, .1em, .12em,
  .14em, .18em, .2em, .22em, .3em, .35em`. These recur constantly; naming them
  keeps chapters readable.
- `maxWidth.content`: `1080px`.
- `content` globs: drop `./src/pages/**` (no pages dir), keep `app` and
  `components`, add `./src/content/**` only if class names ever appear there
  (they should not — prefer not adding it).

### 5. Styling approach

From here on, chapters use Tailwind utilities against these tokens. Reserve
inline `style` for genuinely dynamic values only — per-product accent colors in
chapter 03 are the legitimate case, since they come from content data.

## Acceptance criteria

- [ ] Every palette value in `reference/design-spec.md` exists as a CSS variable
- [ ] `tailwind.config.js` contains no leftover anime-site theme values
- [ ] JetBrains Mono loads via `next/font` and applies to `body`
- [ ] All five keyframes defined; infinite ones respect reduced motion
- [ ] A scratch element using `bg-surface border-border text-body` renders correctly
- [ ] `npx tsc --noEmit` and `npx next build` pass

## Out of scope

Header, footer, and any chapter markup — that is T04 onward. This task produces
no visible page.
