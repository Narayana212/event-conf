import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import Contact from "@/components/contact";

const inter = Montserrat({ subsets: ["latin"] });

// const inter=GeistSans

export const metadata: Metadata = {
  title: "SUMMIT Conference",
  description: "SNIoE Undergraduate Multidisciplinary Mastery, Innovation and Talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen grainy overflow-x-hidden `}>
        <NextTopLoader color="#CD1739" showSpinner={false} />
        <Navbar />
        {children}
        <Contact/>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
