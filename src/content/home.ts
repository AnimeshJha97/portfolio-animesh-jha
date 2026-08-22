import { RESUME } from "./site";
import type { HomeCta, Stat } from "./types";

export const homeHero = {
  eyebrow: {
    studio: "Founder, Arkion Labs",
    separator: "|",
    role: "Senior Full Stack Developer",
  },
  headline: {
    firstLine: "ANIMESH",
    secondLine: "JHA",
    cursor: "_",
  },
  lede: {
    beforeStudio:
      "I build enterprise SaaS platforms professionally — and AI products independently, through",
    studio: "Arkion Labs",
    afterStudio: ", my one-person product studio.",
  },
} as const;

export const stats = [
  { num: "100K+", label: "employee-scale platform shipped" },
  { num: "30K+", label: "managers supported in production" },
  { num: "1K+", label: "tenant scale architected" },
  { num: "5+", label: "engineers mentored" },
] as const satisfies readonly Stat[];

export const homeCtas = [
  { label: "EXPLORE PRODUCTS →", href: "/products", variant: "filled" },
  { label: "SEE MY WORK", href: "/work", variant: "outline" },
  { label: "HIRE ME", href: "/services", variant: "outline" },
  {
    label: "⤓ RESUME",
    href: RESUME,
    variant: "outline",
    download: true,
  },
] as const satisfies readonly HomeCta[];
