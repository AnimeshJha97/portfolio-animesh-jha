import { EMAIL, GITHUB, LINKEDIN, RESUME } from "./site";
import type { ContactLink, RouteCard } from "./types";

export const thanksHeadline = {
  firstLine: "The portfolio ends here.",
  secondLine: "The conversation doesn't.",
} as const;

export const thanksRoutes = [
  {
    eyebrow: "01 → /products",
    title: "Build Products",
    description: "Try what Arkion Labs is shipping — or get in early.",
    href: "/products",
  },
  {
    eyebrow: "02 → /work",
    title: "Lead Teams",
    description: "Hiring full-time? The case studies are the interview.",
    href: "/work",
  },
  {
    eyebrow: "03 → /services",
    title: "Refine Experiences",
    description: "Bring a brief — scoped builds or ongoing advisory.",
    href: "/services",
  },
] as const satisfies readonly RouteCard[];

export const contactLinks = [
  {
    glyph: "@",
    label: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    glyph: "in",
    label: "animeshjha97",
    href: LINKEDIN,
    external: true,
  },
  {
    glyph: "</>",
    label: "AnimeshJha97",
    href: GITHUB,
    external: true,
  },
  {
    glyph: "⤓",
    label: "resume.pdf",
    href: RESUME,
    download: true,
  },
] as const satisfies readonly ContactLink[];

export const thanksClosing = "// EOF";
