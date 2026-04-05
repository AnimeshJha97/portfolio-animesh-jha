"use client";
import CodeSection from "@/components/CodeSection";
import PageShell from "@/components/PageShell";
import SkillBox from "@/components/SkillBox";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

const workData = [
    {
      name: "Veritas Prime Labs",
      year: {
        from: "10/2023",
        to: "Present",
      },
      subTitle: "Senior Full Stack Developer",
      points: [
        "Leading development of enterprise SaaS platforms serving organizations with 1000+ employees per tenant.",
        "Managing a team of 3 engineers across Prime Time Tracking and Overtime platforms.",
        "Designing system architecture and selecting technology stack for new products.",
        "Conducting technical interviews, mentoring engineers, and contributing to performance reviews and promotion recommendations.",
        "Reviewing merge requests, enforcing coding standards, and managing application releases and deployment cycles.",
        "Collaborating with stakeholders and enterprise clients to translate requirements into scalable solutions.",
        "Improving backend performance through SQL query restructuring, indexing, and production-focused optimization.",
        "Implementing containerized deployments using Docker and Kubernetes.",
      ],
      skills: [
        "Tech Lead",
        "React.js",
        "Node.js",
        "MongoDB",
        "MySQL",
        "Workflow Engine",
        "Docker",
        "Kubernetes",
        "Jira",
        "Github",
        "SAP",
      ],
    },
    {
      name: "Next Quarter (formerly Forecast Era)",
      year: {
        from: "11/2022",
        to: "07/2023",
      },
      subTitle: "React Developer",
      points: [
        "Developed React.js components for the dashboard product, utilizing Material-UI.",
        "Created tables and various types of charts for data visualization using the Highcharts library.",
        "Implemented the Balkan library to represent organization hierarchy in the product.",
        "Worked closely with Jira and GitHub for bug tracking, code patching, and release management.",
      ],
      skills: [
        "React.js",
        "Highcharts",
        "Material UI",
        "Jira",
        "Github",
        "Webpack",
        "Balkan Org Chart",
      ],
    },
    {
      name: "Trustt (formerly Novopay)",
      year: {
        from: "08/2021",
        to: "10/2022",
      },
      subTitle: "Full Stack Web Developer",
      points: [
        "Contributed to the development and construction of the Loan Lending platform, starting from the ground up.",
        "Developed the lending and retailer website using Next.js, Redux, Theme UI, and Strapi for content management.",
        "Built a retailer portal to track leads, borrowers, and commissions using Next.js and Appwrite.",
        "Designed and developed a customer service dashboard to manage and visualize customer loan data.",
        "Worked on Microsoft Adaptive Cards integration with Next.js and React Native for the Budibase low-code platform.",
      ],
      skills: [
        "Next.js",
        "Appwrite",
        "Node.js",
        "Theme UI",
        "Tailwind CSS",
        "Docker",
        "Github",
        "React Native",
        "Microsoft's Adaptive Cards",
      ],
    },
    {
      name: "Wipro",
      year: {
        from: "03/2021",
        to: "08/2021",
      },
      subTitle: "Project Engineer",
      points: [
        "Worked on a critical project for a prominent client in the Cyber Security and Risk Management sector.",
        "Managed employee user IDs, access levels, and shared group memberships for the client organization.",
        "Collaborated with stakeholders across globally distributed teams supporting enterprise access operations.",
      ],
      skills: ["Identity Access", "Operations", "Enterprise Support"],
    },
  ];

const getReveal = (index: number) => ({
  initial: { opacity: 0, x: index % 2 === 0 ? -44 : 44, y: 18 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: "easeOut" },
});

