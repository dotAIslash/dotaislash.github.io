import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@iconscout/unicons/css/line.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dotAIslash · VERSA 1.0 | One .ai/ folder, every runtime",
  description:
    "The vendor-neutral extensible repo spec for agents. Capture rules, prompts, agents, and more in one portable .ai/ folder. Ship to any IDE, CLI, or hosted copilot.",
  keywords: [
    "VERSA",
    "dotAIslash",
    ".ai folder",
    "AI agents",
    "agent configuration",
    "Cursor",
    "Windsurf",
    "Claude",
    "developer tools",
    "agentic coding",
  ],
  authors: [{ name: "dotAIslash Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotaislash.github.io",
    siteName: "dotAIslash",
    title: "VERSA 1.0 | Portable .ai/ folder spec for agents",
    description:
      "One .ai/ folder, every runtime. The vendor-neutral spec for agentic coding contexts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VERSA 1.0 | dotAIslash",
    description: "One .ai/ folder, every runtime. Portable agent configuration spec.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed inset-0 -z-50 bg-gray-950" />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
