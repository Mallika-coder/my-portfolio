"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillGroups = [
  {
    name: "Languages",
    skills: ["JavaScript", "Python", "Java", "Scala", "C++", "C"],
    dot: "bg-sky-400",
    pillColor: "bg-sky-50 border-sky-100 text-sky-700",
    gradient: "from-sky-400/15 to-blue-400/10",
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML5"],
    dot: "bg-purple-400",
    pillColor: "bg-purple-50 border-purple-100 text-purple-700",
    gradient: "from-purple-400/15 to-violet-400/10",
  },
  {
    name: "Backend & Data",
    skills: ["Node.js", "Express.js", "Apache Spark", "RESTful APIs"],
    dot: "bg-emerald-400",
    pillColor: "bg-emerald-50 border-emerald-100 text-emerald-700",
    gradient: "from-emerald-400/15 to-green-400/10",
  },
  {
    name: "Cloud & Infra",
    skills: ["AWS S3", "DynamoDB", "Lambda", "EMR", "Step Functions", "EventBridge", "CDK", "CloudFormation"],
    dot: "bg-amber-400",
    pillColor: "bg-amber-50 border-amber-100 text-amber-700",
    gradient: "from-amber-400/15 to-orange-400/10",
  },
  {
    name: "AI & ML",
    skills: [
      "Prompt Engineering", "AI Agent", "Claude Sonnet 4.5", "LLM APIs",
      "PyTorch", "BERT", "FAISS", "LangChain", "TensorFlow.js", "MediaPipe", "scikit-learn",
    ],
    dot: "bg-pink-400",
    pillColor: "bg-pink-50 border-pink-100 text-pink-700",
    gradient: "from-pink-400/15 to-rose-400/10",
  },
  {
    name: "Databases",
    skills: ["MongoDB", "DynamoDB", "Firebase", "SQLite"],
    dot: "bg-violet-400",
    pillColor: "bg-violet-50 border-violet-100 text-violet-700",
    gradient: "from-violet-400/15 to-purple-400/10",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 280;
    const scrollAmount = direction === "left" ? -(cardWidth + 20) : cardWidth + 20;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 280;
    const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + 20));
    setActiveIndex(index);
  };

  return (
    <div id="skills" className="py-20 md:py-28" ref={ref}>
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/40 to-purple-100/20 rounded-full blur-3xl -z-10" />

        {/* Header */}
        <div className="px-6 md:px-12 lg:px-16 mb-10">
          <motion.div
            className="flex items-end justify-between max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
              What I <span className="text-gradient">Work With</span>
            </h2>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#1a1035]/50 hover:text-[#1a1035] hover:shadow-md transition-all"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#1a1035]/50 hover:text-[#1a1035] hover:shadow-md transition-all"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="py-4">
          <motion.div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-12 lg:px-16 pb-6 no-scrollbar"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.name}
                className={`snap-start flex-shrink-0 w-[250px] md:w-[290px] lg:w-[310px] p-6 md:p-7 rounded-3xl glass-strong bg-gradient-to-br ${group.gradient} border border-white/60 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/20`}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + gi * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                  <span className="text-sm font-bold text-[#1a1035]/70">
                    {group.name}
                  </span>
                  <span className="text-[10px] text-[#1a1035]/30 font-[var(--font-mono)] ml-auto">
                    {group.skills.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-medium border rounded-xl ${group.pillColor}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2 pb-4">
          {skillGroups.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-purple-400 w-5" : "bg-[#1a1035]/10 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
