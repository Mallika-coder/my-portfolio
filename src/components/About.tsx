"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const skillsRow1 = [
  "JavaScript", "Python", "Java", "Scala", "React.js", "Next.js",
  "Node.js", "TypeScript", "AWS", "DynamoDB", "Lambda", "CDK",
  "EventBridge", "Spark", "MongoDB",
];

const skillsRow2 = [
  "PyTorch", "BERT", "FAISS", "LangChain", "TensorFlow.js",
  "AI Agents", "Claude", "Tailwind CSS", "Framer Motion",
  "EMR", "C++", "Docker", "Firebase", "REST APIs",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-44 px-6 md:px-12 lg:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-20 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          I was a writer before
          <br />
          <span className="text-gradient">I was an engineer.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-[360px] mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-br from-sky-500/15 via-purple-500/15 to-pink-500/15 rounded-2xl blur-xl -z-10" />
              <Image
                src="/images/i8.jpeg"
                alt="Mallika at Amazon Bengaluru"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Text — short, breathable */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-lg text-white/55 leading-relaxed">
              I&apos;m Mallika — CSE at MNNIT Allahabad, SDE Intern at Amazon.
              I build distributed pipelines and AI agents that serve 22 global marketplaces.
            </p>

            <p className="text-lg text-white/55 leading-relaxed">
              Self-prepared for JEE in 2.5 months. Learned discipline from my mother.
              Haven&apos;t stopped since.
            </p>

            {/* Achievement pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "SDE Intern @ Amazon",
                "9.01 CPI",
                "Published Author",
                "450+ LeetCode",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-xs text-white/50 border border-white/10 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill Marquee — with fade edges */}
        <motion.div
          className="mt-28 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

            {/* Row 1 */}
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {[...skillsRow1, ...skillsRow1].map((skill, i) => (
                <span
                  key={`a-${i}`}
                  className="mx-2 px-4 py-2 text-[11px] text-white/30 border border-white/8 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Row 2 — reversed */}
            <div
              className="flex animate-marquee whitespace-nowrap py-4"
              style={{ animationDirection: "reverse", animationDuration: "40s" }}
            >
              {[...skillsRow2, ...skillsRow2].map((skill, i) => (
                <span
                  key={`b-${i}`}
                  className="mx-2 px-4 py-2 text-[11px] text-white/30 border border-white/8 rounded-full"
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
