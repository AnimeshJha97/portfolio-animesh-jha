import type { CaseStudy, Job, LeadCase } from "./types";

export const workLabels = {
  featured: "★ FEATURED CASE STUDY",
  experience: "<experience>",
} as const;

export const leadCase = {
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
} as const satisfies LeadCase;

export const caseStudies = [
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
] as const satisfies readonly CaseStudy[];

export const jobs = [
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
] as const satisfies readonly Job[];
