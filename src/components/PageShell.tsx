"use client";

import NextIcon from "@/assets/next-arrow.svg";
import PrevIcon from "@/assets/prev-arrow.svg";
import ContactMe from "@/components/ContactMe";
import EmailModal from "@/components/EmailModal";
import Sasuke from "@/components/Sasuke";
import Title from "@/components/Title";
import { storePage } from "@/app/recoil/atoms/storePage";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface PageShellProps {
  pageNo: string;
  title: string;
  currentPage: number;
  prevPage: number;
  nextPage: number;
  prevHref?: string;
  nextHref?: string;
  children: ReactNode;
  contentClassName?: string;
  containerClassName?: string;
  mobileMenuContent?: (closeMenu: () => void) => ReactNode;
}

const loadingSpinnerClassName =
  "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]";

const PageShell = ({
  pageNo,
  title,
  currentPage,
  prevPage,
  nextPage,
  prevHref,
  nextHref,
  children,
  contentClassName,
  containerClassName,
  mobileMenuContent,
}: PageShellProps) => {
  const router = useRouter();
  const [page, setPage] = useRecoilState(storePage);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [motionConfig, setMotionConfig] = useState({
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
    transition: { duration: 0.5 },
  });

  useEffect(() => {
    const config = {
      initial: { opacity: 0, x: 200 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -200 },
      transition: { duration: 0.5 },
    };

    if (page === nextPage) {
      config.initial = { opacity: 0, x: -200 };
      config.animate = { opacity: 1, x: 0 };
      config.exit = { opacity: 0, x: 200 };
    } else if (page === prevPage) {
      config.initial = { opacity: 0, x: 200 };
      config.animate = { opacity: 1, x: 0 };
      config.exit = { opacity: 0, x: -200 };
    }

    setMotionConfig(config);
  }, [nextPage, page, prevPage]);

  useEffect(() => {
    setIsLoading(false);
  }, [motionConfig]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const handleMouseMove = (event: {
    clientX: number;
    clientY: number;
  }) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleNavigate = (href?: string) => {
    if (!href) {
      return;
    }

    setPage(currentPage);
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  const handleModalOpen = () => {
    setOpenModal((current) => !current);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <main>
      {isLoading ? (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className={loadingSpinnerClassName} role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
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
          <div
            className={
              containerClassName ??
              "relative flex min-h-screen select-none flex-col items-center justify-center px-6 pb-8 pt-16 duration-300 md:px-[108px] lg:px-[128px] lg:pb-10 xl:pl-[260px]"
            }
            onMouseMove={handleMouseMove}
          >
            <div className="fixed left-0 top-0 z-[150] w-full border-b border-white/10 bg-[linear-gradient(180deg,rgba(8,13,24,0.95),rgba(12,23,42,0.82))] backdrop-blur-md">
              <div className="mx-auto w-full max-w-[1700px]">
                <Title
                  pageNo={pageNo}
                  title={title}
                  isMobileMenuOpen={isMobileMenuOpen}
                  onMobileMenuToggle={() =>
                    setIsMobileMenuOpen((current) => !current)
                  }
                />
              </div>
            </div>
            <div
              className={
                contentClassName ??
                "relative z-[2] mt-12 flex flex-col gap-16 text-textLight md:mt-0 md:flex-row md:items-center md:justify-between"
              }
            >
              {children}
            </div>
            <div
              className={`fixed inset-0 z-[140] ${
                isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <button
                type="button"
                className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={closeMobileMenu}
                aria-label="Close menu overlay"
              />
              <aside
                className={`absolute left-0 top-0 flex h-screen w-[84vw] max-w-[360px] flex-col border-r border-white/10 bg-[linear-gradient(180deg,rgba(8,13,24,0.97),rgba(12,23,42,0.94))] px-5 pb-6 pt-24 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="space-y-2 border-b border-white/10 pb-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
                    Navigate
                  </p>
                  <div className="grid gap-2">
                    {[
                      { label: "Intro", href: "/", page: 1 },
                      { label: "Experience", href: "/Experience", page: 2 },
                      { label: "Projects", href: "/Projects", page: 3 },
                      { label: "Thanks", href: "/Thanks", page: 4 },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        className={
                          item.page === currentPage
                            ? "rounded-[18px] border border-primary/35 bg-primary/10 px-4 py-3 text-left text-sm font-medium text-textWhite"
                            : "rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm font-medium text-textLight"
                        }
                        onClick={() => handleNavigate(item.href)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
                {mobileMenuContent ? (
                  <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1 lg:hidden">
                    {mobileMenuContent(closeMobileMenu)}
                  </div>
                ) : null}
              </aside>
            </div>
            <div className="pointer-events-none fixed left-0 top-0 z-[120] flex h-screen w-full items-center justify-between px-2 md:px-8">
              <Image
                className={
                  prevHref
                    ? "pointer-events-auto visible z-[91] h-7 w-7 cursor-pointer overflow-hidden rounded-full duration-300 hover:h-8 hover:w-8 md:h-8 md:w-8 md:hover:h-9 md:hover:w-9"
                    : "invisible"
                }
                width={100}
                height={100}
                src={PrevIcon}
                alt="previous"
                onClick={() => handleNavigate(prevHref)}
              />
              <Image
                className={
                  nextHref
                    ? "pointer-events-auto visible z-[91] h-7 w-7 cursor-pointer overflow-hidden rounded-full duration-300 hover:h-8 hover:w-8 md:h-8 md:w-8 md:hover:h-9 md:hover:w-9"
                    : "invisible"
                }
                width={100}
                height={100}
                src={NextIcon}
                alt="next"
                onClick={() => handleNavigate(nextHref)}
                />
              </div>
            <ContactMe handleModalOpen={handleModalOpen} />
            {openModal ? <EmailModal setOpenModal={setOpenModal} /> : null}
          </div>
        </motion.div>
      )}
      {!isLoading ? <Sasuke x={mouseCoordinates.x} y={mouseCoordinates.y} /> : null}
    </main>
  );
};

export default PageShell;
