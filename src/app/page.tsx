"use client";
import CodeSection from "@/components/CodeSection";
import PageShell from "@/components/PageShell";
import { intro } from "@/data/intro";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const roles = [
  "Senior Full Stack Developer",
  "Mobile App Developer",
  "Technical Lead",
  "Backend Architecture Designer",
];

const focusAreas = [
  {
    label: "Current Role",
    value: "Leading enterprise HR and workforce products at Veritas Prime Labs",
  },
  {
    label: "Primary Strength",
    value: "Backend architecture, performance tuning, and scalable SaaS design",
  },
  {
    label: "Operating Style",
    value: "Ship with clarity, mentor with intent, and design for long-term maintainability",
  },
];

const highlights = [
  {
    title: "Enterprise Scale",
    value: "100K+",
    description:
      "Experience optimizing systems built for large employee and manager workflows.",
  },
  {
    title: "Leadership",
    value: "3 Engineers",
    description:
      "Actively leading, mentoring, reviewing, and guiding shipping decisions.",
  },
  {
    title: "Architecture",
    value: "Multi-tenant",
    description:
      "Designing products that isolate tenants, workflows, and enterprise integrations cleanly.",
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
      "Enterprise HR, workflow, and workforce products with strong backend ownership and release responsibility.",
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
      containerClassName="relative flex min-h-screen select-none flex-col items-center justify-start px-6 pb-16 pt-24 duration-300 md:px-[108px] md:pt-28 lg:px-[132px] lg:pb-20 xl:pl-[320px]"
      contentClassName="relative z-[2] mt-6 flex w-full max-w-[1640px] flex-col gap-10 text-textLight"
    >
      <motion.section
        {...reveal}
        className="grid items-stretch gap-6 xl:grid-cols-[1.32fr_0.88fr]"
      >
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,23,42,0.9),rgba(16,27,48,0.82),rgba(31,41,69,0.68))] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(207,173,233,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.12),transparent_30%)]" />
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
                <h1 className="text-[1.7rem] font-semibold leading-none text-textWhite sm:text-[2.2rem] md:text-[3.2rem] lg:text-[4.5rem]">
                  Animesh Jha
                </h1>
                <ReactTyped
                  className="block min-h-[28px] text-xs font-medium text-textWhite sm:min-h-[32px] sm:text-sm md:min-h-[36px] md:text-base lg:text-[1.1rem]"
                  strings={roles}
                  typeSpeed={100}
                  backSpeed={40}
                  loop
                />
              </div>
              <p className="max-w-2xl text-xs leading-6 text-textLight md:text-sm">
                Building enterprise products with strong backend architecture,
                thoughtful leadership, and a cinematic interface that reveals
                itself as you explore.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["MERN Stack", "System Design", "Workflow Engines", "Tech Leadership"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-primary sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="grid gap-4 pt-2 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm"
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
            className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,rgba(12,23,42,0.88),rgba(17,25,40,0.8))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <CodeSection
              tag="about"
              className="flex h-full flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              {intro.about.slice(0, 2).map((item) => (
                <p key={item.para} className="text-xs leading-6 md:text-sm">
                  {item.para}
                </p>
              ))}
            </CodeSection>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.18 }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,rgba(20,28,48,0.9),rgba(11,17,31,0.88))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <CodeSection
              tag="focus"
              className="flex h-full flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              {focusAreas.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-textWhite md:text-sm">
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
        className="grid gap-6 xl:grid-cols-[0.96fr_1.14fr]"
      >
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,17,30,0.92),rgba(12,23,42,0.78))] p-6 md:p-8">
          <CodeSection
            tag="chapter"
            className="flex h-full flex-col gap-4"
            innerClassName="mt-2 flex flex-col gap-4"
          >
            <p className="text-xs leading-6 md:text-sm">
              I work best where systems, product thinking, and execution all
              have to move together. That usually means backend-heavy products
              with real operational complexity, high visibility, and no room
              for fragile architecture.
            </p>
            <p className="text-xs leading-6 md:text-sm">
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
              className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,27,47,0.85),rgba(10,15,26,0.92))] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary/75">
                Core Principle 0{index + 1}
              </p>
              <p className="mt-4 text-xs leading-6 text-textWhite md:text-sm">
                {note}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.08 }}
        className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,23,42,0.82),rgba(18,24,44,0.76),rgba(8,12,20,0.92))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] md:p-8"
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
            <p className="max-w-2xl text-xs leading-6 text-textLight md:text-sm">
              My experience is strongest in teams that need someone to think
              beyond feature delivery, whether that means platform design,
              production stability, mentoring, or improving how the team ships.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {collaborationSummary.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
                  {item.label}
                </p>
                <p className="mt-3 text-xs leading-6 text-textWhite md:text-sm">
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
