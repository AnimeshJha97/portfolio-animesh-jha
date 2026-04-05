import { atom } from "recoil";
import type { ThemeId } from "@/data/themeData";

export const storeTheme = atom<ThemeId>({
  key: "store-theme",
  default: "sasuke",
});
