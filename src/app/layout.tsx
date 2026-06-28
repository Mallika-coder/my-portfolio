import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-web-booster12.vercel.app"),
  title: "Mallika Verma — Writer Who Codes",
  description:
    "Portfolio of Mallika Verma — CSE @ MNNIT Allahabad, SDE Intern @ Amazon. Writer who codes. Engineer who thinks in stories.",
  keywords: [
    "Mallika Verma",
    "SDE Intern",
    "Amazon",
    "MNNIT Allahabad",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Mallika Verma" }],
  openGraph: {
    title: "Mallika Verma — Writer Who Codes",
    description:
      "CSE @ MNNIT Allahabad · SDE Intern @ Amazon. Writer who codes. Engineer who thinks in stories.",
    type: "website",
    images: ["/images/me.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallika Verma — Writer Who Codes",
    description:
      "CSE @ MNNIT Allahabad · SDE Intern @ Amazon. Writer who codes. Engineer who thinks in stories.",
    images: ["/images/me.jpeg"],
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
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-[#faf8ff] text-[#1a1035] font-[var(--font-inter)] antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
