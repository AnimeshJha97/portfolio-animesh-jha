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
    name: "The Review Roundup",
    company: "Personal Project",
    points: [
      "A review platform for Movies, TV Series, Cafes, Destinations, Live Shows and Books.",
    ],
    features: [
      "Authentication, Login and Signup",
      "Go through community reviews, submit reviews, like and dislike reviews.",
      "Watch description for all the modules, i.e., Movies, TV Series, etc.",
    ],
    skills: [
      "Next.js v13",
      "Typescript",
      "Node.js",
      "TailwindCSS",
      "Express.js",
      "Webpack",
    ],
  },
  {
    id: "project2",
    name: "Account Growth and Forecasting Platform",
    company: "Next Quarter",
    points: [
      "Developed a platform aimed at driving growth and achieving predictable forecasts for companies through the utilization of account planning, sales methodologies, data-driven forecasts, and conversational AI.",
      "Integrated React.js and Material UI with the Salesforce platform to enhance the platform's user interface and functionality.",
      "Collaborated closely with the Salesforce Backend team and QA team to integrate new features and make necessary enhancements to the platform.",
      "Utilized the Balkan Org Chart library along with React.js to create an elegant, flexible, and customizable organization chart for presenting structural data.",
      "Successfully integrated the Balkan Org Chart library with React.js and implemented various business logics to ensure smooth functionality and a seamless user experience.",
    ],
    features: [],
    skills: [
      "React.js",
      "Material UI",
      "HighCharts",
      "Webpack",
      "Jira",
      "Github",
      "Balkan Org Chart",
    ],
  },
  {
    id: "project3",
    name: "Lending Database Query Management System",
    company: "Trustt (formerly Novopay)",
    points: [
      "Query Management System for customer support to ease with managing the data of loan customers based on query input.",
      "Added query search feature not provided by Appwrite in Appwrite DB dashboard.",
    ],
    skills: [
      "Next.js",
      "TailwindCSS",
      "Appwrite",
      "Node.js",
      "Express.js",
      "REST API",
      "Recoil - State Management Tool",
    ],
  },
  {
    id: "project4",
    name: "Loan Agent Portal",
    company: "Trustt (formerly Novopay)",
    points: [
      "Web Application for Novopay's Loan Distributer Agent to manage their data and data of loan customers linked.",
      "Features: View details of Leads, Borrowers, detailed commission details and generating new Leads.",
    ],
    features: [
      "View details of Leads & Borrowers",
      "View detailed commission details",
      "Generate new Leads",
    ],
    skills: [
      "Next.js",
      "TailwindCSS",
      "Appwrite",
      "Strapi.io CMS",
      "BudiBase",
      "Recoil - State Management Tool",
    ],
  },
  {
    id: "project5",
    name: "Lending and Retailer Website",
    company: "Trustt (formerly Novopay)",
    points: [
      "Novopay’s official website for Lending and Retailer Platform.",
      "Features: Fully responsive website powered by Theme UI",
    ],
    skills: ["Next.js", "Theme UI", "Redux", "Appwrite", "Strapi.io CMS"],
  },
  {
    id: "project6",
    name: "ShopIT - Backend Project",
    company: "Personal Project",
    points: [
      "A single page e-commerce application where an authenticated user can purchase item from the store.",
      "Features: User/Admin Authorization, Authentication, JWT, Register, Login, Update, Add Product to Cart.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "REST API", "Github"],
  },
  {
    id: "project7",
    name: "Slack Clone",
    company: "Personal Project",
    points: [
      "A single page messaging web application",
      "Sign-in and Authentication using Google Firebase Authentication",
      "Integrated Firebase Database(Firestore) for storing data",
      "Create channels, live chat and interact with multiple users at same time.",
    ],
    skills: ["React.js", "Firebase", "HTML", "CSS", "Javascript"],
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
    // content_sasuke:
    //   "relative w-auto md:h-[100vh] md:absolute md:bottom-2 md:left-14 p-sm pb-0 md:p-md md:pb-0 lg:p-lg lg:pb-0 mt-12",
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
      threshold: 0.8, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          // Find the work name associated with the section
          const projectName = Object.keys(sectionRefs).find(
            (name) => sectionRefs[name].current === entry.target
          );

          if (projectName) {
            setSelectedProject(projectName);
          }
        }
      });
    }, observerOptions);

    // Attach the observer to each section ref
    Object.keys(sectionRefs).forEach((name) => {
      const currentSectionRef = sectionRefs[name].current;
      if (currentSectionRef) {
        observer.observe(currentSectionRef as Element); // Type assertion here
      }
    });

    // Clean up the observer when the component unmounts
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
              {/* page title */}
              <Title pageNo={"03"} title={"Projects"} />
              {/* Theme Change */}
            </div>

            {/* content */}
            <div className={styles.content}>
              {/* left */}
              <div className="h-[90vh] flex items-center flex-[0.8] lg:flex-[0.9]">
                <div className={styles.content_left}>
                  <p className="text-xs md:text-sm text-primary">{"<title>"}</p>
                  <div className="ml-6">
                    <p className={styles.content_left_subtitle}>
                      Project Experience
                    </p>
                    {/* company name */}
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
              {/* right */}
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
            {/* prev - next icons */}
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
            {/* sasuke img & social icons */}
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
