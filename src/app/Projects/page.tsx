"use client";
import CodeSection from "@/components/CodeSection";
import PageShell from "@/components/PageShell";
import SkillBox from "@/components/SkillBox";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectCaseStudy = {
  id: string;
  name: string;
  company: string;
  companyNote?: string;
  projectType: string;
  problem: string;
  role: string;
  technicalWork: string[];
  architecture: string[];
  impact: string[];
  currentStatus?: string;
  links?: ProjectLink[];
  skills: string[];
};

const projectData: ProjectCaseStudy[] = [
  {
    id: "p3kit",
    name: "P3Kit",
    company: "Arkion Labs",
    companyNote: "Built through Arkion Labs, my independent product studio.",
    projectType: "AI Product",
    problem:
      "Job seekers often know what they want to improve, but they do not have a structured way to convert a resume into focused interview prep, practice plans, and progress tracking.",
    role:
      "I designed and built the product end to end, from product direction and data model design to the app experience, AI workflows, and deployment decisions.",
    technicalWork: [
      "Built resume upload, AI kit generation, dashboard flows, and structured progress tracking.",
      "Integrated LLM workflows for personalized interview preparation using OpenAI and Gemini-style prompt pipelines.",
      "Implemented authenticated user flows, persistent project state, and MongoDB-backed storage for generated prep assets.",
    ],
    architecture: [
      "Designed the platform as a Next.js and TypeScript application with modular AI orchestration and persistent user-specific prep sessions.",
      "Structured data storage so generated kits, progress state, and interview artifacts could be revisited and extended over time.",
    ],
    impact: [
      "Demonstrated practical AI product engineering beyond demos by tying model output to a real user workflow.",
      "Strengthened my product thinking around AI usefulness, progress loops, and user-facing generation quality.",
    ],
    currentStatus:
      "Active product build and iteration focused on stronger prep flows and better personalized outputs.",
    skills: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "OpenAI",
      "Gemini",
      "AI Product Engineering",
    ],
  },
  {
    id: "ledeqor",
    name: "Ledeqor",
    company: "Arkion Labs",
    companyNote: "Built through Arkion Labs, my independent product studio.",
    projectType: "AI Product",
    problem:
      "Most career-upgrade platforms focus on passive content consumption instead of project-based learning, progress visibility, and feedback on how well someone is improving.",
    role:
      "I defined the product shape, learning flow, backend structure, and AI-assisted feedback direction for the platform.",
    technicalWork: [
      "Designed course progression, capstone tracking, and MongoDB-backed learning flow management.",
      "Built the foundation for AI interview answer analysis and career-upgrade tooling connected to learner progress.",
      "Mapped product flows for course content, capstone milestones, and long-term career asset direction.",
    ],
    architecture: [
      "Structured the system around learning entities, progress checkpoints, and assessment artifacts so users can move through guided programs instead of static pages.",
      "Designed the platform to support future AI-driven feedback layers without tightly coupling evaluation logic to core learning data.",
    ],
    impact: [
      "Expanded my product engineering work into education, evaluation, and user progress systems.",
      "Created a stronger portfolio example of building long-running user journeys instead of one-off interfaces.",
    ],
    currentStatus:
      "In active product development with emphasis on learning structure, progress clarity, and AI-assisted evaluation.",
    skills: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "AI Evaluation",
      "Learning Systems",
      "Product Design",
    ],
  },
  {
    id: "frontmate",
    name: "FrontMate",
    company: "Arkion Labs",
    companyNote: "Built through Arkion Labs, my independent product studio.",
    projectType: "AI Product",
    problem:
      "Small businesses need round-the-clock first-response support, but traditional receptionist workflows are manual, inconsistent, and difficult to scale across multiple clients.",
    role:
      "I built the multi-tenant backend and conversation flow design, focusing on AI replies, tenant isolation, booking logic, and reliable message handling.",
    technicalWork: [
      "Implemented WhatsApp webhook handling, Gemini-powered reply generation, and persistent conversation storage.",
      "Built booking-oriented message flows so businesses can move users from inquiry to structured action.",
      "Created tenant-aware request handling to support multiple businesses without cross-tenant data leakage.",
    ],
    architecture: [
      "Designed the platform as a multi-tenant AI receptionist system with tenant database isolation and webhook-driven event processing.",
      "Separated conversation state, booking flow logic, and tenant configuration so the product can scale operationally as more businesses are onboarded.",
    ],
    impact: [
      "Turned AI response generation into a business workflow product instead of a standalone chatbot demo.",
      "Strengthened my experience in multi-tenant systems, webhook architecture, and AI-assisted operational tooling.",
    ],
    currentStatus:
      "Active product build focused on tenant reliability, better conversation outcomes, and smoother onboarding flows.",
    skills: [
      "Next.js",
      "Node.js",
      "WhatsApp Webhooks",
      "Gemini",
      "Multi-tenant Architecture",
      "Conversation Storage",
    ],
  },
  {
    id: "overtime",
    name: "Overtime Management Platform",
    company: "Veritas Prime Labs",
    projectType: "Enterprise SaaS",
    problem:
      "Global enterprise workforce teams needed a configurable overtime platform that could support tenant-specific rules, approval chains, and data synchronization across HR systems.",
    role:
      "I led architecture and backend-heavy implementation decisions for a multi-tenant overtime SaaS platform used by enterprise workforces.",
    technicalWork: [
      "Implemented SAP SuccessFactors SSO, tenant identification, and dynamic database connection logic.",
      "Built configurable workflow behavior for multi-level approvals and role-based access.",
      "Optimized heavy data flows using pagination, batching, schedulers, and MongoDB indexing.",
    ],
    architecture: [
      "Designed tenant isolation using a primary configuration database plus tenant-specific databases.",
      "Built the approval workflow engine and synchronization model around configurable enterprise rules and multi-timezone workforce operations.",
    ],
    impact: [
      "Created a platform architecture that could support multiple organizations with cleaner separation of data and workflow behavior.",
      "Improved reliability of synchronization-heavy enterprise workflows under growing data volume.",
    ],
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "SuccessFactors",
      "Workflow Engine",
      "Multi-tenant Architecture",
    ],
  },
  {
    id: "prime-time",
    name: "Prime Time Tracking Mobile Application",
    company: "Veritas Prime Labs",
    projectType: "Enterprise Mobile",
    problem:
      "Enterprise field and remote workforces needed accurate mobile time capture, even in low-connectivity conditions, while still keeping audit workflows and releases manageable for clients.",
    role:
      "I led the development lifecycle across architecture, delivery coordination, and release support for the mobile time-tracking product.",
    technicalWork: [
      "Built offline and online clock-in and clock-out behavior for remote workforce scenarios.",
      "Supported release delivery for Android and iOS while coordinating with enterprise stakeholders and offshore teams.",
      "Worked on operational workflows around auditability, role-driven usage, and enterprise deployment readiness.",
    ],
    architecture: [
      "Implemented a multi-tenant mobile architecture so multiple organizations could use the same product with isolated behavior and configuration.",
      "Designed the system around mobile reliability first, with a strong focus on sync behavior and enterprise delivery constraints.",
    ],
    impact: [
      "Delivered a production mobile product that supported enterprise time-tracking use cases beyond standard always-online assumptions.",
      "Expanded ownership from web platforms into mobile product delivery and release operations.",
    ],
    skills: [
      "React Native",
      "Node.js",
      "SuccessFactors API",
      "Multi-tenant Architecture",
      "Mobile Release Management",
    ],
  },
  {
    id: "mass-changes",
    name: "Mass Changes Platform",
    company: "Veritas Prime Labs",
    projectType: "Enterprise Data Platform",
    problem:
      "Peak HR review cycles created performance pressure on a bulk-update platform handling high-volume employee and manager operations, making latency and stability business-critical.",
    role:
      "I focused on performance engineering across backend queries, frontend responsiveness, and infrastructure-aware stability improvements.",
    technicalWork: [
      "Rewrote complex SQL queries and introduced indexing strategies to improve execution time under heavy load.",
      "Refactored backend and frontend code to reduce latency during peak usage periods.",
      "Introduced stress testing practices to surface bottlenecks before monthly spike windows.",
    ],
    architecture: [
      "Worked within SAP BTP infrastructure to improve multi-instance deployment behavior, load balancing, and high-volume synchronization handling.",
      "Approached the platform as a capacity and reliability problem, not just a feature-delivery problem.",
    ],
    impact: [
      "Helped stabilize a platform supporting 100K+ employees and 30K+ managers during high-pressure review cycles.",
      "Improved confidence in peak-period performance through practical query tuning and infrastructure-aware changes.",
    ],
    skills: [
      "React",
      "Node.js",
      "MySQL",
      "SAP BTP",
      "Performance Optimization",
      "Stress Testing",
    ],
  },
  {
    id: "nefronix",
    name: "Nefronix IoT Solutions Website",
    company: "Freelance / Consulting",
    projectType: "Consulting Build",
    problem:
      "The company needed a site that could communicate its product value more clearly, improve credibility with investors, and convert more visitors into conversations.",
    role:
      "I owned the redesign and redevelopment from UX direction to implementation, shaping both the site structure and the conversion flow.",
    technicalWork: [
      "Built the site using Next.js and TypeScript with a cleaner multi-page structure and stronger responsive behavior.",
      "Reworked SEO-oriented content structure and call-to-action flows, including appointment-style lead capture.",
      "Designed a lightweight data-handling approach that matched the client’s budget constraints without sacrificing usability.",
    ],
    architecture: [
      "Moved the site from a single long page to a more structured product narrative with clearer information architecture.",
      "Designed the site around conversion flow, performance, and maintainability instead of purely visual refresh work.",
    ],
    impact: [
      "Improved the site’s ability to present product value and guide users toward contact actions.",
      "Created a stronger consulting example of owning both technical execution and business-facing UX outcomes.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "SEO Optimization",
      "UX Redesign",
      "Conversion Strategy",
    ],
  },
];

