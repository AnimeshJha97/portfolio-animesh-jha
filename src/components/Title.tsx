"use client";
import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { storeSound } from "@/app/recoil/atoms/storeSound";
import { storeTheme } from "@/app/recoil/atoms/storeTheme";
import { themeData, themeOrder } from "@/data/themeData";

const Title = ({
  pageNo,
  title,
  isMobileMenuOpen,
  onMobileMenuToggle,
}: {
  pageNo: string;
  title: string;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}) => {
  const [isPlaying, setIsPlaying] = useRecoilState(storeSound);
  const [activeTheme, setActiveTheme] = useRecoilState(storeTheme);
  const activeThemeConfig = themeData[activeTheme];

  useEffect(() => {
    console.log("isPlaying", isPlaying);
  }, [isPlaying]);

  const handleThemeChange = () => {
    if (themeOrder.length <= 1) {
      return;
    }

    const currentIndex = themeOrder.indexOf(activeTheme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setActiveTheme(nextTheme);
  };

  // style decleration
  const styles = {
    pageTitle:
      "flex w-full items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8",
    pageTitle_p:
      "text-textWhite text-xs sm:text-sm md:text-base lg:text-md font-medium",
    pageTitle_p_span: "text-textLight",
  };
  return (
    <div className={styles.pageTitle}>
      <div className="flex items-center gap-3">
        {onMobileMenuToggle ? (
          <button
            type="button"
            className={`relative flex h-8 w-8 items-center justify-center transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-1" : "translate-x-0"
            }`}
            onClick={onMobileMenuToggle}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`absolute h-[1.5px] w-4 rounded-full bg-textWhite transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 rounded-full bg-textWhite transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 rounded-full bg-textWhite transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        ) : null}
        <p className={styles.pageTitle_p}>
          {pageNo} <span className={styles.pageTitle_p_span}>- {title}</span>
        </p>
      </div>

      <div className="flex items-end gap-1.5 sm:gap-2 md:gap-3">
        <div className="flex flex-col items-center md:gap-2">
          <div
            className={`duration-300 border-2 border-textWhite rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex flex-col items-center justify-center ${
              isPlaying
                ? "bg-textWhite text-bgCol"
                : "bg-bgCol text-textWhite lg:hover:bg-textWhite lg:hover:text-bgCol"
            }`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <BsFillPlayFill className="h-2 w-2 sm:h-[10px] sm:w-[10px] md:h-3 md:w-3" />
          </div>
          <p className="text-[9px] text-textLight sm:text-[10px] md:text-xxs">sound</p>
        </div>
        <div
          className={`flex flex-col items-center gap-[2px] md:gap-2 ${
            themeOrder.length > 1 ? "cursor-pointer" : "cursor-default"
          }`}
          onClick={handleThemeChange}
        >
          <HiOutlineRefresh
            className={`h-[14px] w-[14px] sm:h-4 sm:w-4 md:h-5 md:w-5 ${
              themeOrder.length > 1 ? "text-textWhite" : "text-textLight"
            }`}
          />
          <p className="text-[9px] text-textLight sm:text-[10px] md:text-xxs">
            {activeThemeConfig.displayName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
