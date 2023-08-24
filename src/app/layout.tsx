import "./globals.css";
import { Inter } from "next/font/google";
import GlobalRecoilRoot from "./recoilRoot/GlobalRecoilRoot";
import Particle from "@/components/Particle";
import BackgroundAudio from "@/components/BackgroundAudio";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animesh's Portfolio",
  description: "Designer & Developer | FROM INDIA WITH LOVE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bgCol">
        <div className="hidden md:block w-screen h-screen absolute top-0 left-0 overflow-hidden">
          <Particle />
        </div>
        <GlobalRecoilRoot>
          {children}
          <BackgroundAudio />
        </GlobalRecoilRoot>
      </body>
    </html>
  );
}
