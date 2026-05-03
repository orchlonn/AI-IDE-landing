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
  title: "AI IDE — The AI-native code editor for builders",
  description:
    "A modern, AI-first IDE with project-aware chat, multi-agent backend, RAG over your codebase, an integrated terminal, and the editor you already know.",
  metadataBase: new URL("https://ai-ide.local"),
  openGraph: {
    title: "AI IDE — The AI-native code editor",
    description:
      "Project-aware chat, multi-agent RAG, Monaco editor, and an integrated terminal — all in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
