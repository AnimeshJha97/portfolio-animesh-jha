import {
  chapterCount,
  getChapterBySlug,
  type ChapterSlug,
} from "@/content/nav";

interface SectionHeadProps {
  chapter: ChapterSlug;
}

export function SectionHead({ chapter: chapterSlug }: SectionHeadProps) {
  const chapter = getChapterBySlug(chapterSlug);

  return (
    <header className="mb-[52px]">
      <div className="flex items-center justify-between gap-6">
        <span className="text-sm tracking-08 text-accent">
          &lt;{chapter.tag}&gt;
        </span>
        <span className="text-xs tracking-20 text-faint">
          {chapter.n} / {chapterCount}
        </span>
      </div>
      <p className="mt-2 text-xs tracking-14 text-dim">{chapter.note}</p>
    </header>
  );
}
