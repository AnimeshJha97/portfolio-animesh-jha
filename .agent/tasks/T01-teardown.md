# T01 — Teardown and dependency cleanup

**Status:** DONE · **Depends on:** — · **Phase:** A

## Goal

Delete the anime V1 site and every dependency it dragged in, leaving a tree
that builds on a stub page. No rebuilding here — this task only removes.

## Precondition

`.agent/reference/studioData.archived.ts` exists (already done). Verify before
deleting anything:

```bash
test -f .agent/reference/studioData.archived.ts && wc -l .agent/reference/studioData.archived.ts
```

Must report 341 lines. If it does not, stop and re-copy from git `7008657`.

## Delete — routes and pages

- `src/app/Experience/`
- `src/app/Projects/`
- `src/app/Thanks/`
- `src/app/studio/` (whole folder — it is rebuilt as real routes in Phase C)
- `src/app/recoil/` and `src/app/recoilRoot/`

## Delete — components

`BackgroundAudio.tsx`, `CodeSection.tsx`, `ContactMe.tsx`, `EmailModal.tsx`,
`Input.tsx`, `Loading.tsx`, `PageShell.tsx`, `Particle.tsx`, `Sasuke.tsx`,
`SkillBox.tsx`, `StartAnimation.tsx`, `ThemePaletteSync.tsx`, `Title.tsx`

That is all of `src/components/`. Remove the folder; Phase B and C recreate it
with the structure in the sprint file.

## Delete — data and assets

- `src/data/intro.ts`, `src/data/themeData.ts`, `src/data/studioData.ts`
  (archived — safe to delete)
- `src/assets/`: `sasuke-body.png`, `sasuke-eyes.png`, `sasuke-theme.wav`,
  `naruto-eyes.png`, `box-bg.svg`, `box-bg-large.svg`, `next-arrow.svg`,
  `prev-arrow.svg`, `share-icon.svg`, `github-icon.svg`, `instagram-icon.svg`,
  `linkedin-icon.svg`
- `public/next.svg`, `public/vercel.svg`
- `src/app/favicon1.ico`

## Keep — do not touch

- `src/app/api/send-mail/route.ts` — rewired to the contact form in T10
- `src/app/favicon.ico`
- `public/Resume_AnimeshJha.pdf`
- `src/assets/naruto-body.png` — the chapter 02 portrait (D1)
- `.agent/`, `docs/`

## Dependencies to remove

Confirmed unimported after the deletions above:

```bash
npm uninstall @getbrevo/brevo @sendgrid/mail axios react-typed \
  recoil react-tsparticles tsparticles react-icons
```

`@getbrevo/brevo`, `@sendgrid/mail`, `axios` and `react-typed` were already
dead before this task. `recoil`, `tsparticles`, `react-tsparticles` and
`react-icons` die with the components above.

**Keep** `framer-motion` — T12 uses it for the reveal animations. **Keep**
`nodemailer` — the send-mail route needs it.

## Stub the app

Reduce `src/app/layout.tsx` to a bare shell (no Recoil, no Particle, no audio,
no theme sync) and `src/app/page.tsx` to a placeholder. Empty `globals.css`
down to a reset — T02 fills it. `tailwind.config.js` still references the old
CSS-variable colors (`bgCol`, `primary`, `textWhite`, `textLight`); leave the
file in place but expect T02 to replace the theme block wholesale.

Also drop the now-unused `images.domains` entry in `next.config.js` (see the
sprint parking lot).

## Acceptance criteria

- [x] `npx tsc --noEmit` clean
- [x] `npx next build` succeeds; route list shows only `/` and `/api/send-mail`
- [x] `grep -r "recoil\|tsparticles\|react-icons\|react-typed" src/` returns nothing
- [x] `src/components/`, `src/data/`, `src/app/recoil/` no longer exist
- [x] `src/app/api/send-mail/route.ts` unchanged from `git show 7008657`
- [x] `public/Resume_AnimeshJha.pdf` and `src/assets/naruto-body.png` still present

## Out of scope

Any new styling, content, or components. This task is subtractive only.