const Experience = () => {
  const [selectedWork, setSelectedWork] = useState(workData[0].name);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const leadershipStats = useMemo(
    () => [
      {
        label: "Current Role",
        value: "Senior Full Stack Developer",
      },
      {
        label: "Team Scope",
        value: "3 Engineers",
      },
      {
        label: "Focus",
        value: "Enterprise SaaS and multi-tenant systems",
      },
    ],
    []
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          const workName = Object.keys(sectionRefs.current).find(
            (name) => sectionRefs.current[name] === entry.target
          );

          if (workName) {
            setSelectedWork(workName);
          }
        }
      });
    }, observerOptions);

    Object.keys(sectionRefs.current).forEach((name) => {
      const currentSectionRef = sectionRefs.current[name];
      if (currentSectionRef) {
        observer.observe(currentSectionRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleWorkClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    workName: string
  ) => {
    e.preventDefault();
    setSelectedWork(workName);

    const selectedSection = sectionRefs.current[workName];

    if (selectedSection) {
      selectedSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <PageShell
      pageNo="02"
      title="Experience"
      currentPage={2}
      prevPage={1}
      nextPage={3}
      prevHref="/"
      nextHref="/Projects"
      containerClassName="relative flex min-h-screen select-none flex-col items-center justify-start px-6 pb-16 pt-24 duration-300 md:px-[108px] md:pt-28 lg:px-[132px] lg:pb-10 xl:pl-[220px]"
      contentClassName="relative z-[2] mt-6 flex w-full max-w-[1640px] flex-col gap-10 text-textLight"
      mobileMenuContent={(closeMenu) => (
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Jump To Company
            </p>
            <p className="text-xs leading-6 text-textLight">
              Open a company directly and jump to its section.
            </p>
          </div>
          <div className="grid gap-3">
            {workData.map((work) => (
              <button
                key={work.name}
                type="button"
                className={
                  selectedWork === work.name
                    ? "rounded-[18px] border border-primary/35 bg-primary/10 px-4 py-3 text-left"
                    : "rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
                }
                onClick={(e) => {
                  handleWorkClick(
                    e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
                    work.name
                  );
                  closeMenu();
                }}
              >
                <p className="text-xs font-medium text-textWhite sm:text-sm">
                  {work.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-textLight">
                  {work.year.from} - {work.year.to}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    >
      <section className="grid gap-6 lg:grid-cols-[0.96fr_1.12fr] lg:items-start">
        <div className="grid gap-4 lg:hidden">
          <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(160deg,rgba(12,23,42,0.92),rgba(17,25,40,0.82))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <CodeSection
              tag="title"
              className="flex flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              <div className="space-y-3">
                <p className="text-xs font-medium text-textWhite sm:text-sm md:text-base">
                  Work Experience
                </p>
                <p className="text-xs leading-6 text-textLight md:text-sm">
                  Senior-level product and platform work across enterprise HR,
                  finance, and consulting environments, with increasing
                  ownership in architecture and team leadership.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {leadershipStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-textWhite">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </CodeSection>
          </div>
        </div>
        <div className="hidden lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-8.5rem)]">
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,rgba(12,23,42,0.92),rgba(17,25,40,0.82))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:p-8 lg:flex lg:h-full lg:flex-col">
            <CodeSection
              tag="title"
              className="flex h-full flex-col gap-6"
              innerClassName="mt-2 flex min-h-0 flex-1 flex-col gap-6"
            >
              <div className="space-y-3">
                <p className="text-xs font-medium text-textWhite sm:text-sm md:text-base lg:text-md">
                  Work Experience
                </p>
                <p className="text-xs leading-6 text-textLight md:text-sm">
                  Senior-level product and platform work across enterprise HR,
                  finance, and consulting environments, with increasing
                  ownership in architecture and team leadership.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {leadershipStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/10 bg-black/20 p-4"
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
              <div className="grid gap-3 sm:grid-cols-2 lg:min-h-0 lg:flex-1 lg:auto-rows-max lg:grid-cols-1 lg:content-start lg:overflow-y-auto lg:pr-1">
                {workData.map((work) => (
                  <button
                    key={work.name}
                    className={
                      selectedWork === work.name
                        ? "rounded-[20px] border border-primary/40 bg-primary/12 px-4 py-4 text-left transition-colors duration-300"
                        : "rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                    }
                    onClick={(e) =>
                      handleWorkClick(
                        e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
                        work.name
                      )
                    }
                  >
                    <p className="text-xs font-medium text-textWhite md:text-sm">
                      {work.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-textLight">
                      {work.year.from} - {work.year.to}
                    </p>
                  </button>
                ))}
              </div>
            </CodeSection>
          </div>
        </div>

        <div className="grid gap-6 lg:max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto lg:pr-2">
          {workData.map((work, i) => (
            <motion.section
              key={work.name}
              {...getReveal(i)}
              transition={{ ...getReveal(i).transition, delay: i * 0.06 }}
              ref={(node) => {
                sectionRefs.current[work.name] = node;
              }}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,rgba(12,23,42,0.84),rgba(9,13,24,0.92))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)] md:p-8"
            >
              <CodeSection
                tag="experience"
                className="flex flex-col gap-5"
                innerClassName="mt-2 flex flex-col gap-6"
              >
                <div className="grid gap-4 lg:grid-cols-[180px_1fr]">
                  <div className="pt-1">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
                      Timeline
                    </p>
                    <p className="mt-3 text-xs leading-6 text-textWhite md:text-sm">
                      {work.year.from}
                      <span className="mx-2 text-textLight">to</span>
                      {work.year.to}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-textWhite md:text-xl lg:text-2xl">
                      {work.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-textLight md:tracking-[0.18em] lg:text-sm lg:tracking-[0.22em]">
                      {work.subTitle}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  {work.points.map((point, pointIndex: number) => (
                    <div key={pointIndex} className="flex items-start gap-4">
                      <div className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <p className="flex-1 text-xs leading-6 text-textLight md:text-sm">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {work.skills.map((skill, skillIndex) => (
                    <SkillBox
                      key={skillIndex}
                      keyParam={skillIndex}
                      skill={skill}
                    />
                  ))}
                </div>
              </CodeSection>
            </motion.section>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default Experience;
