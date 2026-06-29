"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM, FaWhatsapp } from "react-icons/fa";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const EasterEgg = dynamic(() => import("@/components/EasterEgg"), { ssr: false });
const Terminal = dynamic(() => import("@/components/Terminal"), { ssr: false });

const bubbles = [
  { label: "Projects", href: "/projects", x: "right-[8%]", y: "top-[18%]", delay: 2.4 },
  { label: "Experience", href: "/experience", x: "right-[22%]", y: "top-[38%]", delay: 2.6 },
  { label: "Writing", href: "/writing", x: "right-[5%]", y: "top-[55%]", delay: 2.8 },
  { label: "Beyond Code", href: "/beyond", x: "right-[18%]", y: "top-[72%]", delay: 3.0 },
  { label: "Contact", href: "/contact", x: "right-[8%]", y: "top-[88%]", delay: 3.2 },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Mallika-coder", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mallikaverma58/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/creative_mallika_0542/", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/919999999999", label: "WhatsApp" },
  { icon: FaMediumM, href: "https://medium.com/@mallikav", label: "Medium" },
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
        {/* ===== HERO — Photo left/center, floating bubbles, socials right ===== */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 via-pink-500/3 to-transparent rounded-full blur-3xl" />

          {/* Name + tagline — top left */}
          <motion.div
            className="absolute top-8 left-8 md:left-16 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white">
              Mallika Verma
            </h1>
            <p className="text-sm text-gradient font-[var(--font-playfair)] italic mt-1">
              Writer who codes.
            </p>
          </motion.div>

          {/* Social links — rightmost side, vertical */}
          <motion.div
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/25 hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Main photo — your edited cutout, center-left */}
          <motion.div
            className="relative z-10 flex items-end justify-center lg:justify-start h-screen px-8 md:px-16 lg:px-20 pb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1.2 }}
          >
            <div className="relative w-[320px] md:w-[420px] lg:w-[500px] h-[85vh] md:h-[90vh]">
              <Image
                src="/images/hero-cutout.jpeg"
                alt="Mallika Verma — See my Work"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 500px"
              />
            </div>
          </motion.div>

          {/* Floating navigation bubbles — scattered around center-right area */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.label}
              className={`absolute ${bubble.x} ${bubble.y} z-20 hidden md:block`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: bubble.delay, duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link
                  href={bubble.href}
                  className="group block px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                    {bubble.label}
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ))}

          {/* Mobile: show bubbles as a row at bottom */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 z-20 flex md:hidden justify-center gap-2 px-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            {bubbles.map((bubble) => (
              <Link
                key={bubble.label}
                href={bubble.href}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/50"
              >
                {bubble.label}
              </Link>
            ))}
          </motion.div>
        </section>

        {/* ===== BRIEF SECTION — i6 photo + quick intro ===== */}
        <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* i6 photo */}
            <motion.div
              className="relative aspect-[3/4] max-w-[380px] rounded-2xl overflow-hidden mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/i6.jpeg"
                alt="Mallika at Amazon office"
                fill
                className="object-contain"
                sizes="380px"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold mb-6 leading-tight">
                I was a writer
                <br />
                <span className="text-gradient">before I was an engineer.</span>
              </h2>
              <p className="text-base text-white/40 leading-relaxed mb-6">
                SDE Intern at Amazon, Bengaluru. Building autonomous AI agents and
                distributed pipelines for 22 global marketplaces. CSE @ MNNIT Allahabad.
                9.01 CPI. Published co-author. 450+ LeetCode.
              </p>
              <p className="text-sm text-white/30 leading-relaxed mb-8">
                Self-prepared for JEE in 2.5 months. Learned discipline from my mother.
                Haven&apos;t stopped sprinting since.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Amazon", "MNNIT", "9.01 CPI", "Published Author", "450+ LC"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-[10px] text-white/30 border border-white/8 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== BENGALURU STRIP ===== */}
        <section className="py-20 overflow-hidden">
          <div className="px-8 md:px-16 lg:px-24 mb-12">
            <h3 className="text-3xl font-[var(--font-playfair)] font-bold text-white/80">Bengaluru, 2026</h3>
            <p className="text-sm text-white/25 mt-2">8 weeks. Most of it wasn&apos;t in the job description.</p>
          </div>
          <div className="flex gap-5 overflow-x-auto no-scrollbar px-8 md:px-16 lg:px-24 pb-4">
            {[
              { src: "/images/i7.jpeg", caption: "Day 1 — permission to not know anything yet." },
              { src: "/images/i3.jpeg", caption: "Sitting with a problem. Not solving it. Sitting with it." },
              { src: "/images/i4.jpeg", caption: "'You are what you believe yourself to be.'" },
              { src: "/images/i1.jpeg", caption: "Building from a window seat in Bengaluru." },
              { src: "/images/i5.jpeg", caption: "The badge comes off. The code stays deployed." },
              { src: "/images/i2.jpeg", caption: "This desk saw v1 through v7." },
            ].map((photo, i) => (
              <motion.div
                key={photo.src}
                className="flex-shrink-0 relative w-[240px] md:w-[280px] rounded-xl overflow-hidden group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative h-[320px] md:h-[370px]">
                  <Image src={photo.src} alt="Amazon Bengaluru" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="280px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] text-white/70 leading-relaxed font-[var(--font-playfair)] italic backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-12 px-8 md:px-16 text-center border-t border-white/5">
          <p className="text-xs text-white/20">
            © 2026 Mallika Verma. Built with Next.js & Tailwind.
          </p>
        </footer>
      </main>
    </>
  );
}
