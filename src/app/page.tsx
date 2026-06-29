"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const EasterEgg = dynamic(() => import("@/components/EasterEgg"), { ssr: false });
const Terminal = dynamic(() => import("@/components/Terminal"), { ssr: false });

const chapters = [
  {
    num: "01",
    title: "Production Code",
    desc: "AI Agents, ML pipelines, & Distributed Systems",
    href: "/projects",
  },
  {
    num: "02",
    title: "The Editorial Room",
    desc: "Published essays, & technical journalism",
    href: "/writing",
  },
  {
    num: "03",
    title: "Off the Clock",
    desc: "Podiums, public speaking, and team dynamics",
    href: "/beyond",
  },
];

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    };
    initLenis();
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <EasterEgg />
      <Terminal />

      <main className="bg-[#1a1a1a] min-h-screen relative overflow-hidden">
        {/* ===== TOP BAR ===== */}
        <motion.header
          className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-20 py-6 border-b border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs md:text-sm font-[var(--font-mono)] text-white/50 tracking-wide">
            MNNIT &nbsp;// &nbsp;AMAZON SDE
          </span>
          <span className="text-xs md:text-sm font-[var(--font-mono)] text-white/50 tracking-wide">
            Available Late 2026
          </span>
        </motion.header>

        {/* ===== MAIN HERO CONTENT ===== */}
        <section className="relative z-10 px-8 md:px-16 lg:px-20 pt-12 md:pt-20 pb-16">
          <div className="max-w-[1400px] mx-auto">
            {/* Name — massive */}
            <motion.h1
              className="text-[clamp(3.5rem,10vw,9rem)] font-[var(--font-playfair)] font-bold text-white/90 leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              Mallika Verma
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-white/60 font-[var(--font-playfair)] italic mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              Writer who codes.
            </motion.p>

            {/* Intro paragraph */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-white/40 max-w-3xl leading-relaxed mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.8 }}
            >
              I write the way I code — every word has a reason. Currently building
              autonomous AI agents at Amazon and studying Computer Science at MNNIT
              Allahabad. Bridging the gap between technical depth and honest reflection.
            </motion.p>

            {/* CHAPTERS OF MY WORK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <p className="text-[10px] font-[var(--font-mono)] text-white/30 tracking-[0.3em] uppercase mb-6">
                Chapters of My Work
              </p>
              <div className="border-t border-white/10" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {chapters.map((ch) => (
                  <Link
                    key={ch.num}
                    href={ch.href}
                    className="group block py-8 md:pr-8 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-white/10 hover:bg-white/[0.02] transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-[var(--font-playfair)] font-bold text-white/80 group-hover:text-white transition-colors mb-2">
                      {ch.num} // {ch.title}
                    </h3>
                    <p className="text-sm text-white/30 italic">
                      — {ch.desc}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 mt-0" />

              {/* Additional links */}
              <div className="flex gap-8 mt-6">
                <Link href="/experience" className="text-xs text-white/30 hover:text-white transition-colors font-[var(--font-mono)]">
                  Experience ↗
                </Link>
                <Link href="/contact" className="text-xs text-white/30 hover:text-white transition-colors font-[var(--font-mono)]">
                  Contact ↗
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== PHOTO — positioned on the right, overlapping ===== */}
        <motion.div
          className="absolute top-[100px] right-0 w-[40%] h-[calc(100%-160px)] hidden lg:block z-[5]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 1.2 }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/i6.jpeg"
              alt="Mallika Verma"
              fill
              className="object-contain object-right-bottom"
              priority
              sizes="40vw"
            />
            {/* Subtle overlay on the left edge to blend with text */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent" />
          </div>
        </motion.div>

        {/* ===== FOOTER ===== */}
        <motion.footer
          className="relative z-20 py-8 px-8 md:px-16 lg:px-20 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <p className="text-sm text-white/30">
            © 2026 Mallika Verma. Built with Next.js & Tailwind.
          </p>
        </motion.footer>
      </main>
    </>
  );
}
