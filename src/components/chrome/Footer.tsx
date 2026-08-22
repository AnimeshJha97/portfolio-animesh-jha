"use client";

import { usePathname } from "next/navigation";

import {
  getChapterDisplayLabel,
  getChapterForPathname,
} from "@/content/nav";
import { site } from "@/content/site";

export function Footer() {
  const pathname = usePathname();
  const chapter = getChapterForPathname(pathname);

  return (
    <footer className="mx-auto flex w-full max-w-content flex-wrap justify-between gap-2.5 border-t border-faint px-6 py-[22px] text-[11px] tracking-12 text-faint">
      <span>{site.footerLine}</span>
      <span>{getChapterDisplayLabel(chapter)}</span>
    </footer>
  );
}
