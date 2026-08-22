import { EMAIL } from "./site";
import type { EngagementModel, Service } from "./types";

export const engagementModels = [
  {
    accent: "ai",
    eyebrow: "MODEL 01 — SCOPED PROJECTS",
    title: "Full builds, end to end",
    description:
      "AI products, SaaS platforms, backend architecture — spec'd, built, and shipped as a complete engagement. No public fixed price; every serious build starts with a conversation.",
    closing: { lead: "→ let's talk scope" },
  },
  {
    accent: "oss",
    eyebrow: "MODEL 02 — HOURLY / RETAINER",
    title: "Ongoing & advisory",
    description:
      "Code review, technical advisory, smaller features, or ongoing support — billed hourly or as a monthly retainer.",
    closing: { lead: "$40/hr", detail: "· retainers on request" },
  },
] as const satisfies readonly EngagementModel[];

export const offeringsLabel = "<offerings>";

export const services = [
  {
    icon: "⌥",
    name: "Full-stack product builds",
    desc: "From spec to shipped — web app, API, infra.",
  },
  {
    icon: "⎔",
    name: "Backend / API architecture",
    desc: "Systems that survive scale and staff turnover.",
  },
  {
    icon: "◇",
    name: "AI product engineering",
    desc: "RAG, LLM integration, agentic workflows.",
  },
  {
    icon: "⌘",
    name: "Technical advisory",
    desc: "Fractional-CTO-style guidance, code review.",
  },
] as const satisfies readonly Service[];

export const servicesCta = {
  heading: "Have something in mind?",
  subline: "Email me the brief — I reply with questions, not a sales pitch.",
  label: "EMAIL THE BRIEF →",
  href: `mailto:${EMAIL}`,
} as const;
