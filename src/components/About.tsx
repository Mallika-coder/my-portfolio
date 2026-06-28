"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, label }: { target: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * numericTarget;
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, numericTarget]);

  const displayValue = target.includes(".")
    ? count.toFixed(2)
    : target.includes("+")
    ? `${Math.floor(count)}+`
    : target.includes("%")
    ? `${Math.floor(count)}%`
    : Math.floor(count).toString();

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-amber-400 font-[var(--font-mono)]">
        {displayValue}
      </div>
      <div className="text-xs md:text-sm text-[#f5f5f0]/60 mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          I was a writer before
          <br />
          <span className="text-amber-400">I was an engineer.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-400/20 glow-amber">
              <Image
                src="/images/i8.jpeg"
                alt="Mallika coding at desk"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/images/MNNIT logo.jpg"
                alt="MNNIT Allahabad"
                width={40}
                height={40}
                className="rounded-full border border-amber-400/20"
              />
              <span className="text-sm font-[var(--font-mono)] text-amber-400/70">
                MNNIT Allahabad · B.Tech CSE
              </span>
            </div>
            <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
              I&apos;m Mallika — a second-year CSE student at MNNIT Allahabad
              and SDE Intern at Amazon, where I build distributed data pipelines
              and AI agents for 22 global marketplaces. CPI: 9.01.
            </p>
            <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
              Before I wrote code, I wrote sentences. I&apos;m a published
              co-author, a speech competition winner, and someone who believes
              the best engineering, like the best writing, is honest and precise.
              Every line has a reason. Every system has a story.
            </p>
            <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
              The best 8 weeks of my life were spent at Amazon in Bengaluru —
              debugging things nobody had debugged before, building AI agents
              from scratch, and learning that &quot;working&quot; and
              &quot;correct&quot; are not the same thing.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20 p-8 rounded-2xl bg-[#0d0f1a]/50 border border-white/5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatedCounter target="9.01" label="CPI" />
          <AnimatedCounter target="1" label="Amazon Intern" />
          <AnimatedCounter target="22" label="Marketplaces" />
          <AnimatedCounter target="100%" label="Agent Accuracy" />
          <AnimatedCounter target="1" label="Published Author" />
          <AnimatedCounter target="450+" label="LeetCode" />
        </motion.div>
      </div>
    </section>
  );
}
