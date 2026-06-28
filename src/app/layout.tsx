import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ten-indol-oj9plc1du2.vercel.app"),
  title: "Mallika Verma — Writer Who Codes",
  description:
    "CSE @ MNNIT Allahabad · SDE Intern @ Amazon. Writer who codes. Engineer who thinks in stories.",
  openGraph: {
    title: "Mallika Verma — Writer Who Codes",
    description: "CSE @ MNNIT Allahabad · SDE Intern @ Amazon.",
    type: "website",
    images: ["/images/me.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallika Verma — Writer Who Codes",
    images: ["/images/me.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
