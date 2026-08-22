import type { SiteIdentity } from "./types";

export const EMAIL = "animeshjha.dev@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/animeshjha97/";
export const GITHUB = "https://github.com/AnimeshJha97";
export const RESUME = "/Resume_AnimeshJha.pdf";
export const WORDMARK = "AJ // ARKION LABS";
export const FOOTER_LINE = "© 2026 ANIMESH JHA · ARKION LABS";
export const CANONICAL_URL = "https://animeshjha.dev";

export const site = {
  name: "Animesh Jha",
  role: "Senior Full Stack Developer",
  studio: "Arkion Labs",
  email: EMAIL,
  linkedIn: LINKEDIN,
  github: GITHUB,
  resume: RESUME,
  wordmark: WORDMARK,
  footerLine: FOOTER_LINE,
  canonicalUrl: CANONICAL_URL,
} as const satisfies SiteIdentity;

export const chromeContent = {
  navigationLabel: "NAVIGATE",
  openNavigationLabel: "Open navigation",
  closeNavigationLabel: "Close navigation",
  chapterNavigationLabel: "Chapter navigation",
  previousChapterLabel: "Previous chapter",
  nextChapterLabel: "Next chapter",
  loopChapterLabel: "Back to the first chapter",
} as const;

export const splashContent = {
  initializing: "// INITIALIZING",
  name: "ANIMESH JHA",
  studio: "ARKION LABS",
  enter: "[ ENTER THE STUDIO ]",
  skip: "skip intro →",
} as const;
