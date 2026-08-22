"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { chapters, isChapterActive } from "@/content/nav";
import { chromeContent, site } from "@/content/site";

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function NavDrawer({ open, onClose }: NavDrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        aria-label={chromeContent.closeNavigationLabel}
        className="fixed inset-0 z-[70] cursor-default bg-[rgba(5,5,7,.7)] backdrop-blur-[3px] lg:hidden"
        onClick={onClose}
      />
      <nav
        id="mobile-navigation"
        aria-label={chromeContent.chapterNavigationLabel}
        className="fixed inset-y-0 left-0 z-[80] flex w-[300px] max-w-[85vw] animate-[st-fadeUp_.25s_ease_both] flex-col border-r border-border bg-surface py-7 lg:hidden"
      >
        <div className="flex items-center justify-between border-b border-faint px-[26px] pb-[22px]">
          <span className="text-xs tracking-35 text-accent">
            {chromeContent.navigationLabel}
          </span>
          <button
            type="button"
            aria-label={chromeContent.closeNavigationLabel}
            className="p-1 text-base leading-none text-muted transition-colors hover:text-text"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col pt-3.5">
          {chapters.map((chapter) => {
            const active = isChapterActive(pathname, chapter);

            return (
              <Link
                key={chapter.slug}
                href={chapter.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-baseline gap-3.5 border-l-2 px-[26px] py-3.5 transition-colors ${
                  active
                    ? "border-accent text-accent"
                    : "border-transparent text-text hover:border-mid hover:text-accent-hover"
                }`}
                onClick={onClose}
              >
                <span className="text-[11px] tracking-10 text-dim">
                  {chapter.n}
                </span>
                <span className="text-[15px] tracking-14">{chapter.label}</span>
              </Link>
            );
          })}
        </div>

        <a
          href={`mailto:${site.email}`}
          className="mt-auto border-t border-faint px-[26px] py-[22px] text-[11px] tracking-12 text-dim transition-colors hover:text-accent-hover"
        >
          {site.email}
        </a>
      </nav>
    </>
  );
}
