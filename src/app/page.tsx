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
  { label: "View Projects", href: "/projects", desc: "AI, ML, Full-stack" },
  { label: "Experience", href: "/experience", desc: "Amazon SDE Intern" },
  { label: "My Writing", href: "/writing", desc: "Medium articles" },
  { label: "Beyond Code", href: "/beyond", desc: "Mentor, athlete, speaker" },
  { label: "Contact Me", href: "/contact", desc: "Let's connect" },
];

const skills = [
  "Python", "Java", "Scala", "React", "Next.js", "AWS", "CDK",
  "Spark", "AI Agents", "Claude", "PyTorch", "TypeScript",
  "MongoDB", "BERT", "LangChain", "TensorFlow.js",
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
        {/* ===== HERO — Split: text left, full photo right ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-[#0d0b15]" />

          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Identity + nav */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-[var(--font-playfair)] font-bold text-white leading-[1.05] mb-4">
                  Mallika
                  <br />
                  Verma
                </h1>

                <p className="text-xl md:text-2xl text-gradient font-[var(--font-playfair)] italic mb-4">
                  Writer who codes.
                </p>

                <p className="text-sm text-white/35 max-w-md mb-10 leading-relaxed">
                  SDE Intern at Amazon · CSE @ MNNIT Allahabad.
                  Building AI agents and distributed pipelines for 22 global marketplaces.
                </p>

                {/* Navigation buttons — interactive, animated */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {navButtons.map((btn, i) => (
                    <motion.div
                      key={btn.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 + i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <Link
                        href={btn.href}
                        className="group relative block p-5 border border-white/8 rounded-xl hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-sky-500/5 transition-all duration-400 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-sky-500/0 group-hover:from-purple-500/5 group-hover:to-sky-500/5 transition-all duration-500" />
                        <div className="relative">
                          <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                            {btn.label}
                          </span>
                          <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-white/40">→</span>
                          <p className="text-[10px] text-white/20 mt-1.5">{btn.desc}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Full photo — i6, whole body on sofa visible */}
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 1.2 }}
              >
                <div className="relative w-full aspect-[3/4] max-w-[450px] ml-auto rounded-2xl overflow-hidden">
                  {/* Glow behind */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl" />
                  <Image
                    src="/images/i6.jpeg"
                    alt="Mallika Verma sitting at Amazon office"
                    fill
                    className="object-cover object-center relative"
                    priority
                    sizes="450px"
                  />
                </div>
              </motion.div>

              {/* Mobile: show photo above content */}
              <motion.div
                className="lg:hidden relative w-full max-w-[300px] mx-auto aspect-[3/4] rounded-2xl overflow-hidden order-first"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <Image
                  src="/images/i6.jpeg"
                  alt="Mallika Verma"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="300px"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT — me1 and me2 side by side, full face visible ===== */}
        <section className="py-32 md:py-44 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* me1 — landscape photo, use object-right to show face */}
              <motion.div
                className="relative aspect-[4/5] rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/me1.jpeg"
                  alt="Mallika"
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>

              {/* Center text */}
              <motion.div
                className="text-center px-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold mb-6 leading-tight">
                  I was a writer
                  <br />
                  <span className="text-gradient">before I coded.</span>
                </h2>
                <p className="text-sm text-white/35 leading-relaxed mb-6">
                  Self-prepared for JEE in 2.5 months. Built AI agents at Amazon
                  that hit 100% accuracy. Published co-author. 9.01 CPI.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Amazon", "MNNIT", "9.01 CPI", "Author", "450+ LC"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-[10px] text-white/30 border border-white/8 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* me2 — portrait, face is centered */}
              <motion.div
                className="relative aspect-[4/5] rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/me2.jpeg"
                  alt="Mallika"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </div>

            {/* Skills marquee */}
            <div className="overflow-hidden relative mt-24">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
              <div className="flex animate-marquee whitespace-nowrap py-4">
                {[...skills, ...skills].map((skill, i) => (
                  <span key={i} className="mx-4 text-sm text-white/15">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== BENGALURU — with story captions ===== */}
        <section className="py-28 overflow-hidden">
          <div className="px-8 md:px-16 lg:px-24 mb-12">
            <h3 className="text-3xl font-[var(--font-playfair)] font-bold text-white/80">Bengaluru, 2026</h3>
            <p className="text-sm text-white/25 mt-2">8 weeks. Most of it wasn&apos;t in the job description.</p>
          </div>
          <div className="flex gap-5 overflow-x-auto no-scrollbar px-8 md:px-16 lg:px-24 pb-4">
            {[
              { src: "/images/i7.jpeg", caption: "Day 1 — the wall said DAY 1 and that felt like permission to not know anything yet." },
              { src: "/images/i3.jpeg", caption: "Nobody tells you how much of engineering is just sitting with a problem." },
              { src: "/images/i4.jpeg", caption: "'You are what you believe yourself to be.' Week 2, when the agent was failing on 6/14 criteria." },
              { src: "/images/i1.jpeg", caption: "Building things nobody had built before. From a window seat in Bengaluru." },
              { src: "/images/i5.jpeg", caption: "The badge comes off. The intern title disappears. But the code stays deployed." },
              { src: "/images/i2.jpeg", caption: "This desk saw v1 through v7. The first CR approved. The first moment I thought: maybe I belong here." },
            ].map((photo, i) => (
              <motion.div
                key={photo.src}
                className="flex-shrink-0 relative w-[240px] md:w-[300px] rounded-xl overflow-hidden group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative h-[320px] md:h-[400px]">
                  <Image src={photo.src} alt="Amazon Bengaluru" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[11px] text-white/60 leading-relaxed font-[var(--font-playfair)] italic">
                    {photo.caption}
                  </p>
                </div>
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
