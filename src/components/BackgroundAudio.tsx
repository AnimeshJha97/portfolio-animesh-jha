"use client";

import { storeSound } from "@/app/recoil/atoms/storeSound";
import { storeTheme } from "@/app/recoil/atoms/storeTheme";
import { themeData } from "@/data/themeData";
import React, { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const BackgroundAudio = () => {
  const [isPlaying, setIsPlaying] = useRecoilState(storeSound);
  const activeTheme = useRecoilValue(storeTheme);
  const activeThemeConfig = themeData[activeTheme];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = activeThemeConfig.soundtrack.volume;
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [activeThemeConfig.soundtrack.volume, isPlaying, setIsPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.volume = activeThemeConfig.soundtrack.volume;
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [
    activeTheme,
    activeThemeConfig.soundtrack.url,
    activeThemeConfig.soundtrack.volume,
    isPlaying,
    setIsPlaying,
  ]);

  return (
    <audio ref={audioRef} preload="auto" loop>
      <source src={activeThemeConfig.soundtrack.url} type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundAudio;
