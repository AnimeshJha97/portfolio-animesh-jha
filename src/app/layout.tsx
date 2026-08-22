import { JetBrains_Mono } from "next/font/google";

import { ChapterNav } from "@/components/chrome/ChapterNav";
import { Footer } from "@/components/chrome/Footer";
import { Header } from "@/components/chrome/Header";
import { Scanlines } from "@/components/chrome/Scanlines";

import "./globals.css";

// T13 replaces this temporary metadata with the final per-route set.

// Exposed as `--font-mono`; globals.css applies it to `body` and
// tailwind.config.js maps it to `font-mono`.
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "Animesh Jha",
  description: "Rebuild in progress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <body className="flex min-h-screen flex-col">
        <Scanlines />
        <Header />
        <main className="mx-auto w-full max-w-content flex-1 px-6 pb-20 pt-[110px]">
          {children}
          <ChapterNav />
        </main>
        <Footer />
      </body>
    </html>
  );
}
