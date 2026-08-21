export type StudioProduct = {
  id: string;
  name: string;
  icon: string;
  type: "AI PRODUCT" | "OPEN-CORE";
  accent: string;
  glow: string;
  pitch: string;
  status: string;
  statusColor: string;
  cta: string;
  ctaBig: string;
  ctaHref: string;
  what: string;
  why: string;
  who: string;
  how: string[];
  tryHead: string;
  trySub: string;
};

const AI = "#e5484d";
const OSS = "#46c98c";
const LIVE = "#4cc38a";
const WAIT = "#e2b53e";
const WIP = "#8a8794";

export const EMAIL = "animeshjha.dev@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/animeshjha97/";
export const GITHUB = "https://github.com/AnimeshJha97";
export const RESUME = "/Resume_AnimeshJha.pdf";

export const studioProducts: StudioProduct[] = [
  {
    id: "p3kit",
    name: "P3Kit",
    icon: "◈",
    type: "AI PRODUCT",
    accent: AI,
    glow: "rgba(229,72,77,.12)",
    pitch:
      "AI interview prep that trains you like a sparring partner, not a flashcard deck.",
    status: "LIVE · FREE",
    statusColor: LIVE,
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
    name: "Ledeqor",
    icon: "◎",
    type: "AI PRODUCT",
    accent: AI,
    glow: "rgba(229,72,77,.12)",
    pitch: "AI-assisted learning that adapts to how you actually retain things.",
    status: "LIVE · FREE",
    statusColor: LIVE,
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
    name: "FrontMate",
    icon: "◍",
    type: "AI PRODUCT",
    accent: AI,
    glow: "rgba(229,72,77,.12)",
    pitch: "An AI receptionist for small businesses that never misses a call.",
    status: "WAITLIST",
    statusColor: WAIT,
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
    name: "Query Guardian",
    icon: "▣",
    type: "OPEN-CORE",
    accent: OSS,
    glow: "rgba(70,201,140,.12)",
    pitch: "Postgres performance monitoring you can self-host — or let us host.",
    status: "IN PROGRESS",
    statusColor: WIP,
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
    name: "Statement",
    icon: "▤",
    type: "OPEN-CORE",
    accent: OSS,
    glow: "rgba(70,201,140,.12)",
    pitch: "Privacy-first personal finance insights. Your data stays yours.",
    status: "IN PROGRESS",
    statusColor: WIP,
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
];

export const studioStats = [
  { num: "100K+", label: "employee-scale platform shipped" },
  { num: "30K+", label: "managers supported in production" },
  { num: "1K+", label: "tenant scale architected" },
  { num: "5+", label: "engineers mentored" },
];

export const studioBeliefs = [
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
];

export const studioAboutParas = [
  "I'm a senior full stack engineer with five years spent designing and delivering SaaS platforms, backend APIs, and multi-tenant systems — most recently leading engineering across workforce and HR platforms at Veritas Prime Labs, where I mentored developers, ran technical interviews, and managed releases. Somewhere along the way, code stopped being a job description and became a craft.",
  "Before shipping platforms I was designing — book covers on 99designs, brand kits in Canva, whole interfaces mocked in raw HTML and CSS before a single framework was involved. That habit never left: every product I build starts as a spec and a set of screens, not a repo.",
  "What I care about in software is taste, maintainability, and clarity. I'd rather delete code than add it, and I believe the best architecture is the one a stranger can read. Today that all funnels into Arkion Labs, my one-person product studio.",
];

export const studioLeadCase = {
  title: "Mass Changes Platform — the recovery story",
  status: "status: shipped, in production",
  metrics: [
    { num: "10min → 2-3s", label: "bulk-operation latency" },
    { num: "20 → 1,000+", label: "concurrent users" },
    { num: "100K", label: "employee records" },
  ],
  sections: [
    {
      tag: "problem",
      text: "Peak HR review cycles crushed a bulk-update platform handling high-volume employee and manager operations — operations timed out past 10 minutes and the platform buckled under concurrent load.",
    },
    {
      tag: "my role",
      text: "Performance engineering end to end — diagnosis across backend queries, frontend responsiveness, and infrastructure-aware stability improvements.",
    },
    {
      tag: "technical work",
      text: "Rewrote complex SQL queries, introduced indexing strategies, refactored backend and frontend code paths, and added stress testing to surface bottlenecks before monthly spike windows.",
    },
    {
      tag: "architecture",
      text: "Worked within SAP BTP infrastructure to improve multi-instance deployment behavior, load balancing, and high-volume synchronization handling — treating the platform as a capacity problem, not a feature-delivery problem.",
    },
    {
      tag: "impact",
      text: "10+ minute timeouts down to 2–3 seconds; stable at 1,000+ concurrent users on a platform supporting 100K+ employees and 30K+ managers.",
    },
    {
      tag: "status",
      text: "In production, stable under peak review-cycle load.",
    },
  ],
};

export const studioCaseStudies = [
  {
    name: "Overtime Management Platform",
    problem:
      "Enterprise workforce teams needed configurable overtime rules, approval chains, and HR-system sync across tenants.",
    role: "Led architecture and backend-heavy implementation for the multi-tenant SaaS platform.",
    impact:
      "Tenant-isolated architecture (config DB + per-tenant DBs) supporting multiple organizations with reliable sync-heavy workflows.",
  },
  {
    name: "Prime Time Tracking Mobile App",
    problem:
      "Field and remote workforces needed accurate mobile time capture, even in low-connectivity conditions.",
    role: "Led the development lifecycle — architecture, delivery coordination, and Android/iOS release support.",
    impact:
      "Production multi-tenant mobile product with offline and online clock-in/out beyond always-online assumptions.",
  },
  {
    name: "Nefronix IoT Solutions Website",
    problem:
      "The company needed a site that communicated product value clearly and converted more visitors into conversations.",
    role: "Owned the redesign end to end — UX direction, Next.js + TypeScript build, and conversion flow.",
    impact:
      "Cleaner multi-page structure, stronger SEO content, and appointment-style lead capture for investor credibility.",
  },
];

export const studioJobs = [
  {
    years: "2023 — 2026",
    company: "Veritas Prime Labs",
    role: "Senior Full Stack Developer",
    blurb:
      "Led enterprise SaaS platforms serving 1000+ employees per tenant; managed 3 engineers across Prime Time Tracking and Overtime; owned architecture, releases, and SQL performance work.",
    skills: [
      "Tech Lead",
      "React.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Workflow Engine",
      "Docker",
      "Kubernetes",
      "SAP",
    ],
  },
  {
    years: "2022 — 2023",
    company: "Next Quarter",
    role: "React Developer",
    blurb:
      "Built dashboard components with React and Material-UI, data visualization with Highcharts, and org-hierarchy views with the Balkan library.",
    skills: ["React.js", "Highcharts", "Material UI", "Webpack", "Balkan Org Chart"],
  },
  {
    years: "2021 — 2022",
    company: "Trustt",
    role: "Full Stack Web Developer",
    blurb:
      "Built a loan-lending platform from the ground up — lending and retailer sites in Next.js, a retailer portal on Appwrite, and a customer-service dashboard.",
    skills: [
      "Next.js",
      "Appwrite",
      "Node.js",
      "Theme UI",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    years: "2021",
    company: "Wipro",
    role: "Project Engineer",
    blurb:
      "Enterprise identity and access operations for a major cyber-security client, across globally distributed teams.",
    skills: ["Identity Access", "Operations", "Enterprise Support"],
  },
];

export const studioServices = [
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
];

export const studioPages = [
  "studio",
  "about",
  "products",
  "work",
  "services",
  "thanks",
] as const;

export type StudioPage = (typeof studioPages)[number] | "detail";

export const studioLabels = [
  "STUDIO",
  "ABOUT",
  "PRODUCTS",
  "WORK",
  "SERVICES",
  "THANKS",
];
