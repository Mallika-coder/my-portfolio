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

const navButtons = [
  { label: "View Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "My Writing", href: "/writing" },
  { label: "Contact Me", href: "/contact" },
];

const skills = [
  "Python", "Java", "Scala", "React", "Next.js", "AWS", "CDK",
  "Spark", "AI Agents", "Claude", "PyTorch", "TypeScript",
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

      <main className="bg-[#0a0a0a] min-h-screen">
        {/* ===== HERO — Full viewport, your photo center ===== */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
          {/* Subtle bg gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0b15] to-[#0a0a0a]" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Photo — circular, face clearly visible */}
            <motion.div
              className="relative w-44 h-44 md:w-56 md:h-56 mb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            >
              {/* Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-br from-sky-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-xl" />
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-sky-400 via-purple-400 to-pink-400 opacity-60" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#0a0a0a]">
                <Image
                  src="/images/i6.jpeg"
                  alt="Mallika Verma"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="224px"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-[var(--font-playfair)] font-bold text-white leading-[1.1] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              Mallika Verma
            </motion.h1>

            {/* Writer who codes */}
            <motion.p
              className="text-xl md:text-2xl text-gradient font-[var(--font-playfair)] italic mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.7 }}
            >
              Writer who codes.
            </motion.p>

            {/* Brief intro */}
            <motion.p
              className="text-sm md:text-base text-white/40 max-w-lg mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              SDE Intern at Amazon · CSE @ MNNIT Allahabad · Building AI agents
              and distributed pipelines for 22 global marketplaces.
            </motion.p>

            {/* Navigation buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.6 }}
            >
              {navButtons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-6 py-3 border border-white/15 text-xs tracking-wide text-white/60 hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
                >
                  {btn.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== BRIEF ABOUT + SIDE PHOTOS ===== */}
        <section className="py-32 md:py-44 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            {/* Two side photos — me1 and me2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
              <motion.div
                className="relative aspect-[3/4] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/me1.jpeg"
                  alt="Mallika"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>

              <motion.div
                className="text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold mb-6 leading-tight">
                  I was a writer before
                  <br />
                  <span className="text-gradient">I was an engineer.</span>
                </h2>
                <p className="text-sm text-white/35 leading-relaxed mb-6">
                  Self-prepared for JEE in 2.5 months. Built AI agents at Amazon
                  that hit 100% accuracy. Published co-author. 450+ LeetCode. 9.01 CPI.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Amazon", "MNNIT", "9.01 CPI", "Published Author"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-[10px] text-white/30 border border-white/8 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative aspect-[3/4] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/me2.jpeg"
                  alt="Mallika"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </div>

            {/* Skills marquee */}
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
              <div className="flex animate-marquee whitespace-nowrap py-4">
                {[...skills, ...skills].map((skill, i) => (
                  <span key={i} className="mx-4 text-sm text-white/15">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== BENGALURU — Quick photo strip ===== */}
        <section className="py-20 overflow-hidden">
          <div className="px-8 md:px-16 lg:px-24 mb-10">
            <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-white/80">
              Bengaluru, 2026
            </h3>
            <p className="text-xs text-white/25 mt-2">8 weeks at Amazon. A lot changed.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-8 md:px-16 lg:px-24">
            {["/images/i7.jpeg", "/images/i3.jpeg", "/images/i4.jpeg", "/images/i1.jpeg", "/images/i5.jpeg", "/images/i2.jpeg"].map((src, i) => (
              <motion.div
                key={src}
                className="flex-shrink-0 relative w-[200px] md:w-[260px] h-[280px] md:h-[340px] rounded-lg overflow-hidden group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Image src={src} alt="Amazon Bengaluru" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="260px" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-16 px-8 md:px-16 text-center border-t border-white/5">
          <p className="text-xs text-white/20 font-[var(--font-playfair)] italic">
            Built by Mallika — writer, engineer, eternal work in progress.
          </p>
        </footer>
      </main>
    </>
  );
}
