import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Animesh Jha — Studio",
  description:
    "Founder, Arkion Labs | Senior Full Stack Developer. Enterprise SaaS professionally, AI products independently.",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={jetbrainsMono.className}>{children}</div>;
}
