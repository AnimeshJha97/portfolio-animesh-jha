"use client";
import CodeSection from "@/components/CodeSection";
import PageShell from "@/components/PageShell";
import SkillBox from "@/components/SkillBox";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

const projectData = [
  {
    id: "project1",
    name: "Overtime Management Platform",
    company: "Veritas Prime",
    points: [
      "Architected a multi-tenant overtime management SaaS platform supporting global enterprise workforce operations.",
      "Designed tenant isolation using a primary configuration database and tenant-specific databases.",
      "Implemented SAP SuccessFactors SSO integration, tenant identification, and dynamic database connection logic.",
      "Built a configurable approval workflow engine supporting multi-level approvals and role-based access for HR, Managers, Approvers, and Admins.",
      "Designed synchronization pipelines with daily employee sync jobs and 6-hour overtime sync jobs for multi-timezone workforces.",
      "Optimized large-scale data loads using pagination, batching, cron-based schedulers, and MongoDB indexing.",
    ],
    features: [],
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
    id: "project2",
    name: "Prime Time Tracking Mobile Application",
    company: "Veritas Prime",
    points: [
      "Led development of an enterprise employee time tracking mobile application.",
      "Designed offline clock-in and clock-out functionality for remote workforce scenarios.",
      "Implemented multi-tenant architecture supporting multiple organizations.",
      "Managed the full development lifecycle from architecture to deployment.",
      "Coordinated directly with enterprise clients and offshore teams, with successful deployment to the Apple App Store and Google Play Store.",
    ],
    features: [],
    skills: [
      "React Native",
      "Node.js",
      "SuccessFactors API",
      "Multi-tenant Architecture",
      "Mobile Release Management",
    ],
  },
  {
    id: "project3",
    name: "eCalibration Platform",
    company: "Veritas Prime",
    points: [
      "Developed a performance review calibration platform for enterprise HR processes.",
      "Enabled managers to standardize employee performance ratings with configurable rating structures.",
      "Integrated SAP SuccessFactors data pipelines and implemented live chat with text and voice messaging.",
    ],
    skills: [
      "SAPUI5",
      "Node.js",
      "SuccessFactors API",
      "Enterprise HR Systems",
    ],
  },
  {
    id: "project4",
    name: "Mass Changes Platform",
    company: "Veritas Prime",
    points: [
      "Contributed to a large-scale HR data management platform handling 100K+ employees and 30K+ managers during peak review cycles.",
      "Optimized backend performance by rewriting complex SQL queries and implementing indexing strategies to improve execution time.",
      "Refactored backend and frontend code to reduce latency and improve high-traffic performance.",
      "Introduced stress testing practices to identify bottlenecks under peak enterprise workloads.",
      "Improved platform scalability with SAP BTP infrastructure, including multi-instance deployment, load balancing, and stronger data synchronization handling.",
      "Built internal admin dashboards and helped stabilize monthly peak usage periods.",
    ],
    features: [],
    skills: [
      "React",
      "Node",
      "MySQL",
      "SAP BTP",
      "Performance Optimization",
      "Stress Testing",
    ],
  },
  {
    id: "project5",
    name: "Account Growth and Forecasting Platform",
    company: "Next Quarter",
    points: [
      "Developed a growth platform using account planning, sales methodologies, data-driven forecasts, and conversational AI.",
      "Integrated React.js and Material UI with Salesforce to enhance UI and functionality.",
      "Collaborated with Salesforce backend and QA teams for feature integration and enhancements.",
      "Used the Balkan Org Chart library with React.js for customizable organization charts and smooth user interactions.",
    ],
    skills: [
      "React.js",
      "Salesforce Integration",
      "Material UI",
      "Highcharts",
      "Balkan Org Chart",
    ],
  },
  {
    id: "project6",
    name: "Loan Lending Audit and Application Monitoring Platform",
    company: "Trustt (formerly Novopay)",
    points: [
      "Contributed to an internal query management platform used by customer support teams to monitor loan application data.",
      "Designed and implemented advanced search functionality to enable efficient query-based retrieval beyond Appwrite's native capabilities.",
      "Built responsive UI components using Next.js and Tailwind CSS and improved operational efficiency through faster data access.",
    ],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Appwrite",
      "Recoil",
      "Search UX",
    ],
  },
  {
    id: "project7",
    name: "Loan Agent Portal and Lending Website",
    company: "Trustt (formerly Novopay)",
    points: [
      "Developed a web portal for loan distributor agents to manage leads, borrowers, and commission tracking.",
      "Built dashboards for loan pipeline and customer information visibility while integrating Strapi and Appwrite backend services.",
      "Contributed to the lending and retailer website with responsive Next.js components, CMS integration, and improved content workflows.",
    ],
    skills: [
      "Next.js",
      "Strapi.io",
      "Appwrite",
      "Theme UI",
      "Budibase",
    ],
  },
  {
    id: "project8",
    name: "Nefronix IoT Solutions Website",
    company: "Freelance / Consulting",
    points: [
      "Led the complete redesign and redevelopment of an IoT solutions company website to improve conversions and investor engagement.",
      "Transformed a single-page website into a structured multi-page product experience with clearer conversion funnels.",
      "Reworked UX, SEO-focused content, and call-to-action flows including appointment booking.",
      "Built the site with Next.js and TypeScript and designed a lightweight data handling strategy to fit budget constraints.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "SEO Optimization",
      "UX Redesign",
      "Conversion Strategy",
    ],
  },
  {
    id: "project9",
    name: "XystCare Skincare Brand Website",
    company: "Freelance / Consulting",
    points: [
      "Managed a website redesign project focused on improving brand positioning for a skincare company.",
      "Coordinated across design, marketing, and development teams while guiding UI/UX direction.",
      "Reviewed marketing content for consistency and worked with Shopify developers to turn business requirements into shipped features.",
    ],
    skills: [
      "Shopify",
      "Project Leadership",
      "UX Strategy",
      "Content Review",
      "Cross-functional Coordination",
    ],
  },
];

