# Design spec

Extracted from `Animesh Jha Studio.dc.html` (Claude Design project
`e75a3db1-68a9-437d-8ef6-c51f2f1e7c4c`). This is the authority for visual
values — do not eyeball them from the old implementation.

Note on the source: `support.js` is the design-canvas runtime that interprets
`sc-if` / `sc-for` / `{{ }}` / `style-hover`, and `image-slot.js` is a
drag-to-fill placeholder component. Neither ports to React. `sc-if` becomes
conditional rendering, `sc-for` becomes `.map()`, `style-hover` becomes a CSS
`:hover` rule, and the one `<x-import image-slot>` becomes a real `next/image`.

## Palette

| Token             | Value     | Used for                                 |
|-------------------|-----------|------------------------------------------|
| `--bg`            | `#0a0a0c` | page background                          |
| `--surface`       | `#0d0d10` | cards, panels, nav drawer                |
| `--border-faint`  | `#1a1a20` | header/footer rules, inner dividers      |
| `--border`        | `#1f1f26` | default card border                      |
| `--border-mid`    | `#26242e` | CTA boxes, contact chips                 |
| `--border-strong` | `#33313b` | outline buttons, card hover              |
| `--text`          | `#e8e6e3` | headings, primary text                   |
| `--text-body`     | `#b8b5c0` | paragraphs                               |
| `--text-muted`    | `#8a8794` | secondary labels, card sublines          |
| `--text-dim`      | `#55525e` | section notes, captions                  |
| `--text-faint`    | `#3d3b45` | closing tags, footer, chapter counter    |
| `--accent`        | `#e5484d` | primary red — links, tags, CTA fill      |
| `--accent-hover`  | `#ff6b70` | link + button hover                      |
| `--accent-oss`    | `#46c98c` | open-core products, services model 02    |
| `--status-live`   | `#4cc38a` | LIVE status dot                          |
| `--status-wait`   | `#e2b53e` | WAITLIST status dot                      |
| `--status-wip`    | `#8a8794` | IN PROGRESS status dot                   |

Selection: `background: rgba(229,72,77,.35); color: #fff`.
Accent glows: AI `rgba(229,72,77,.12)`, OSS `rgba(70,201,140,.12)`.

## Type

JetBrains Mono — weights 300/400/500/700 plus italic 400. Body `15px / 1.7`.

| Element           | Size                     | Weight | Tracking   | Leading |
|-------------------|--------------------------|--------|------------|---------|
| h1 hero           | `clamp(38px, 7vw, 64px)` | 700    | `.02em`    | 1.1     |
| h1 product detail | `clamp(30px, 5vw, 46px)` | 700    | —          | —       |
| h2 section        | `clamp(26px, 4vw, 36px)` | 700    | —          | 1.25    |
| h2 thanks         | `clamp(26px, 4vw, 38px)` | 700    | —          | 1.3     |
| h3 service model  | `20px`                   | 700    | —          | —       |
| stat number       | `30px`                   | 700    | —          | —       |
| metric number     | `22px`                   | 700    | —          | —       |
| lede paragraph    | `16px`, detail `17px`    | 400    | —          | —       |
| section tag       | `14px`                   | 400    | `.08em`    | —       |
| section note      | `12px`                   | 400    | `.14em`    | —       |
| chapter counter   | `12px`                   | 400    | `.2em`     | —       |
| eyebrow / label   | `12px`                   | 400    | `.14em`    | —       |
| splash kicker     | `12px`                   | 400    | `.35em`    | —       |
| wordmark          | `13px`                   | 400    | `.22em`    | —       |
| footer / caption  | `11px`                   | 400    | `.12em`    | —       |
| status pill       | `10-11px`                | 400    | `.1-.14em` | —       |

Paragraphs use `text-wrap: pretty`.

## Layout

- Content column `max-width: 1080px`, page padding `110px 24px 80px`.
- Header `padding: 16px 22px`, `rgba(10,10,12,.85)` + `backdrop-filter: blur(8px)`,
  bottom rule `--border-faint`, `z-index: 60`.
- Nav drawer `width: 300px; max-width: 85vw`, `z-index: 80`; scrim
  `rgba(5,5,7,.7)` + `blur(3px)` at `z-index: 70`.
- Scanline overlay `z-index: 90`, `pointer-events: none`, background
  `repeating-linear-gradient(0deg, rgba(255,255,255,.015) 0 1px, transparent 1px 3px)`.
- Splash `z-index: 100`, background
  `radial-gradient(ellipse 70% 55% at 50% 42%, #17090b 0%, #0a0a0c 65%)`.
