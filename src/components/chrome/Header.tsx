"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { chapters, isChapterActive } from "@/content/nav";
import { chromeContent, site } from "@/content/site";

import { NavDrawer } from "./NavDrawer";

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between border-b border-faint bg-[rgba(10,10,12,.85)] px-[22px] py-4 backdrop-blur-[8px]">
        <button
          type="button"
          aria-label={chromeContent.openNavigationLabel}
          aria-controls="mobile-navigation"
          aria-expanded={drawerOpen}
          className="flex w-10 flex-col gap-[5px] py-1 lg:hidden"
          onClick={() => setDrawerOpen(true)}
        >
          <span className="block h-0.5 w-6 bg-[var(--text)]" />
          <span className="block h-0.5 w-4 bg-accent" />
          <span className="block h-0.5 w-6 bg-[var(--text)]" />
        </button>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-[13px] tracking-22 text-muted transition-colors hover:text-accent-hover lg:static lg:translate-x-0"
        >
          {site.wordmark}
        </Link>

        <span aria-hidden="true" className="w-10 lg:hidden" />

        <nav
          aria-label={chromeContent.chapterNavigationLabel}
          className="hidden items-center gap-[22px] lg:flex"
        >
          {chapters.map((chapter) => {
            const active = isChapterActive(pathname, chapter);

            return (
              <Link
                key={chapter.slug}
                href={chapter.href}
                aria-current={active ? "page" : undefined}
                className={`text-[11px] tracking-12 transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-text"
                }`}
              >
                <span className="mr-1.5 opacity-[.55]">{chapter.n}</span>
                {chapter.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <NavDrawer open={drawerOpen} onClose={closeDrawer} />
    </>
  );
}
