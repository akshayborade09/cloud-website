import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krutrim Cloud | AI Cloud Platform",
  description: "Interactive AI Cloud website built with Next.js and WebGL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