- Grids are all `repeat(auto-fit, minmax(<N>px, 1fr))`:
  `210px` stats · `220px` beliefs · `240px` offerings and thanks cards ·
  `260px` lead-case columns · `300px` product and case-study cards ·
  `160px` lead metrics. Gaps `14px` / `16px` / `22px`.

## Motion

| Keyframe   | Definition                                                     |
|------------|----------------------------------------------------------------|
| `fadeUp`   | `opacity 0 -> 1`, `translateY(14px) -> none`, `.5-.6s ease`    |
| `skipIn`   | `opacity 0 -> 1`, `.4s ease`                                   |
| `pulse`    | `opacity .55 -> 1 -> .55`, `2.4s ease-in-out infinite`         |
| `blink`    | `0-49% opacity 1, 50-100% opacity 0`, `1.1s step-end infinite` |
| `ringSpin` | `rotate(0) -> rotate(360deg)`, linear infinite                 |

Splash stagger: rings `0s`, wordmark `.15s`, enter button `.3s`, skip `.9s`,
footnote `1.2s`. Nav drawer enters on `fadeUp .25s`.

## Chapter specs

Section header pattern, identical on all six: accent `<tag>` at left, dim
`NN / 06` counter at right, then a dim `// note` line, then `52px` of space.
Every chapter ends with a faint closing tag line `60px` below the content.

**01 Studio** — note `// for recruiters · clients · product users — pick your track below`.
Radial glow `380px` at `top:-60px; right:-40px`,
`radial-gradient(circle, rgba(229,72,77,.14) 0%, transparent 65%)`. Eyebrow
`Founder, Arkion Labs | Senior Full Stack Developer`, h1 `ANIMESH / JHA_` with
the underscore blinking in accent, `560px` lede, 4 stat cards, 3 CTAs
(`EXPLORE PRODUCTS →` filled, `SEE MY WORK` and `HIRE ME` outline).

**02 About** — note `// the human, not the resume`. Two columns: prose (max
`620px`, h2 plus 3 paragraphs) beside a `3/4` portrait (max `360px`, radius
`4`) captioned `// fig.01 — the founder, illustrated`. Below: 3 belief cards.

**03 Products** — note `// for people who want to use what I build`. Lede, then
cards with a `2px` top border in the product accent, icon plus type pill, name
plus pitch, and a footer row (status dot, `cta →`) separated by a
`--border-faint` rule. Hover lifts the border to the accent with a `0 0 30px`
glow.

**03b Detail** — `← back to /products`, a `<product id="...">` tag plus type
pill, icon plus name plus status pill, `17px` lede, then `<why>` / `<who>` /
`<how>` blocks (`how` is a list prefixed with `›`), then a bordered CTA box.
All accents are the product's own, not the global red.

**04 Work** — note `// for recruiters & clients — proof I can be trusted with serious systems`.
Featured case study in a panel bordered `rgba(229,72,77,.4)` with a
`linear-gradient(180deg, rgba(229,72,77,.05), transparent 40%)` wash: star
label, title, 3 metric tiles, then a 6-cell grid of tag plus text. Then 3
case-study cards (`problem:` / `my role:` / `impact:` rows). Then an
`<experience>` heading and a `110px 1fr` timeline, rows split by
`--border-faint`.

**05 Services** — note `// for clients — hire the studio, not just the engineer`.
Two model cards with a `2px` top border — model 01 red, model 02 green. Then
an `<offerings>` 4-card grid, then a bordered CTA box with `EMAIL THE BRIEF →`.

**06 Thanks** — note `// choose how this continues`. h2 reads
`The portfolio ends here.` / `The conversation doesn't.` with the second line
in accent, then 3 route cards, then contact chips. Closes with `// EOF`.

**Footer** — `© 2026 ANIMESH JHA · ARKION LABS` left, chapter label
(`01 — Studio`) right.

## Deliberate departures from the design file

Carried over from the current implementation. Keep these in the rebuild.

1. The design's splash footnote is a theme-audio placeholder. There is no audio
   in the rebuilt site (D1 retires `BackgroundAudio`) — drop the line, and drop
   the header sound toggle with it.
2. The design's product CTAs are `href="#"`. Use the real per-product `ctaHref`
   from the content layer.
3. The design's contact row shows a masked phone number. Use email, LinkedIn,
   GitHub, and the resume PDF instead.
4. The design's `<x-import image-slot>` is a placeholder. Render
   `naruto-body.png` through `next/image`.
5. `showIntro` and `scanlines` in the design's `data-props` are canvas editor
   controls, not site features. Scanlines are always on; the splash is governed
   by `sessionStorage` (T05).
