import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AuraAgency | Premium Creative Digital Studio & Boilerplate",
  description: "A dark-mode exclusive, blazing-fast Next.js 16 template featuring Bento Grids, glassmorphism, and premium developer architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} antialiased dark`}>
      <body className="font-sans min-h-screen bg-zinc-black text-zinc-50 flex flex-col selection:bg-primary-purple/20 selection:text-white">
        {/* Ambient background decoration */}
        <div className="ambient-bg" />
        <div className="ambient-grid" />
        
        {/* Navigation Header */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-10">
          {children}
        </main>
        
        {/* Footnotes & Sitemap */}
        <Footer />
      </body>
    </html>
  );
}
