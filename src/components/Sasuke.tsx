"use client";
import { storeTheme } from "@/app/recoil/atoms/storeTheme";
import { themeData } from "@/data/themeData";
import Linkedin from "@/assets/linkedin-icon.svg";
import Instagram from "@/assets/instagram-icon.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { useRecoilValue } from "recoil";

const Sasuke = ({ x, y }: { x: number; y: number }) => {
  const activeTheme = useRecoilValue(storeTheme);
  const activeThemeConfig = themeData[activeTheme];
  const [eyeballsPosition, setEyeballsPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const calculateEyeballsPosition = () => {
      const eyesContainer = document.getElementById("eyes-container");
      if (eyesContainer) {
        const { left, top, width, height } =
          eyesContainer.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        const maxOffset = activeThemeConfig.character.maxOffset;
        const offsetX = Math.cos((angle * Math.PI) / 180) * maxOffset;
        const offsetY = Math.sin((angle * Math.PI) / 180) * maxOffset;

        setEyeballsPosition({ left: offsetX, top: offsetY });
      }
    };

    calculateEyeballsPosition();
  }, [activeThemeConfig.character.maxOffset, x, y]);

  const eyeballsStyle = {
    transform: `translate(${eyeballsPosition.left}px, ${
      eyeballsPosition.top + activeThemeConfig.character.offsetY
    }px)`,
  };
  return (
    <div className="pointer-events-none relative z-[120] mt-12 w-fit p-0 mx-auto lg:fixed lg:bottom-6 lg:left-10 lg:mt-0 lg:mx-0 xl:left-14">
      <div className="pointer-events-auto relative scale-[0.9] opacity-90 transition-transform duration-300 lg:scale-100 lg:opacity-100">
        <div>
          <Link
            href="https://www.linkedin.com/in/jha-animesh/"
            target="_blank"
            className="absolute left-[-30px] top-14 z-[99] cursor-pointer sm:left-[-36px] sm:top-15 lg:left-[-44px] lg:top-14"
          >
            <Image
              src={Linkedin}
              alt="LinkedIn"
              width={36}
              height={36}
              className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
            />
          </Link>
          <Link
            href="https://wa.me/918109876429?text=Hi%20Animesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20potential%20opportunity."
            target="_blank"
            className="absolute left-1/2 top-[-34px] z-[99] -translate-x-1/2 cursor-pointer text-white sm:top-[-38px] lg:left-11 lg:top-[-46px] lg:translate-x-0"
          >
            <BsWhatsapp className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
          </Link>
          <Link
            href="https://instagram.com/__the_undead_cowboy__"
            target="_blank"
            className="absolute right-[-30px] top-14 z-[99] cursor-pointer sm:right-[-36px] sm:top-15 lg:right-[-44px] lg:top-14"
          >
            <Image
              src={Instagram}
              alt="Instagram"
              width={36}
              height={36}
              className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
            />
          </Link>
        </div>
        <div>
          <Image
            className="absolute z-10"
            id="eye-left"
            style={{
              ...eyeballsStyle,
              top: activeThemeConfig.character.leftEye.top,
              left: activeThemeConfig.character.leftEye.left,
            }}
            width={activeThemeConfig.character.leftEye.width}
            height={activeThemeConfig.character.leftEye.height}
            src={activeThemeConfig.character.eyes}
            alt={activeThemeConfig.character.alt}
          />
          <Image
            className="absolute z-10"
            id="eye-right"
            style={{
              ...eyeballsStyle,
              top: activeThemeConfig.character.rightEye.top,
              left: activeThemeConfig.character.rightEye.left,
            }}
            width={activeThemeConfig.character.rightEye.width}
            height={activeThemeConfig.character.rightEye.height}
            src={activeThemeConfig.character.eyes}
            alt={activeThemeConfig.character.alt}
          />
        </div>
        <Image
          className="relative z-20"
          id="eyes-container"
          width={120}
          height={120}
          src={activeThemeConfig.character.body}
          alt={activeThemeConfig.character.alt}
        />
      </div>
    </div>
  );
};

export default Sasuke;
