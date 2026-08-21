# T10 — Chapter 05: Services and contact

**Status:** BLOCKED · **Depends on:** T03, T04 · **Phase:** C
**Route:** `/services` · **Content:** `src/content/services.ts`

## Goal

The client track — how to engage, what is on offer, and how to start a
conversation.

## Build

`SectionHead` for `services` (note:
`// for clients — hire the studio, not just the engineer`).

### Engagement models

Two cards, `repeat(auto-fit, minmax(300px, 1fr))`, gap `16px`, `--surface` on
`--border`, padding `30px`, each with a `2px` top border — **model 01 in accent
red, model 02 in `--accent-oss` green**. The green is the design's deliberate
signal that the two models are different in kind, not ranked.

Each: eyebrow at `12px/.14em` in the model's color, `<h3>` at `20px`, a `13px`
paragraph in `--text-body`, and a `14px/700` closing line in `--text`
(`→ let's talk scope` / `$40/hr · retainers on request`, the rate's suffix in
`--text-muted` at normal weight).

This copy currently lives in the old JSX, not the archive — `content-inventory.md`
has it. Lift it into `services.ts` rather than retyping it into the component.

### Offerings

`<offerings>` heading at `14px/.08em` in accent, then four cards,
`repeat(auto-fit, minmax(240px, 1fr))`, gap `14px`, bordered `--border`,
padding `20px`. Glyph at `16px` in accent, name at `14px/700`, description at
`12px` in `--text-muted`. Hover to `--border-strong`.

### Contact CTA

Bordered `--border-mid` box on `--surface`, padding `30px`, space-between,
wrapping. Left: `Have something in mind?` at `16px/700` over its subline in
`--text-muted`. Right: a filled accent button, `EMAIL THE BRIEF →`.

## The contact decision

The design ships this CTA as a plain `mailto:`. The site also has a working
`src/app/api/send-mail/route.ts` (nodemailer, validated, HTML-escaped) kept
through teardown. Pick one, and follow through:

**Option A — real form (recommended).** The CTA opens an inline form (name,
email, subject, message) posting to `/api/send-mail`. A visitor on a machine
with no mail client configured can still reach you, and the route stops being
dead code. Requires: client component, loading and error states, a success
message, and a honeypot field (see the sprint parking lot — do not ship a
public form with no spam mitigation).

**Option B — mailto only.** Matches the design exactly, ships faster. If you
choose this, **delete `src/app/api/send-mail/route.ts` and uninstall
`nodemailer`** in this task — leaving an unused mail endpoint deployed is worse
than not having one.

Do not do both halfway. Record the choice at the top of the commit message.

If Option A: the route expects `{ name, email, subject, content }` and returns
`{ status: boolean, message: string }`. It 500s when `MAIL_USER` or
`MAIL_APP_PASSWORD` are unset — surface that as a friendly failure with the
mailto as fallback, not a silent dead button.

Close with `SectionClose` and `ChapterNav`.

## Acceptance criteria

- [ ] Two model cards with the correct red/green top borders
- [ ] Four offering cards
- [ ] All copy from `src/content/services.ts` — none left in JSX
- [ ] Contact path works end to end for the chosen option
- [ ] If Option A: honeypot present; submit disabled while pending; failure
      shows the mailto fallback
- [ ] If Option B: send-mail route and `nodemailer` both removed
- [ ] `npx tsc --noEmit` clean
