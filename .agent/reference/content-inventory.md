# Content inventory

The rebuild's single biggest risk is losing real, researched copy during
teardown. The design file has `[Placeholder]` in nearly every content slot;
the current `src/data/studioData.ts` has the real thing. **Content comes from
here, never from the design file.**

## Archived source

`reference/studioData.archived.ts` — a verbatim copy of `src/data/studioData.ts`
(341 lines), taken before any deletion. T03 ports from this file. It stays in
`.agent/` permanently as the provenance record.

## What is real vs. placeholder

| Content                | In design file        | In archive                                 |
|------------------------|-----------------------|--------------------------------------------|
| 5 products (what/why/who/how) | `[Placeholder]` | Real — actual stacks, real positioning      |
| Product CTA links      | `href="#"`            | Real URLs on `arkionlabs.in` + mailto       |
| About paragraphs       | `[Placeholder]`       | Real — 99designs, Canva, Veritas Prime      |
| Lead case study        | `[Placeholder]`       | Real — SAP BTP, SQL rewrite, stress testing |
| 3 case studies         | `[Placeholder]`       | Real — Overtime, Prime Time, Nefronix       |
| 4 jobs                 | `20XX` + `[Placeholder]` | Real dates, companies, blurbs, skill tags |
| Stats (100K+ etc.)     | Real                  | Real (identical)                            |
| Beliefs                | `[Placeholder]`       | Real                                        |
| Services / offerings   | Real                  | Real (identical)                            |

## Target shape in `src/content/`

Split the single archived module into focused files. Suggested mapping:

| New file                | Ported from archive                                        |
|-------------------------|------------------------------------------------------------|
| `types.ts`              | `StudioProduct` type, widened for new fields                |
| `site.ts`               | `EMAIL`, `LINKEDIN`, `GITHUB`, `RESUME`, wordmark, footer   |
| `nav.ts`                | `studioPages`, `studioLabels` + route paths + chapter order |
| `products.ts`           | `studioProducts` (add a `slug` field for `/products/[slug]`)|
| `about.ts`              | `studioAboutParas`, `studioBeliefs`                         |
| `work.ts`               | `studioLeadCase`, `studioCaseStudies`, `studioJobs`         |
| `services.ts`           | `studioServices` + the two engagement models (currently     |
|                         | hardcoded in the old page's JSX — extract them)             |
| `home.ts`               | `studioStats`, hero eyebrow/headline/lede                   |

## Copy currently trapped in JSX

These strings live in the old `src/app/studio/page.tsx` markup, not in
`studioData.ts`. They must be lifted into `src/content/` during the rebuild —
the archive alone does not contain them:

- Every section note (`// the human, not the resume`, and the five others).
- Chapter 05 engagement models: `MODEL 01 — SCOPED PROJECTS` /
  `Full builds, end to end` / its paragraph / `→ let's talk scope`, and
  `MODEL 02 — HOURLY / RETAINER` / `Ongoing & advisory` / its paragraph /
  `$40/hr · retainers on request`.
- Chapter 05 CTA box: `Have something in mind?` and its subline.
- Chapter 06: the h2 pair, the 3 route cards (`Build Products` / `Lead Teams` /
  `Refine Experiences` with their descriptions).
- Chapter 03 lede: `Five products, built and run by Arkion Labs...`.
- Chapter 02 h2: `I think in systems and products — and I build full specs
  before I write code.`

`reference/design-spec.md` carries the exact wording for all of these under
**Chapter specs**, and the old page is in git history at `7008657` if a
phrase needs recovering verbatim.

## Content to drop

- The V1/V2 version poll block (D1 — no second version survives).
- `src/data/intro.ts` and `src/data/themeData.ts` — anime-site only.
- The masked phone number from the design's contact row.
