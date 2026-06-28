"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const skills = [
  "JavaScript", "Python", "Java", "Scala", "React", "Next.js",
  "Node.js", "TypeScript", "AWS", "DynamoDB", "Lambda", "CDK",
  "Spark", "MongoDB", "PyTorch", "BERT", "FAISS", "LangChain",
  "TensorFlow.js", "AI Agents", "Claude", "Tailwind", "Docker",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-40 md:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Photo + caption */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative aspect-[3/4] w-full max-w-[400px]">
              <Image
                src="/images/i8.jpeg"
                alt="Mallika at Amazon Bengaluru"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[11px] text-white/25 mt-4 font-[var(--font-mono)] tracking-wide">
              Amazon Bengaluru, 2026
            </p>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            className="lg:col-span-7 lg:pt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-12 leading-[1.1]">
              I was a writer before
              <br />
              <span className="text-gradient">I was an engineer.</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-base md:text-lg text-white/50 leading-relaxed">
                CSE at MNNIT Allahabad. SDE Intern at Amazon, where I build
                distributed pipelines and AI agents serving 22 global marketplaces.
              </p>
              <p className="text-base md:text-lg text-white/50 leading-relaxed">
                Self-prepared for JEE in 2.5 months. Learned discipline from my mother.
                Haven&apos;t stopped since.
              </p>
            </div>

            {/* Achievement pills — sparse, elegant */}
            <div className="flex flex-wrap gap-3 mb-16">
              {["9.01 CPI", "Published Author", "450+ LeetCode", "1st in Speech"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-[11px] tracking-wide text-white/40 border border-white/10 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill Marquee — full width, below */}
        <motion.div
          className="mt-32 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-[10px] text-white/20 font-[var(--font-mono)] tracking-[0.2em] uppercase mb-6">
            Technologies
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={i}
                  className="mx-4 text-sm text-white/20 hover:text-white/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
