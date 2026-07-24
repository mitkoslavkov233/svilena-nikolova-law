import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Адвокатска Кантора Свилена Николова | Варна",
  description:
    "Адвокатска кантора Свилена Николова — граждански, облигационно, вещно и търговско право във Варна. Индивидуален подход и ясна комуникация на всеки етап от делото.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream font-sans text-ink antialiased">
        <Navbar />
        <ViewTransition enter="page-fade-in" exit="page-fade-out">
          <main className="flex-1">{children}</main>
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