const getReveal = (index: number) => ({
  initial: { opacity: 0, x: index % 2 === 0 ? -44 : 44, y: 18 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.65, ease: "easeOut" },
});

const Projects = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [selectedProject, setSelectedProject] = useState(projectData[0].id);
  const projectStats = useMemo(
    () => [
      {
        label: "Enterprise Platforms",
        value: "HR, overtime, calibration, and workforce workflows",
      },
      {
        label: "Product Range",
        value: "Web apps, mobile apps, dashboards, and consulting sites",
      },
      {
        label: "Delivery Style",
        value: "Architecture-minded implementation with strong UX clarity",
      },
    ],
    []
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          const projectName = Object.keys(sectionRefs.current).find(
            (name) => sectionRefs.current[name] === entry.target
          );

          if (projectName) {
            setSelectedProject(projectName);
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
      containerClassName="relative flex min-h-screen select-none flex-col items-center justify-start px-6 pb-16 pt-24 duration-300 md:px-[108px] md:pt-28 lg:px-[132px] lg:pb-10 xl:pl-[220px]"
      contentClassName="relative z-[2] mt-6 flex w-full max-w-[1640px] flex-col gap-10 text-textLight"
      mobileMenuContent={(closeMenu) => (
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Jump To Project
            </p>
            <p className="text-xs leading-6 text-textLight">
              Open a project directly from the menu instead of scanning a long
              stacked layout.
            </p>
          </div>
          <div className="grid gap-3">
            {projectData.map((project) => (
              <button
                key={project.id}
                type="button"
                className={
                  selectedProject === project.id
                    ? "rounded-[18px] border border-primary/35 bg-primary/10 px-4 py-3 text-left"
                    : "rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
                }
                onClick={(e) => {
                  handleProjectClick(
                    e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
                    project.id
                  );
                  closeMenu();
                }}
              >
                <p className="text-xs font-medium text-textWhite sm:text-sm">
                  {project.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-textLight">
                  {project.company}
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
                  Project Experience
                </p>
                <p className="text-xs leading-6 text-textLight md:text-sm">
                  A mix of enterprise platforms, mobile products, dashboards,
                  and consulting work, each focused on making complex workflows
                  easier to understand and operate.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {projectStats.map((item) => (
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
                  Project Experience
                </p>
                <p className="text-xs leading-6 text-textLight md:text-sm">
                  A mix of enterprise platforms, mobile products, dashboards,
                  and consulting work, each focused on making complex workflows
                  easier to understand and operate.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {projectStats.map((item) => (
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
                {projectData.map((project) => (
                  <button
                    key={project.id}
                    className={
                      selectedProject === project.id
                        ? "rounded-[20px] border border-primary/40 bg-primary/12 px-4 py-4 text-left transition-colors duration-300"
                        : "rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                    }
                    onClick={(e) =>
                      handleProjectClick(
                        e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
                        project.id
                      )
                    }
                  >
                    <p className="text-xs font-medium text-textWhite md:text-sm">
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

        <div className="grid gap-6 lg:max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto lg:pr-2">
          {projectData.map((project, i) => (
            <motion.section
              key={project.id}
              {...getReveal(i)}
              transition={{ ...getReveal(i).transition, delay: i * 0.05 }}
              ref={(node) => {
                sectionRefs.current[project.id] = node;
              }}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(160deg,rgba(12,23,42,0.84),rgba(9,13,24,0.92))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)] md:p-8"
            >
              <CodeSection
                tag="projects"
                className="flex flex-col gap-5"
                innerClassName="mt-2 flex flex-col gap-6"
              >
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <p className="text-lg font-semibold text-textWhite md:text-xl lg:text-2xl">
                      {project.name}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-textLight md:tracking-[0.18em] lg:text-sm lg:tracking-[0.22em]">
                      {project.company}
                    </p>
                  </div>
                  <div className="hidden rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-xs uppercase tracking-[0.22em] text-primary lg:block">
                    Project
                  </div>
                </div>
                <div className="grid gap-3">
                  {project.points.map((point, pointIndex: number) => (
                    <div key={pointIndex} className="flex items-start gap-4">
                      <div className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <p className="flex-1 text-xs leading-6 text-textLight md:text-sm">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                {project.features && project.features.length > 0 && (
                  <div className="grid gap-3 md:grid-cols-2">
                    {project.features.map((point, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-start gap-4">
                        <div className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                          Feature
                        </p>
                        <p className="mt-2 text-xs leading-6 text-textWhite md:text-sm">
                          {point}
                        </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
