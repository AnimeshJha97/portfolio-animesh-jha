"use client";
import NextIcon from "@/assets/next-arrow.svg";
import PrevIcon from "@/assets/prev-arrow.svg";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { storePage } from "../recoil/atoms/storePage";
import { useRecoilState } from "recoil";
import Sasuke from "@/components/Sasuke";
import Title from "@/components/Title";
import SkillBox from "@/components/SkillBox";
import ContactMe from "@/components/ContactMe";
import EmailModal from "@/components/EmailModal";

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

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

const Projects = () => {
  // variable decleration
  const router = useRouter();
  const pageRoute = {
    prev: 2,
    current: 3,
    next: 0,
  };
  let sectionRefs: SectionRefs = {};

  // style decleration
  const styles = {
    loading_container: "flex flex-col min-h-screen justify-center items-center",
    loading_container_inner:
      "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
    loading_container_inner_span:
      "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
    container:
      "relative flex flex-col ml-6 mr-6 md:ml-0 md:mr-0 min-h-screen justify-center items-center p-sm pt-16 md:p-md lg:p-lg select-none",
    content:
      "text-textLight flex flex-col mt-12 md:mt-0 gap-16 md:flex-row md:items-center justify-between relative z-[2]",
    content_left: "flex flex-col gap-2 gap-4",
    content_left_title:
      "text-md md:text-lg lg:text-xxl font-bold text-textWhite",
    content_left_subtitle:
      "text-sm md:text-base lg:text-md mb-4 font-medium text-textWhite",
    content_left_description: "text-xs md:text-sm",
    content_right:
      "md:h-[80vh] flex flex-col gap-4 md:flex-[0.95] md:pr-12 md:mt-16 lg:mt-24 md:pb-16",
    content_right_about:
      "ml-6 flex flex-col gap-6 lg:gap-10 text-xs md:text-sm h-full md:overflow-x-hidden md:pb-[360px]",
    content_right_about_span: "text-textWhite",
    routeIcons:
      "fixed top-0 left-0 h-screen w-full flex justify-between items-center pl-3 pr-3 md:pl-8 md:pr-8",
  };
  // useStates
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [page, setPage] = useRecoilState(storePage);
  const [motionConfig, setMotionConfig] = useState({
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
    transition: { duration: 0.5 },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(projectData[0].id);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let config = {
      initial: { opacity: 0, x: 200 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -200 },
      transition: { duration: 0.5 },
    };
    if (page === pageRoute.next) {
      config.initial = { opacity: 0, x: -200 };
      config.animate = { opacity: 1, x: 0 };
      config.exit = { opacity: 0, x: 200 };
      config.transition = { duration: 0.5 };
    }
    setMotionConfig(config);
  }, [page, pageRoute.next]);

  useEffect(() => {
    setIsLoading(false);
  }, [motionConfig]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          const projectName = Object.keys(sectionRefs).find(
            (name) => sectionRefs[name].current === entry.target
          );

          if (projectName) {
            setSelectedProject(projectName);
          }
        }
      });
    }, observerOptions);

    Object.keys(sectionRefs).forEach((name) => {
      const currentSectionRef = sectionRefs[name].current;
      if (currentSectionRef) {
        observer.observe(currentSectionRef as Element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const handleMouseMove = (event: {
    clientX: number;
    clientY: number;
  }): void => {
    const { clientX, clientY } = event;
    setMouseCoordinates({ x: clientX, y: clientY });
  };

  projectData.forEach((project) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    sectionRefs[project.id] = useRef<HTMLDivElement>(null);
  });

  const handleProjectClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    projectId: string
  ) => {
    e.preventDefault();
    setSelectedProject(projectId);

    const selectedSection = sectionRefs[projectId];

    if (selectedSection && selectedSection.current) {
      selectedSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function handlePrevClick(): void {
    setPage(pageRoute.current);
    router.push("/Experience");
  }

  function handleNextClick(): void {
    setPage(pageRoute.current);
    router.push("/Projects");
  }

  const handleModalOpen = () => {
    setOpenModal((current) => {
      console.log("model set to ", !current);
      return !current;
    });
  };

  return (
    <main>
      {isLoading ? (
        <div className={styles.loading_container}>
          <div className={styles.loading_container_inner} role="status">
            <span className={styles.loading_container_inner_span}>
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <motion.div
          initial={motionConfig.initial}
          animate={motionConfig.animate}
          exit={motionConfig.exit}
          transition={motionConfig.transition}
        >
          <div className={styles.container} onMouseMove={handleMouseMove}>
            <div className="z-[3] w-full">
              <Title pageNo={"03"} title={"Projects"} />
            </div>

            <div className={styles.content}>
              <div className="h-[90vh] flex items-center flex-[0.8] lg:flex-[0.9]">
                <div className={styles.content_left}>
                  <p className="text-xs md:text-sm text-primary">{"<title>"}</p>
                  <div className="ml-6">
                    <p className={styles.content_left_subtitle}>
                      Project Experience
                    </p>
                    <div className="flex flex-col gap-2">
                      {projectData.map((project) => (
                        <div
                          key={project.id}
                          className="flex gap-4 items-center justify-normal group cursor-pointer max-w-[400px]"
                          onClick={(e) => handleProjectClick(e, project.id)}
                        >
                          <div
                            className={
                              selectedProject === project.id
                                ? "h-[1px] duration-300 w-12 bg-textWhite"
                                : "h-[1px] w-6 duration-300 group-hover:w-12 group-hover:bg-textWhite bg-textLight"
                            }
                          />
                          <p
                            className={
                              selectedProject === project.id
                                ? "text-xs md:text-sm text-textWhite"
                                : "text-xs md:text-sm group-hover:text-textWhite"
                            }
                          >
                            {project.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-primary">
                    {"</title>"}
                  </p>
                </div>
              </div>
              <div className={styles.content_right}>
                <p className="text-xs md:text-sm text-primary">
                  {"<projects>"}
                </p>
                <div className={styles.content_right_about}>
                  {projectData.map((project, i) => (
                    <div
                      ref={sectionRefs[project.id]}
                      key={project.id}
                      className="flex flex-col gap-2 rounded-lg mr-2]"
                    >
                      <p className="text-base md:text-md text-textWhite font-bold">
                        {project.name}
                      </p>
                      <p className="text-textWhite">{project.company}</p>
                      <div className="flex flex-col gap-2">
                        {project.points.map((point, i: number) => (
                          <div key={i} className="flex gap-4">
                            <div className="mt-[10px] w-2 h-2 bg-textLight rounded-full" />
                            <p className="flex-1">{point}</p>
                          </div>
                        ))}
                      </div>
                      {project.features && project.features.length > 0 && (
                        <div className="flex gap-4">
                          <div className="mt-[10px] w-2 h-2 bg-textLight rounded-full" />
                          <p className="flex-1">Features:</p>
                        </div>
                      )}
                      <div className="flex flex-col gap-2 ml-6">
                        {project.features?.map((point, i: number) => (
                          <div key={i} className="flex gap-4">
                            <div className="mt-[10px] w-2 h-2 border-textLight border-[1px] rounded-full" />
                            <p className="flex-1">{point}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        {project.skills.map((skill, i) => (
                          <SkillBox key={i} keyParam={i} skill={skill} />
                        ))}
                      </div>
                      {projectData.length - 1 > i && (
                        <div className="w-full h-[1px] bg-textLight opacity-40 mt-6 lg:mt-10" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-primary">
                  {"</projects>"}
                </p>
              </div>
            </div>
            <div className={styles.routeIcons}>
              <Image
                className={
                  pageRoute.prev !== 0
                    ? "visible z-[3] cursor-pointer hover:w-9 hover:h-9 w-8 h-8 rounded-full overflow-hidden duration-300"
                    : "invisible"
                }
                width={100}
                height={100}
                src={PrevIcon}
                alt={"next"}
                onClick={() => handlePrevClick()}
              />
              <Image
                className={
                  pageRoute.next !== 0
                    ? "visible z-[3] cursor-pointer hover:w-9 hover:h-9 w-8 h-8 rounded-full overflow-hidden duration-300"
                    : "invisible"
                }
                width={100}
                height={100}
                src={NextIcon}
                onClick={() => handleNextClick()}
                alt={"next"}
              />
            </div>
            <Sasuke x={mouseCoordinates.x} y={mouseCoordinates.y} />
            <ContactMe handleModalOpen={handleModalOpen} />
            {openModal ? <EmailModal setOpenModal={setOpenModal} /> : null}
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Projects;
