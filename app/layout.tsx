import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DotAISlash · VERSA 1.0",
  description:
    "DotAISlash maintains VERSA, the vendor-neutral extensible repo spec for agents, plus the CodeVibe design system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="fixed inset-0 -z-50 bg-background" />
        <div className="fixed inset-0 -z-40 opacity-40 [background-image:radial-gradient(ellipse_at_top,#6C137F33,transparent_55%),radial-gradient(ellipse_at_bottom,#0DD9FF22,transparent_60%)]" />
        <div className="fixed inset-0 -z-30 opacity-40 [background:radial-gradient(circle_at_1px_1px,#1B1D22 1px,transparent 0)] [background-size:48px_48px]" />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
