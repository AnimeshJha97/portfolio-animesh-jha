import type { ReactNode } from "react";

import { getChapterBySlug, type ChapterSlug } from "@/content/nav";

interface SectionCloseProps {
  chapter: ChapterSlug;
  extra?: ReactNode;
}

export function SectionClose({ chapter: chapterSlug, extra }: SectionCloseProps) {
  const chapter = getChapterBySlug(chapterSlug);

  return (
    <div className="mt-[60px] text-[13px] text-faint">
      &lt;/{chapter.tag}&gt; {extra}
    </div>
  );
}
