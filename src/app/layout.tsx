import "./globals.css";

/*
 * T01 stub shell. The Recoil provider, particle field, background audio,
 * theme sync, and start animation were removed with the V1 site (decision D1).
 *
 * T02 adds the JetBrains Mono font variable.
 * T04 adds the header, nav drawer, scanlines, and footer.
 * T13 replaces this metadata with the real per-route set.
 */

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