const getReveal = (index: number) => ({
  initial: { opacity: 0, x: index % 2 === 0 ? -44 : 44, y: 18 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.65, ease: "easeOut" },
});

const sectionMeta = [
  {
    label: "Project Mix",
    value: "AI products, enterprise SaaS, mobile systems, and consulting builds",
  },
  {
    label: "Best Signal",
    value: "Architecture ownership, backend depth, and product-oriented execution",
  },
  {
    label: "Current Direction",
    value: "AI product engineering through Arkion Labs alongside enterprise delivery depth",
  },
];

const Projects = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [selectedProject, setSelectedProject] = useState(projectData[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !entry.target) {
            return;
          }

          const projectName = Object.keys(sectionRefs.current).find(
            (name) => sectionRefs.current[name] === entry.target
          );

          if (projectName) {
            setSelectedProject(projectName);
          }
        });
      },
      {
        root: null,
        rootMargin: "-80px",
        threshold: 0.45,
      }
    );

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

  const handleProjectClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    projectId: string
  ) => {
    e.preventDefault();
    setSelectedProject(projectId);

    const selectedSection = sectionRefs.current[projectId];

    if (selectedSection) {
      selectedSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <PageShell
      pageNo="03"
      title="Projects"
      currentPage={3}
      prevPage={2}
      nextPage={4}
      prevHref="/Experience"
      nextHref="/Thanks"
      containerClassName="relative flex min-h-screen select-none flex-col items-center justify-start px-4 pb-16 pt-24 duration-300 sm:px-6 md:px-8 md:pt-28 lg:px-12 lg:pb-10 xl:px-16 xl:pl-[220px]"
      contentClassName="relative z-[2] mt-6 flex w-full max-w-[1640px] flex-col gap-8 text-textLight md:gap-10"
      mobileMenuContent={(closeMenu) => (
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Jump To Project
            </p>
            <p className="text-sm leading-7 text-textLight md:text-base">
              Open a project directly from the menu instead of scanning the full
              case study stack.
            </p>
          </div>
          <div className="grid gap-3">
            {projectData.map((project) => (
              <button
                key={project.id}
                type="button"
                className={
                  selectedProject === project.id
                    ? "theme-chip rounded-[18px] border px-4 py-3 text-left"
                    : "theme-subtle-panel rounded-[18px] border px-4 py-3 text-left"
                }
                onClick={(e) => {
                  handleProjectClick(
                    e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
                    project.id
                  );
                  closeMenu();
                }}
              >
                <p className="text-sm font-medium text-textWhite">
                  {project.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-textLight">
                  {project.company}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    >
      <section className="grid gap-6 xl:grid-cols-[0.96fr_1.12fr] xl:items-start">
        <div className="grid gap-4 xl:hidden">
          <div className="theme-card-surface overflow-hidden rounded-[26px] border p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <CodeSection
              tag="title"
              className="flex flex-col gap-4"
              innerClassName="mt-2 flex flex-col gap-4"
            >
              <div className="space-y-3">
                <p className="text-sm font-medium text-textWhite md:text-base">
                  Selected Case Studies
                </p>
                <p className="text-sm leading-7 text-textLight md:text-base">
                  A curated mix of AI product builds, enterprise platforms, and
                  consulting work focused on architecture ownership, technical
                  depth, and measurable delivery outcomes.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {sectionMeta.map((item) => (
                  <div
                    key={item.label}
                    className="theme-dark-panel rounded-[18px] border p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-textWhite">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </CodeSection>
          </div>
        </div>
        <div className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
          <div className="theme-card-surface overflow-hidden rounded-[30px] border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:p-8 xl:flex xl:flex-col">
            <CodeSection
              tag="title"
              className="flex h-full flex-col gap-6"
              innerClassName="mt-2 flex min-h-0 flex-1 flex-col gap-6"
            >
              <div className="space-y-3">
                <p className="text-sm font-medium text-textWhite md:text-base lg:text-md">
                  Selected Case Studies
                </p>
                <p className="text-sm leading-7 text-textLight md:text-base">
                  A curated mix of AI product builds, enterprise platforms, and
                  consulting work focused on architecture ownership, technical
                  depth, and measurable delivery outcomes.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {sectionMeta.map((item) => (
                  <div
                    key={item.label}
                    className="theme-dark-panel rounded-[22px] border p-4"
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
              <div className="grid gap-3 sm:grid-cols-2 xl:min-h-0 xl:flex-1 xl:auto-rows-max xl:grid-cols-1 xl:content-start xl:overflow-y-auto xl:pr-1">
                {projectData.map((project) => (
                  <button
                    key={project.id}
                    className={
                      selectedProject === project.id
                        ? "theme-chip rounded-[20px] border px-4 py-4 text-left transition-colors duration-300"
                        : "theme-subtle-panel rounded-[20px] border px-4 py-4 text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                    }
                    onClick={(e) =>
                      handleProjectClick(
                        e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
                        project.id
                      )
                    }
                  >
                    <p className="text-sm font-medium text-textWhite md:text-base">
                      {project.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-textLight">
                      {project.company}
                    </p>
                  </button>
                ))}
              </div>
            </CodeSection>
          </div>
        </div>

        <div className="grid gap-6 xl:pr-2">
          {projectData.map((project, i) => (
            <motion.section
              key={project.id}
              {...getReveal(i)}
              transition={{ ...getReveal(i).transition, delay: i * 0.05 }}
              ref={(node) => {
                sectionRefs.current[project.id] = node;
              }}
              className="theme-card-strong overflow-hidden rounded-[30px] border p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)] md:p-8"
            >
              <CodeSection
                tag="project"
                className="flex flex-col gap-5"
                innerClassName="mt-2 flex flex-col gap-6"
              >
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-textWhite md:text-xl lg:text-2xl">
                      {project.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-textLight md:tracking-[0.2em] lg:text-sm lg:tracking-[0.22em]">
                      {project.company}
                    </p>
                    {project.companyNote ? (
                      <p className="text-sm leading-7 text-textLight md:text-base">
                        {project.companyNote}
                      </p>
                    ) : null}
                  </div>
                  <div className="theme-subtle-panel hidden rounded-[20px] border px-4 py-3 text-xs uppercase tracking-[0.22em] text-primary lg:block">
                    {project.projectType}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="theme-subtle-panel rounded-[22px] border p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                      Problem
                    </p>
                    <p className="mt-3 text-sm leading-7 text-textWhite md:text-base">
                      {project.problem}
                    </p>
                  </div>
                  <div className="theme-subtle-panel rounded-[22px] border p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                      My Role
                    </p>
                    <p className="mt-3 text-sm leading-7 text-textWhite md:text-base">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="theme-dark-panel rounded-[22px] border p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                      Technical Work
                    </p>
                    <div className="mt-3 grid gap-3">
                      {project.technicalWork.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <p className="flex-1 text-sm leading-7 text-textWhite md:text-base">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="theme-dark-panel rounded-[22px] border p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                      Architecture / System Design
                    </p>
                    <div className="mt-3 grid gap-3">
                      {project.architecture.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <p className="flex-1 text-sm leading-7 text-textWhite md:text-base">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="theme-subtle-panel rounded-[22px] border p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                      Impact
                    </p>
                    <div className="mt-3 grid gap-3">
                      {project.impact.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <p className="flex-1 text-sm leading-7 text-textWhite md:text-base">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.currentStatus || (project.links && project.links.length > 0) ? (
                    <div className="grid gap-4">
                      {project.currentStatus ? (
                        <div className="theme-subtle-panel rounded-[22px] border p-4">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                            Current Status
                          </p>
                          <p className="mt-3 text-sm leading-7 text-textWhite md:text-base">
                            {project.currentStatus}
                          </p>
                        </div>
                      ) : null}
                      {project.links && project.links.length > 0 ? (
                        <div className="theme-subtle-panel rounded-[22px] border p-4">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                            Links
                          </p>
                          <div className="mt-3 flex flex-wrap gap-3">
                            {project.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="theme-chip rounded-full border px-3 py-2 text-xs font-semibold text-textWhite transition duration-300 hover:border-primary/70 hover:text-primary"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, skillIndex) => (
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

export default Projects;
