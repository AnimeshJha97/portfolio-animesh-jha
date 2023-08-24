"use client";
import SasukeBody from "@/assets/sasuke-body.png";
import SasukeEyes from "@/assets/eyes.png";
import Linkedin from "@/assets/linkedin-icon.svg";
import Github from "@/assets/github-icon.svg";
import Instagram from "@/assets/instagram-icon.svg";
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
import EmailModal from "@/components/EmailModal";
import ContactMe from "@/components/ContactMe";

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

const Experience = () => {
  // variable decleration
  let sectionRefs: SectionRefs = {};
  const router = useRouter();
  const pageRoute = {
    prev: 1,
    current: 2,
    next: 3,
  };
  const workData = [
    {
      name: "Next Quarter (formerly Forecast Era)",
      year: {
        from: "2022",
        to: "2023",
      },
      subTitle: "Empowers companies to grow revenue through data.",
      points: [
        "Developed React.js components for the dashboard product, utilizing Material-UI.",
        "Created tables and various types of charts for data visualization using the Highcharts library.",
        "Implemented the Balkan library to represent organization hierarchy in the product.",
        "Utilized Jira and GitHub extensively for bug and issue management, as well as efficient code patching and release management.",
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
        from: "2021",
        to: "2022",
      },
      subTitle: "Technology you can bank on!",
      points: [
        "Contributed to the development and construction of the Loan Lending platform, starting from the ground up.",
        "Developed the landing website for loan customers and retailers using Next.js, Redux, and theme UI.",
        "Created a portal specifically for retailers, enabling them to track and manage loans and commissions. Next.js and Appwrite were used for this purpose.",
        "Designed and developed a customer service dashboard utilizing Next.js, which efficiently managed and visualized customer loan data to aid the customer support team in resolving issues promptly.",
        "Worked on the low-code platform BuddyBase, focusing on integrating Microsoft's Adaptive Cards with Next.js and React Native.",
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
        from: "Mar, 2021",
        to: "Aug, 2021",
      },
      subTitle: "IT Services and IT Consulting",
      points: [
        "Successfully worked with a prominent client in the Cyber Security and Risk Management sector, where my responsibilities involved handling a critical project.",
        "On a daily basis, I was tasked with creating and managing user IDs for the client company's employees.",
        "Additionally, I ensured that employees were granted appropriate access levels and added to relevant shared groups.",
        "One of the most rewarding aspects of this experience was the opportunity to connect with individuals from diverse regions worldwide, including Russia, Germany, USA, Japan, and many others, due to the global presence of the client company.",
      ],
      skills: ["Excel Sheet"],
    },
  ];
  // style decleration
  const styles = {
    loading_container: "flex flex-col min-h-screen justify-center items-center",
    loading_container_inner:
      "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
    loading_container_inner_span:
      "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
    container:
      "relative flex flex-col ml-6 mr-6 md:ml-0 md:mr-0 min-h-screen justify-center items-center p-sm pt-16 md:p-md lg:p-lg select-none",
    pageTitle: "absolute top-0 left-0 p-sm md:p-md lg:p-lg",
    pageTitle_p: "text-textWhite text-base md:text-md font-medium",
    pageTitle_p_span: "text-textLight",
    content:
      "text-textLight flex flex-col gap-2 md:gap-12 md:flex-row justify-between relative z-[2]",
    content_left: "flex flex-col gap-2 md:gap-4",
    content_left_title:
      "text-md md:text-lg lg:text-xxl font-bold text-textWhite",
    content_left_subtitle:
      "text-sm md:text-base lg:text-md mb-4 font-medium text-textWhite",
    content_left_description: "text-xs md:text-sm",
    content_right:
      "h-[80vh] flex flex-col gap-2 md:gap-6 md:flex-[0.95] md:pr-12 md:mt-16 lg:mt-24 md:pb-16",
    content_right_about:
      "ml-6 flex flex-col gap-6 lg:gap-10 text-xs md:text-sm overflow-x-hidden md:pb-[160px]",
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
  const [selectedWork, setSelectedWork] = useState(workData[0].name);
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
      rootMargin: "0px",
      threshold: 0.9, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          // Find the work name associated with the section
          const workName = Object.keys(sectionRefs).find(
            (name) => sectionRefs[name].current === entry.target
          );

          if (workName) {
            setSelectedWork(workName);
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

  workData.forEach((work) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    sectionRefs[work.name] = useRef<HTMLDivElement>(null);
  });

  const handleWorkClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    workName: string
  ) => {
    e.preventDefault();
    setSelectedWork(workName);

    const selectedSection = sectionRefs[workName];

    if (selectedSection && selectedSection.current) {
      selectedSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function handlePrevClick(): void {
    setPage(pageRoute.current);
    router.push("/");
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
              <Title pageNo={"02"} title={"Experience"} />
            </div>

            {/* content */}
            <div className={styles.content}>
              {/* left */}
              <div className="h-[90vh] flex items-center flex-[0.8] lg:flex-[0.9]">
                <div className={styles.content_left}>
                  <p className="text-xs md:text-sm text-primary">{"<title>"}</p>
                  <div className="ml-6">
                    <p className={styles.content_left_subtitle}>
                      Work Experience
                    </p>
                    {/* company name */}
                    <div className="flex flex-col gap-2">
                      {workData.map((work) => (
                        <div
                          key={work.name}
                          className="flex gap-4 items-center justify-normal group cursor-pointer max-w-[400px]"
                          onClick={(e) => handleWorkClick(e, work.name)}
                        >
                          <div
                            className={
                              selectedWork === work.name
                                ? "h-[1px] duration-300 w-6 md:w-12 bg-textWhite"
                                : "h-[1px] w-3 md:w-6 duration-300 group-hover:w-12 group-hover:bg-textWhite bg-textLight"
                            }
                          />
                          <p
                            className={
                              selectedWork === work.name
                                ? "text-xs md:text-sm text-textWhite"
                                : "text-xs md:text-sm group-hover:text-textWhite"
                            }
                          >
                            {work.name}
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
                  {"<experience>"}
                </p>

                <div className={styles.content_right_about}>
                  {workData.map((work, i) => (
                    <div ref={sectionRefs[work.name]} key={work.name}>
                      <div className="flex flex-col md:flex-row items-start md:gap-8 gap-1">
                        {/* duration */}
                        <div className="flex gap-2 items-center pt-2">
                          {work.year.from}{" "}
                          <div className="h-[1px] w-4 bg-textLight" />{" "}
                          {work.year.to}
                        </div>
                        {/* content */}
                        <div className="flex flex-col gap-2">
                          {/* company title */}
                          <div>
                            <p className="text-sm md:text-md text-textWhite font-bold">
                              {work.name}
                            </p>
                            <p className="text-textWhite">{work.subTitle}</p>
                          </div>
                          {/* points */}
                          <div className="flex flex-col gap-2">
                            {work.points.map((point, i: number) => (
                              <div key={i} className="flex gap-4 items-center">
                                <div className=" w-2 h-2 bg-textLight rounded-full" />
                                <p className="flex-1">{point}</p>
                              </div>
                            ))}
                          </div>
                          {/* skills */}
                          <div className="flex flex-wrap items-center gap-3">
                            {work.skills.map((skill, i) => (
                              <SkillBox key={i} skill={skill} />
                            ))}
                          </div>
                        </div>
                      </div>
                      {workData.length - 1 > i && (
                        <div className="w-full h-[1px] bg-textLight opacity-40 mt-6 lg:mt-10" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-primary">
                  {"</experience>"}
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

export default Experience;
