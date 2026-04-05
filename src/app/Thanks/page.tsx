"use client";

import CodeSection from "@/components/CodeSection";
import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import Link from "next/link";

const collaborationLanes = [
  {
    title: "Build Products",
    description:
      "Product teams that need a senior engineer to shape architecture, unblock delivery, and ship cleanly across frontend and backend.",
  },
  {
    title: "Lead Teams",
    description:
      "Founders or engineering leads looking for someone who can own systems, mentor developers, and reduce chaos around delivery.",
  },
  {
    title: "Refine Experiences",
    description:
      "Teams with strong products that need sharper UX, faster interfaces, and more thoughtful end-to-end execution.",
  },
];

const collaborationNotes = [
  "I enjoy working where product clarity, technical depth, and design taste all matter at once.",
  "The best collaborations usually start with a problem that feels slightly messy, ambitious, or overdue for simplification.",
  "If the work needs ownership across architecture, shipping, and polish, that is usually where I do my best work.",
];

const nextSteps = [
  {
    label: "Best For",
    value: "Full-time roles, consulting, product builds, or high-impact collaboration",
  },
  {
    label: "Working Style",
    value: "Calm, pragmatic, architecture-minded, and focused on maintainable execution",
  },
];

const reveal = {
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: "easeOut" },
};

export default function ThanksPage() {
  return (
    <PageShell
      pageNo="04"
      title="Thanks"
      currentPage={4}
      prevPage={3}
      nextPage={0}
      prevHref="/Projects"
      containerClassName="relative flex min-h-screen select-none flex-col items-center justify-start px-6 pb-16 pt-24 duration-300 md:px-[108px] md:pt-28 lg:px-[132px] lg:pb-20 xl:pl-[300px]"
      contentClassName="relative z-[2] mt-6 flex w-full max-w-[1640px] flex-col gap-10 text-textLight"
    >
      <motion.section
        {...reveal}
        className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,23,42,0.92),rgba(19,28,49,0.82),rgba(8,12,20,0.94))] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <CodeSection
            tag="thanks"
            className="flex h-full flex-col gap-6 p-6 md:p-8 lg:p-10"
            innerClassName="mt-2 flex flex-col gap-6"
          >
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.32em] text-primary/80">
                Final Chapter
              </p>
              <h1 className="text-[1.8rem] font-semibold leading-none text-textWhite sm:text-[2.3rem] md:text-[3rem] lg:text-[4rem]">
                Thanks for visiting.
              </h1>
              <p className="max-w-3xl text-xs leading-6 text-textLight md:text-sm">
                If the work, craft, and personality of this portfolio felt like
                the kind of energy you want around your product, I would be
                happy to collaborate. I care most about building thoughtful,
                scalable software with enough taste that the final experience
                feels intentional from architecture to interface.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {collaborationLanes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
                    {item.title}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-textWhite md:text-sm">
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
            transition={{ ...reveal.transition, delay: 0.08 }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,rgba(15,24,42,0.9),rgba(10,16,30,0.92))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <CodeSection
              tag="connect"
              className="flex flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              <p className="text-xs leading-6 text-textLight md:text-sm">
                The floating mail icon is still the quickest way to reach me
                from here.
              </p>
              <div className="grid gap-3">
                <Link
                  href="https://www.linkedin.com/in/jha-animesh/"
                  target="_blank"
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-textWhite transition-colors duration-300 hover:border-primary/35 hover:bg-primary/10"
                >
                  Connect on LinkedIn
                </Link>
                <Link
                  href="https://wa.me/918109876429?text=Hi%20Animesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20potential%20opportunity."
                  target="_blank"
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-textWhite transition-colors duration-300 hover:border-primary/35 hover:bg-primary/10"
                >
                  Start on WhatsApp
                </Link>
              </div>
            </CodeSection>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.14 }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,rgba(20,28,48,0.9),rgba(11,17,31,0.88))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <CodeSection
              tag="fit"
              className="flex flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              {nextSteps.map((item) => (
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
        className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]"
      >
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,17,30,0.92),rgba(12,23,42,0.78))] p-6 md:p-8">
          <CodeSection
            tag="note"
            className="flex h-full flex-col gap-4"
            innerClassName="mt-2 flex flex-col gap-4"
          >
            {collaborationNotes.map((note) => (
              <p key={note} className="text-xs leading-6 text-textLight md:text-sm">
                {note}
              </p>
            ))}
          </CodeSection>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,23,42,0.85),rgba(18,24,44,0.78),rgba(8,12,20,0.94))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8">
          <CodeSection
            tag="credits"
            className="flex flex-col gap-5"
            innerClassName="mt-2 flex flex-col gap-5"
          >
            <p className="text-base font-semibold text-textWhite sm:text-xl md:text-2xl">
              The portfolio ends here, but the conversation does not have to.
            </p>
            <p className="max-w-3xl text-xs leading-6 text-textLight md:text-sm">
              Thanks again for taking the time to explore the site. Whether you
              came here as a recruiter, reviewer, founder, or fellow developer,
              I hope it felt like a portfolio with an actual point of view.
            </p>
            <p className="text-xs leading-6 text-textWhite md:text-sm">
              If you want to build something thoughtful together, use the mail
              icon and let&apos;s talk.
            </p>
          </CodeSection>
        </div>
      </motion.section>
    </PageShell>
  );
}
