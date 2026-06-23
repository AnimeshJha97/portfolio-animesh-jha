"use client";

import { storeTheme } from "@/app/recoil/atoms/storeTheme";
import { themeData } from "@/data/themeData";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const hexToRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  const safeHex =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  const value = parseInt(safeHex, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;

  return `${r} ${g} ${b}`;
};

const ThemePaletteSync = () => {
  const activeTheme = useRecoilValue(storeTheme);
  const activeThemeConfig = themeData[activeTheme];

  useEffect(() => {
    const root = document.documentElement;
    const { palette } = activeThemeConfig;

    root.style.setProperty("--theme-bg", hexToRgb(palette.background));
    root.style.setProperty(
      "--theme-bg-soft",
      hexToRgb(palette.backgroundSoft)
    );
    root.style.setProperty(
      "--theme-bg-deep",
      hexToRgb(palette.backgroundDeep)
    );
    root.style.setProperty("--theme-panel", hexToRgb(palette.panel));
    root.style.setProperty("--theme-panel-soft", hexToRgb(palette.panelSoft));
    root.style.setProperty("--theme-panel-alt", hexToRgb(palette.panelAlt));
    root.style.setProperty(
      "--theme-panel-strong",
      hexToRgb(palette.panelStrong)
    );
    root.style.setProperty("--theme-primary", hexToRgb(palette.primary));
    root.style.setProperty(
      "--theme-primary-soft",
      hexToRgb(palette.primarySoft)
    );
    root.style.setProperty("--theme-text", hexToRgb(palette.text));
    root.style.setProperty("--theme-muted", hexToRgb(palette.muted));
    root.style.setProperty("--theme-border", palette.border);
    root.style.setProperty("--theme-glow", palette.glow);
  }, [activeThemeConfig]);

  return null;
};

export default ThemePaletteSync;
