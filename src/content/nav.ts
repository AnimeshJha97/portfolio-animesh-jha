import type { Chapter } from "./types";

export const chapters = [
  {
    n: "01",
    slug: "studio",
    label: "STUDIO",
    href: "/",
    tag: "studio",
    note: "// for recruiters · clients · product users — pick your track below",
  },
  {
    n: "02",
    slug: "about",
    label: "ABOUT",
    href: "/about",
    tag: "about",
    note: "// the human, not the resume",
  },
  {
    n: "03",
    slug: "products",
    label: "PRODUCTS",
    href: "/products",
    tag: "products",
    note: "// for people who want to use what I build",
  },
  {
    n: "04",
    slug: "work",
    label: "WORK",
    href: "/work",
    tag: "work",
    note: "// for recruiters & clients — proof I can be trusted with serious systems",
  },
  {
    n: "05",
    slug: "services",
    label: "SERVICES",
    href: "/services",
    tag: "services",
    note: "// for clients — hire the studio, not just the engineer",
  },
  {
    n: "06",
    slug: "thanks",
    label: "THANKS",
    href: "/thanks",
    tag: "thanks",
    note: "// choose how this continues",
  },
] as const satisfies readonly Chapter[];

export type ChapterEntry = (typeof chapters)[number];
export type { ChapterSlug } from "./types";

export const chapterCount = String(chapters.length).padStart(2, "0");

export function isChapterActive(
  pathname: string,
  chapter: ChapterEntry,
): boolean {
  if (chapter.href === "/") {
    return pathname === "/";
  }

  return pathname === chapter.href || pathname.startsWith(`${chapter.href}/`);
}

export function getChapterForPathname(pathname: string): ChapterEntry {
  return (
    chapters.find((chapter) => isChapterActive(pathname, chapter)) ?? chapters[0]
  );
}

export function getChapterBySlug(slug: ChapterEntry["slug"]): ChapterEntry {
  const chapter = chapters.find((entry) => entry.slug === slug);

  if (!chapter) {
    throw new Error(`Unknown chapter slug: ${slug}`);
  }

  return chapter;
}

export function getChapterDisplayLabel(chapter: ChapterEntry): string {
  const title = chapter.label.charAt(0) + chapter.label.slice(1).toLowerCase();
  return `${chapter.n} — ${title}`;
}
