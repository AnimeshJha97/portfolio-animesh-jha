"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { chapters, getChapterForPathname } from "@/content/nav";
import { chromeContent } from "@/content/site";

export function ChapterNav() {
  const pathname = usePathname();
  const chapter = getChapterForPathname(pathname);
  const chapterIndex = chapters.findIndex((entry) => entry.slug === chapter.slug);
  const previousChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const isLastChapter = chapterIndex === chapters.length - 1;
  const nextChapter = isLastChapter ? chapters[0] : chapters[chapterIndex + 1];

  return (
    <nav
      aria-label={chromeContent.chapterNavigationLabel}
      className="mt-12 flex items-center justify-between gap-3.5 border-t border-faint pt-6 text-xs tracking-06"
    >
      {previousChapter ? (
        <Link
          href={previousChapter.href}
          aria-label={`${chromeContent.previousChapterLabel}: ${previousChapter.label}`}
          className="text-muted transition-colors hover:text-accent-hover"
        >
          ← {previousChapter.n} {previousChapter.href}
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      <Link
        href={nextChapter.href}
        aria-label={`${
          isLastChapter
            ? chromeContent.loopChapterLabel
            : chromeContent.nextChapterLabel
        }: ${nextChapter.label}`}
        className="text-right text-muted transition-colors hover:text-accent-hover"
      >
        {isLastChapter ? "↺" : "next:"} {nextChapter.n} {nextChapter.href}{" "}
        {isLastChapter ? null : "→"}
      </Link>
    </nav>
  );
}
