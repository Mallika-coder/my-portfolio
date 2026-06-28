"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  const displayValue = target < 10
    ? count.toFixed(2)
    : Math.floor(count).toString();

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-gradient font-[var(--font-playfair)]">
        {displayValue}{suffix}
      </div>
      <div className="text-xs text-[#1a1035]/50 mt-2 tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="about" className="py-36 md:py-48 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/40 to-sky-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-16 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          I was a writer before
          <br />
          <span className="text-gradient">I was an engineer.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Photo — 2 cols */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/20">
              <div className="absolute -inset-2 bg-gradient-to-br from-sky-300/30 via-purple-300/30 to-pink-300/30 rounded-3xl blur-lg -z-10" />
              <Image
                src="/images/i8.jpeg"
                alt="Mallika coding at desk"
                fill
                className="object-cover"
              />
            </div>
            {/* MNNIT badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 glass rounded-2xl p-3 shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Image
                src="/images/MNNIT logo.jpg"
                alt="MNNIT"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xs font-medium text-[#1a1035]/70">MNNIT Allahabad</span>
            </motion.div>
          </motion.div>

          {/* Text — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <motion.p
              className="text-lg md:text-xl text-[#1a1035]/70 leading-relaxed"
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textReveal}
            >
              I&apos;m Mallika — a second-year CSE student at MNNIT Allahabad
              and SDE Intern at Amazon, where I build distributed data pipelines
              and AI agents for 22 global marketplaces. CPI: 9.01.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-[#1a1035]/70 leading-relaxed"
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textReveal}
            >
              Before I wrote code, I wrote sentences. I&apos;m a published
              co-author, a speech competition winner, and someone who believes
              the best engineering, like the best writing, is honest and precise.
              Every line has a reason. Every system has a story.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-[#1a1035]/70 leading-relaxed"
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textReveal}
            >
              The best 8 weeks of my life were spent at Amazon in Bengaluru —
              debugging things nobody had debugged before, building AI agents
              from scratch, and learning that &quot;working&quot; and
              &quot;correct&quot; are not the same thing.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-24 glass rounded-3xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatedCounter target={9.01} label="CPI" />
          <AnimatedCounter target={1} label="Amazon Intern" />
          <AnimatedCounter target={22} label="Marketplaces" />
          <AnimatedCounter target={100} label="Agent Accuracy" suffix="%" />
          <AnimatedCounter target={1} label="Published Author" />
          <AnimatedCounter target={450} label="LeetCode" suffix="+" />
        </motion.div>
      </div>
    </section>
  );
}
