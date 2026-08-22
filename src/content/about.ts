import type { Belief } from "./types";

export const aboutHeading =
  "I think in systems and products — and I build full specs before I write code.";

export const aboutParagraphs = [
  "I'm a senior full stack engineer with five years spent designing and delivering SaaS platforms, backend APIs, and multi-tenant systems — most recently leading engineering across workforce and HR platforms at Veritas Prime Labs, where I mentored developers, ran technical interviews, and managed releases. Somewhere along the way, code stopped being a job description and became a craft.",
  "Before shipping platforms I was designing — book covers on 99designs, brand kits in Canva, whole interfaces mocked in raw HTML and CSS before a single framework was involved. That habit never left: every product I build starts as a spec and a set of screens, not a repo.",
  "What I care about in software is taste, maintainability, and clarity. I'd rather delete code than add it, and I believe the best architecture is the one a stranger can read. Today that all funnels into Arkion Labs, my one-person product studio.",
] as const satisfies readonly string[];

export const beliefs = [
  {
    tag: "<taste>",
    text: "Good software has opinions. I'd rather ship one sharp flow than five mediocre ones.",
  },
  {
    tag: "<maintainability>",
    text: "Code is read a hundred times more than it's written. I optimize for the reader.",
  },
  {
    tag: "<clarity>",
    text: "Specs before code. If I can't explain the system on one page, it isn't designed yet.",
  },
] as const satisfies readonly Belief[];

export const portrait = {
  caption: "// fig.01 — the founder, illustrated",
  alt: "Illustrated portrait of Animesh Jha, founder of Arkion Labs",
} as const;
