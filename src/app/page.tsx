"use client";
import CodeSection from "@/components/CodeSection";
import PageShell from "@/components/PageShell";
import { intro } from "@/data/intro";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const roleTitle = "Senior Full Stack Developer | Full Stack + AI Product Engineer";

const heroCtas = [
  {
    label: "Download Resume",
    href: "/Resume_AnimeshJha.pdf",
    icon: FiDownload,
    download: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/AnimeshJha97",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/animeshjha97/",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:animeshjha.dev@gmail.com",
    icon: FiMail,
  },
];

const focusAreas = [
  {
    label: "Most Recent Role",
    value:
      "Senior Full Stack Developer at Veritas Prime Labs, followed by AI product builds through Arkion Labs",
  },
  {
    label: "Primary Strength",
    value:
      "SaaS platforms, backend APIs, multi-tenant systems, and AI product engineering",
  },
  {
    label: "Operating Style",
    value: "Ship with clarity, mentor with intent, and design for long-term maintainability",
  },
];

const highlights = [
  {
    title: "Employee Platform",
    value: "100K+",
    description: "Employee data platform experience across enterprise workflows.",
  },
  {
    title: "Managers Supported",
    value: "30K+",
    description: "Manager workflows supported through scalable enterprise systems.",
  },
  {
    title: "Tenant Scale",
    value: "1K+",
    description: "Users supported per tenant with clean data and workflow isolation.",
  },
  {
    title: "Mentorship",
    value: "5+ Engineers",
    description: "Engineers mentored through reviews, releases, and delivery decisions.",
  },
];

const corePrinciples = [
  "Build systems that stay readable as teams, tenants, and workflows grow in complexity.",
  "Treat performance as product quality, not an afterthought added near release.",
  "Use technical leadership to create clarity, stronger decisions, and calmer delivery.",
];

const collaborationSummary = [
  {
    label: "Currently Building",
    value:
      "Founder-led AI products through Arkion Labs, with a focus on product engineering, backend systems, and practical AI workflows.",
  },
  {
    label: "Best At",
    value:
      "Taking products from architecture to production while improving reliability, performance, and maintainability.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Home() {
  return (
    <PageShell
      pageNo="01"
      title="Intro"
      currentPage={1}
      prevPage={0}
      nextPage={2}
      nextHref="/Experience"
      containerClassName="relative flex min-h-screen select-none flex-col items-center justify-start px-4 pb-16 pt-24 duration-300 sm:px-6 md:px-8 md:pt-28 lg:px-12 lg:pb-20 xl:px-16 xl:pl-[300px]"
      contentClassName="relative z-[2] mt-6 flex w-full max-w-[1640px] flex-col gap-8 text-textLight md:gap-10"
    >
      <motion.section
        {...reveal}
        className="grid items-stretch gap-6 2xl:grid-cols-[1.32fr_0.88fr]"
      >
        <div className="theme-hero-surface relative overflow-hidden rounded-[30px] border shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="theme-overlay-glow absolute inset-0" />
          <CodeSection
            tag="title"
            className="relative flex h-full flex-col gap-6 p-6 md:p-8 lg:p-10"
            innerClassName="mt-2 flex flex-col gap-6"
          >
            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-[0.4em] text-primary/80">
                Character-first portfolio
              </p>
              <div className="space-y-2">
                <h1 className="text-[1.7rem] font-semibold leading-none text-textWhite sm:text-[2.1rem] md:text-[2.8rem] lg:text-[3.7rem] xl:text-[4.5rem]">
                  Animesh Jha
                </h1>
                <h2 className="max-w-3xl text-sm font-medium leading-6 text-textWhite sm:text-base md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                  {roleTitle}
                </h2>
              </div>
              <p className="max-w-2xl text-xs leading-6 text-textLight md:text-sm">
                I build scalable SaaS platforms, backend APIs, multi-tenant
                systems, and AI-powered products using React, Next.js, Node.js,
                TypeScript, MongoDB, and SQL. My most recent enterprise role
                was leading SaaS delivery at Veritas Prime Labs, and I now
                build AI-powered products through Arkion Labs, my independent
                product studio.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroCtas.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    download={item.download}
                    className="theme-chip inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold text-textWhite transition duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              {["SaaS Platforms", "Backend APIs", "AI Products", "Multi-tenant Systems"].map(
                (item) => (
                  <span
                    key={item}
                    className="theme-chip rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-primary sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="theme-dark-panel rounded-[22px] border p-4 backdrop-blur-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-textLight/80">
                    {item.title}
                  </p>
                  <p className="mt-3 text-base font-semibold text-textWhite sm:text-xl md:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[11px] leading-5 text-textLight md:text-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </CodeSection>
        </div>

        <div className="grid gap-6">
          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            className="theme-card-surface overflow-hidden rounded-[30px] border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <CodeSection
              tag="about"
              className="flex h-full flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              {intro.about.slice(0, 2).map((item) => (
                <p key={item.para} className="text-sm leading-7 md:text-base">
                  {item.para}
                </p>
              ))}
            </CodeSection>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.18 }}
            className="theme-card-alt overflow-hidden rounded-[30px] border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <CodeSection
              tag="focus"
              className="flex h-full flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              {focusAreas.map((item) => (
                <div
                  key={item.label}
                  className="theme-subtle-panel rounded-[20px] border p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-textWhite md:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </CodeSection>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.05 }}
        className="grid gap-6 2xl:grid-cols-[0.96fr_1.14fr]"
      >
        <div className="theme-band-surface overflow-hidden rounded-[30px] border p-6 md:p-8">
          <CodeSection
            tag="chapter"
            className="flex h-full flex-col gap-4"
            innerClassName="mt-2 flex flex-col gap-4"
          >
            <p className="text-sm leading-7 md:text-base">
              I work best where systems, product thinking, and execution all
              have to move together. That usually means backend-heavy products
              with real operational complexity, high visibility, and no room
              for fragile architecture.
            </p>
            <p className="text-sm leading-7 md:text-base">
              Across engineering roles, I have consistently gravitated toward
              the parts of the product that need structure: architecture,
              performance, release confidence, mentoring, and the details that
              help teams ship with less friction.
            </p>
          </CodeSection>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {corePrinciples.map((note, index) => (
            <motion.div
              key={note}
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 + index * 0.08 }}
              className="theme-card-alt overflow-hidden rounded-[28px] border p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary/75">
                Core Principle 0{index + 1}
              </p>
              <p className="mt-4 text-sm leading-7 text-textWhite md:text-base">
                {note}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.08 }}
        className="theme-panel-highlight overflow-hidden rounded-[34px] border p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] md:p-8"
      >
        <CodeSection
          tag="next"
          className="flex flex-col gap-5"
          innerClassName="mt-2 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-textWhite sm:text-xl md:text-2xl">
              Built for products that need both engineering depth and ownership.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-textLight md:text-base">
              My experience is strongest in teams that need someone to think
              beyond feature delivery, whether that means platform design,
              production stability, mentoring, or improving how the team ships.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {collaborationSummary.map((item) => (
              <div
                key={item.label}
                className="theme-dark-panel rounded-[24px] border p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-textWhite md:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </CodeSection>
      </motion.section>
    </PageShell>
  );
}
