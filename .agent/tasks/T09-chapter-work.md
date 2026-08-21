# T09 — Chapter 04: Work

**Status:** BLOCKED · **Depends on:** T03, T04 · **Phase:** C
**Route:** `/work` · **Content:** `src/content/work.ts`

## Goal

The credibility chapter — the recruiter and client track. Three stacked blocks:
a featured case study, three supporting ones, and the employment timeline.

## Build

`SectionHead` for `work` (note:
`// for recruiters & clients — proof I can be trusted with serious systems`).

### Featured case study

Panel bordered `rgba(229,72,77,.4)` over
`linear-gradient(180deg, rgba(229,72,77,.05), transparent 40%)` on `--surface`,
padding `34px`.

- Label row: `★ FEATURED CASE STUDY` at `12px/.14em` in accent; status at right
  in `--text-dim`.
- `<h2>` at `clamp(24px, 4vw, 32px)/700` — the Mass Changes recovery story.
- Three metric tiles, `repeat(auto-fit, minmax(160px, 1fr))`, gap `12px`,
  bordered `--border-mid`, padding `16px`. Number at `22px/700` in accent
  (`10min → 2-3s`, `20 → 1,000+`, `100K`), label at `11px` in `--text-muted`.
- Six tagged sections, `repeat(auto-fit, minmax(260px, 1fr))`, gap `22px`.
  Each is `<tag>` at `12px/.08em` in accent over `13px` body text. Tags:
  `problem`, `my role`, `technical work`, `architecture`, `impact`, `status`.

This is the strongest content on the site and it is all real — SAP BTP, the SQL
rewrite, the stress-testing work. Port it exactly from the archive.

### Supporting case studies

Three cards, `repeat(auto-fit, minmax(300px, 1fr))`, gap `16px`, `--surface` on
`--border`, padding `26px`. Name at `17px/700`, then three labeled rows at
`13px` — `problem:` / `my role:` / `impact:` with the label in accent and the
value in `--text-body`. Hover to `--border-strong`.

### Experience timeline

`<experience>` heading at `14px/.08em` in accent, then one row per job:
`grid-template-columns: 110px 1fr`, gap `20px`, padding `20px 0`, split by a
`--border-faint` bottom rule.

Left: years in `--text-dim` at `12px`. Right: company at `15px/700` beside role
at `13px` in `--text-muted`, then the blurb at `13px`.

The archive carries a `skills` array per job that the design has no slot for.
The old build rendered them as small tags under each blurb — keep that; it is
real signal for the recruiter track. Style as `11px` chips bordered
`--border-faint` in `--text-muted`.

At `110px` the year column is tight on mobile — collapse to a single stacked
column below the `300px` breakpoint rather than letting the years wrap.

Close with `SectionClose` and `ChapterNav`.

## Acceptance criteria

- [ ] Featured panel, three case studies, and four timeline rows all render
- [ ] All content from `src/content/work.ts`; no `20XX` or placeholder text
- [ ] Job skill chips render
- [ ] Timeline stacks readably at 320px
- [ ] `/work` prerenders static
- [ ] `npx tsc --noEmit` clean
