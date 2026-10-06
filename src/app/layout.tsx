import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/chrome/Preloader";
import Navbar from "@/components/chrome/Navbar";
import Footer from "@/components/chrome/Footer";
import PageTransition from "@/components/chrome/PageTransition";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ironwood.net.au"),
  title: {
    default: "Ironwood Carpentry & Construction | Sydney's Western Suburbs",
    template: "%s | Ironwood Carpentry & Construction",
  },
  description:
    "Premium residential construction and carpentry across Sydney's Western Suburbs. New home builds, renovations, extensions, decks and custom timber work — crafted to last. ABN 83 701 114 614.",
  keywords: [
    "builder Sydney",
    "carpentry Western Sydney",
    "renovations Plumpton",
    "new home builder",
    "timber decking",
    "custom joinery",
  ],
  icons: { icon: "/images/icon.png" },
  openGraph: {
    title: "Ironwood Carpentry & Construction",
    description:
      "Homes and timber work built to be handed down. Sydney's Western Suburbs.",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full bg-cream text-ink">
        <Preloader />
        {/* <CustomCursor />  <-- REMOVED */}
        <PageTransition />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}