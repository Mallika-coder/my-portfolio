"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "DriveSafer AI",
    subtitle: "ML pipeline running at 30fps in the browser",
    description:
      "20-module ML pipeline trained on 28K samples achieving 97.8% frame accuracy. 7-signal fusion — eye tracking, head pose, PERCLOS, yawn detection. 67% fewer false positives via multi-signal confirmation. Federated learning with ε-DP so driver data never leaves the vehicle. SAE J3016-inspired 5-level Autocare Protocol.",
    stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn", "Federated Learning"],
    metrics: ["97.8% accuracy", "30fps", "67% fewer false positives"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    gradient: "from-sky-400 to-blue-500",
    dot: "bg-sky-400",
  },
  {
    title: "MindGuard",
    subtitle: "AI-powered mental health classification & chatbot",
    description:
      "Fine-tuned BERT on 200K Reddit posts for 5-class mental health classification (F1: 0.87, AUC-ROC: 0.92). Built RAG pipeline with FAISS vector search + LangChain for grounded therapeutic responses. Multilingual CBT chatbot with voice I/O, clinical instruments (PHQ-9/GAD-7), ML pipeline visualizer.",
    stack: ["PyTorch", "BERT", "FAISS", "LangChain", "React.js"],
    metrics: ["F1: 0.87", "AUC-ROC: 0.92", "RAG pipeline"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    gradient: "from-purple-400 to-violet-500",
    dot: "bg-purple-400",
  },
  {
    title: "MallikaAI",
    subtitle: "Full AI assistant — free alternative to Claude",
    description:
      "Multi-model AI platform supporting GPT-4o, Claude, LLaMA 3.1 via Groq. Live Python code execution, real-time web search, voice input, file upload, document generation. Chrome extension included.",
    stack: ["Next.js 14", "FastAPI", "LLaMA 3.1 70B", "WebSocket"],
    metrics: ["Multi-model", "Code execution", "Free"],
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
    gradient: "from-pink-400 to-rose-500",
    dot: "bg-pink-400",
  },
  {
    title: "CureCue",
    subtitle: "Gamified wellness platform with AI Oracle",
    description:
      "Full-stack wellness platform with generative AI Oracle for personalized health guidance. JWT + bcrypt authentication. Scalable MongoDB architecture. Gamified health tracking system.",
    stack: ["Next.js 14", "MongoDB", "LLM APIs", "JWT"],
    metrics: ["AI Oracle", "Gamified", "Full-stack"],
    live: "https://curecue312.vercel.app/",
    github: "",
    gradient: "from-emerald-400 to-green-500",
    dot: "bg-emerald-400",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 md:py-44 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute inset-0 mesh-gradient-3 -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
            Things I <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              data-cursor="project"
              className="glass-strong rounded-2xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              {/* Header — always visible */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center gap-4 group"
              >
                {/* Dot */}
                <div className={`w-2.5 h-2.5 rounded-full ${project.dot} flex-shrink-0`} />

                {/* Title + subtitle */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-[#1a1035] group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#1a1035]/40 mt-0.5 truncate">
                    {project.subtitle}
                  </p>
                </div>

                {/* Links + arrow */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:flex text-xs text-[#1a1035]/40 hover:text-purple-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:flex text-xs text-[#1a1035]/40 hover:text-purple-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code ↗
                    </a>
                  )}
                  <motion.span
                    className="text-[#1a1035]/30 text-lg"
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ↓
                  </motion.span>
                </div>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      {/* Divider */}
                      <div className={`h-[1px] bg-gradient-to-r ${project.gradient} opacity-20 mb-5`} />

                      <p className="text-sm text-[#1a1035]/60 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-3 py-1.5 text-[11px] font-semibold bg-white/60 text-[#1a1035]/60 rounded-full border border-white/80"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] text-purple-600/60 bg-purple-50/60 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Mobile links */}
                      <div className="flex gap-4 mt-5 md:hidden">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-500 font-medium">
                            Live Demo ↗
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-500 font-medium">
                            Source Code ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
