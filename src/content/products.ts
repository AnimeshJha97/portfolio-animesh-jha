import { EMAIL, GITHUB } from "./site";
import type {
  Product,
  ProductAccent,
  ProductAccentStyle,
  ProductStatus,
  ProductStatusStyle,
} from "./types";

export const productAccentStyles = {
  ai: { color: "#e5484d", glow: "rgba(229,72,77,.12)" },
  oss: { color: "#46c98c", glow: "rgba(70,201,140,.12)" },
} as const satisfies Record<ProductAccent, ProductAccentStyle>;

export const productStatusStyles = {
  live: { label: "LIVE · FREE", dotColor: "#4cc38a" },
  waitlist: { label: "WAITLIST", dotColor: "#e2b53e" },
  wip: { label: "IN PROGRESS", dotColor: "#8a8794" },
} as const satisfies Record<ProductStatus, ProductStatusStyle>;

export const productsLede =
  "Five products, built and run by Arkion Labs. Three are AI products you can use today or join early; two are open-core developer tools — self-host free, pay for hosted.";

export const productUi = {
  backLabel: "← back to /products",
  whyTag: "<why>",
  whoTag: "<who>",
  howTag: "<how>",
} as const;

export const products = [
  {
    id: "p3kit",
    slug: "p3kit",
    name: "P3Kit",
    icon: "◈",
    type: "AI PRODUCT",
    accent: "ai",
    pitch:
      "AI interview prep that trains you like a sparring partner, not a flashcard deck.",
    status: "live",
    cta: "try it free",
    ctaBig: "TRY P3KIT FREE",
    ctaHref: "https://p3kit.arkionlabs.in",
    what: "Structured, AI-driven interview preparation for engineers — upload a resume and get focused prep kits, practice plans, and progress tracking instead of a random question bank.",
    why: "Job seekers usually know what they want to improve, but they have no structured way to turn a resume into focused prep. Interview prep today is either static question banks or expensive coaching — P3Kit sits between: adaptive, honest feedback at zero cost to start.",
    who: "Engineers preparing for technical and behavioral interviews — from new grads to seniors switching tracks.",
    how: [
      "Resume upload and AI kit generation tuned to your role and level",
      "LLM workflows for personalized preparation, built on OpenAI and Gemini prompt pipelines",
      "Authenticated flows with persistent, MongoDB-backed progress tracking across sessions",
    ],
    tryHead: "Live and free to try",
    trySub: "No card, no trial clock — sign in and start.",
  },
  {
    id: "ledeqor",
    slug: "ledeqor",
    name: "Ledeqor",
    icon: "◎",
    type: "AI PRODUCT",
    accent: "ai",
    pitch: "AI-assisted learning that adapts to how you actually retain things.",
    status: "live",
    cta: "try it free",
    ctaBig: "TRY LEDEQOR FREE",
    ctaHref: "https://ledeqor.arkionlabs.in",
    what: "An AI learning companion that builds a guided path instead of a playlist — course progression, capstone tracking, and feedback on how well you are actually improving.",
    why: "Most career-upgrade platforms focus on passive content consumption. Courses are linear, people are not — Ledeqor structures learning around progress visibility, projects, and AI-assisted evaluation instead of static pages.",
    who: "Self-taught developers and career-switchers who learn by doing, not by watching.",
    how: [
      "Guided programs built from learning entities, progress checkpoints, and capstone milestones",
      "AI interview-answer analysis and career-upgrade tooling connected to learner progress",
      "Evaluation layers decoupled from core learning data, so feedback improves without rewrites",
    ],
    tryHead: "Live and free to try",
    trySub: "No card, no trial clock — sign in and start.",
  },
  {
    id: "frontmate",
    slug: "frontmate",
    name: "FrontMate",
    icon: "◍",
    type: "AI PRODUCT",
    accent: "ai",
    pitch: "An AI receptionist for small businesses that never misses a call.",
    status: "waitlist",
    cta: "join the waitlist",
    ctaBig: "JOIN THE WAITLIST",
    ctaHref: `mailto:${EMAIL}?subject=FrontMate%20waitlist`,
    what: "A 24/7 AI front desk for small businesses — answers, books, routes, and follows up so inquiries become structured action instead of missed calls.",
    why: "Missed calls are missed revenue, and small teams can't staff a phone line around the clock. Traditional receptionist workflows are manual, inconsistent, and hard to scale across clients.",
    who: "Clinics, salons, trades, and local services with more calls than hands.",
    how: [
      "WhatsApp webhook handling with Gemini-powered replies and persistent conversation storage",
      "Booking-oriented message flows that move users from inquiry to structured action",
      "Multi-tenant architecture with tenant database isolation — no cross-tenant data leakage",
    ],
    tryHead: "Launching soon",
    trySub: "Join the waitlist for early access and founding pricing.",
  },
  {
    id: "query-guardian",
    slug: "query-guardian",
    name: "Query Guardian",
    icon: "▣",
    type: "OPEN-CORE",
    accent: "oss",
    pitch: "Postgres performance monitoring you can self-host — or let us host.",
    status: "wip",
    cta: "follow the build",
    ctaBig: "STAR ON GITHUB",
    ctaHref: GITHUB,
    what: "Catch the slow query before your users do — query-level Postgres observability without the enterprise price tag.",
    why: "Postgres observability today is either raw pg_stat spelunking or enterprise pricing. Teams deserve regression detection that explains itself.",
    who: "Backend teams running production Postgres without a dedicated DBA.",
    how: [
      "Query fingerprinting and regression detection",
      "OSS self-hosted core, paid hosted tier",
      "Alerting that explains the why, not just the what",
    ],
    tryHead: "Open-core, in progress",
    trySub: "Self-host free forever; hosted tier funds the roadmap.",
  },
  {
    id: "statement",
    slug: "statement",
    name: "Statement",
    icon: "▤",
    type: "OPEN-CORE",
    accent: "oss",
    pitch: "Privacy-first personal finance insights. Your data stays yours.",
    status: "wip",
    cta: "follow the build",
    ctaBig: "STAR ON GITHUB",
    ctaHref: GITHUB,
    what: "Personal finance analysis without handing your bank login to an ad company.",
    why: "Every finance app monetizes your transactions. Statement inverts that — local-first by default, insights computed on your machine.",
    who: "Privacy-conscious people who still want real insights from their spending.",
    how: [
      "OSS self-hosted core with local data storage",
      "Paid hosted tier adds bank sync",
      "Insight engine runs on your data, not on you",
    ],
    tryHead: "Open-core, in progress",
    trySub: "Self-host free forever; hosted tier adds bank sync.",
  },
] as const satisfies readonly Product[];

export type ProductSlug = (typeof products)[number]["slug"];
