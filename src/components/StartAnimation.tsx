"use client";

import { storeTheme } from "@/app/recoil/atoms/storeTheme";
import { themeData } from "@/data/themeData";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const StartAnimation = () => {
  const activeTheme = useRecoilValue(storeTheme);
  const activeThemeConfig = themeData[activeTheme];
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [allowSkip, setAllowSkip] = useState(false);
  const [showIntroText, setShowIntroText] = useState(true);

  const handleVideoEnd = () => {
    setIsDismissed(true);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setIsDismissed(true);
  };

  useEffect(() => {
    const introTextTimeout = setTimeout(() => {
      setShowIntroText(false);
    }, 1800);

    const skipTimeout = setTimeout(() => {
      setAllowSkip(true);
    }, 3500);

    return () => {
      clearTimeout(introTextTimeout);
      clearTimeout(skipTimeout);
    };
  }, [activeTheme]);

  useEffect(() => {
    setIsDismissed(false);
    setIsVideoLoaded(false);
    setAllowSkip(false);
    setShowIntroText(true);
  }, [activeTheme]);

  if (isDismissed) {
    return null;
  }

  return (
    <div className="fixed z-[2000] top-0 left-0 w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      <video
        key={activeTheme}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="loading-video relative z-[2001] h-full w-full object-cover"
        onEnded={handleVideoEnd}
        onLoadedData={handleVideoLoaded}
        onLoadedMetadata={handleVideoLoaded}
        onCanPlay={handleVideoLoaded}
        onError={handleVideoError}
      >
        <source src={activeThemeConfig.intro.videoUrl} type="video/mp4" />
      </video>
      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_48%,rgba(0,0,0,0.92)_100%)] transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-85"
        }`}
      />
      {showIntroText ? (
        <div className="absolute z-[2002] flex flex-col items-center gap-3 px-6 text-center">
          <p
            className="text-base md:text-md font-semibold uppercase tracking-[0.3em] text-textWhite"
            style={{ animation: "sharingan-fade 2s ease-in-out forwards" }}
          >
            {activeThemeConfig.intro.title}
          </p>
        </div>
      ) : null}
      {allowSkip ? (
        <button
          className="absolute bottom-8 right-8 z-[2003] rounded-full border border-white/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-textWhite transition-colors duration-300 hover:bg-white hover:text-black"
          onClick={() => setIsDismissed(true)}
        >
          Skip Intro
        </button>
      ) : null}
    </div>
  );
};

export default StartAnimation;
