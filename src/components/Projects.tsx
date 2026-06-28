"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "DriveSafer AI",
    subtitle: "ML pipeline running at 30fps in the browser",
    description:
      "20-module ML pipeline trained on 28K samples (97.8% accuracy). 7-signal fusion — eye tracking, head pose, PERCLOS, yawn detection. Federated learning with ε-DP.",
    stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn"],
    metrics: ["97.8% accuracy", "30fps", "67% fewer false positives"],
    learned: "Learned: 'working' and 'correct' are not the same thing.",
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    gradient: "from-sky-400/15 to-blue-400/10",
    dot: "bg-sky-400",
    accent: "border-sky-200/60",
  },
  {
    title: "MindGuard",
    subtitle: "AI mental health classification & RAG chatbot",
    description:
      "Fine-tuned BERT on 200K Reddit posts (F1: 0.87, AUC-ROC: 0.92). RAG pipeline with FAISS + LangChain. Multilingual CBT chatbot with voice I/O.",
    stack: ["PyTorch", "BERT", "FAISS", "LangChain", "React.js"],
    metrics: ["F1: 0.87", "AUC-ROC: 0.92", "RAG pipeline"],
    learned: "Learned: the hardest part of AI isn't making it smart. It's making it honest.",
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    gradient: "from-purple-400/15 to-violet-400/10",
    dot: "bg-purple-400",
    accent: "border-purple-200/60",
  },
  {
    title: "MallikaAI",
    subtitle: "Multi-model AI assistant — free alternative",
    description:
      "GPT-4o, Claude, LLaMA 3.1 via Groq. Live Python code execution, real-time web search, voice input, file upload. Chrome extension included.",
    stack: ["Next.js 14", "FastAPI", "LLaMA 3.1 70B", "WebSocket"],
    metrics: ["Multi-model", "Code execution", "Free"],
    learned: "Learned: if you build it free, people will actually use it. Distribution beats perfection.",
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
    gradient: "from-pink-400/15 to-rose-400/10",
    dot: "bg-pink-400",
    accent: "border-pink-200/60",
  },
  {
    title: "CureCue",
    subtitle: "Gamified wellness platform with AI Oracle",
    description:
      "Full-stack wellness platform with generative AI Oracle for personalized health guidance. JWT + bcrypt authentication. Scalable MongoDB architecture.",
    stack: ["Next.js 14", "MongoDB", "LLM APIs", "JWT"],
    metrics: ["AI Oracle", "Gamified", "Full-stack"],
    learned: "Learned: gamification isn't a gimmick — it's how you make people care about their own health.",
    live: "https://curecue312.vercel.app/",
    github: "",
    gradient: "from-emerald-400/15 to-green-400/10",
    dot: "bg-emerald-400",
    accent: "border-emerald-200/60",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 400;
    const scrollAmount = direction === "left" ? -(cardWidth + 20) : cardWidth + 20;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 400;
    const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + 20));
    setActiveIndex(index);
  };

  return (
    <div id="projects" className="py-28 md:py-36" ref={ref}>
      <div className="relative">
        <div className="absolute inset-0 mesh-gradient-3 -z-10" />

        {/* Header */}
        <div className="px-6 md:px-12 lg:px-16 mb-14">
          <motion.div
            className="flex items-end justify-between max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
              Things I <span className="text-gradient">Built</span>
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
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                data-cursor="project"
                className={`snap-start flex-shrink-0 w-[310px] md:w-[380px] lg:w-[420px] rounded-3xl glass-strong bg-gradient-to-br ${project.gradient} border ${project.accent} hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/20 flex flex-col`}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2.5 h-2.5 rounded-full ${project.dot}`} />
                    <span className="text-[10px] text-[#1a1035]/35 font-[var(--font-mono)]">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#1a1035] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#1a1035]/50 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((m) => (
                      <span key={m} className="px-2.5 py-1 text-[10px] font-semibold bg-white/60 text-[#1a1035]/60 rounded-full">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[9px] font-[var(--font-mono)] text-purple-600/60 bg-purple-50/60 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.learned && (
                    <p className="text-[11px] italic text-[#1a1035]/40 mb-4 leading-relaxed">
                      {project.learned}
                    </p>
                  )}

                  <div className="flex gap-4 pt-3 border-t border-white/40 mt-auto">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-purple-500 hover:text-purple-700 transition-colors">
                        Live ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#1a1035]/40 hover:text-[#1a1035] transition-colors">
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2 pb-4">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-purple-400 w-6" : "bg-[#1a1035]/10 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
