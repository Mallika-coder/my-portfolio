"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DriveSafer AI",
    description:
      "20-module ML pipeline running at 30fps entirely in the browser. Trained MLP + Transformer on 28K samples (97.8% frame accuracy). 7-signal fusion — eye tracking, head pose, PERCLOS, yawn detection. 67% fewer false positives via multi-signal confirmation. Federated learning with ε-DP so driver data never leaves the vehicle. SAE J3016-inspired 5-level Autocare Protocol.",
    stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn", "Federated Learning"],
    metrics: ["97.8% accuracy", "30fps in-browser", "67% fewer false positives", "Federated learning"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    accent: "border-blue-500/30 hover:border-blue-400/60",
    glowColor: "hover:shadow-blue-500/20",
    featured: true,
  },
  {
    title: "MindGuard",
    description:
      "Fine-tuned BERT on 200K Reddit posts for 5-class mental health classification (F1: 0.87, AUC-ROC: 0.92). Built RAG pipeline with FAISS vector search + LangChain for grounded therapeutic responses. Multilingual CBT chatbot with voice I/O, clinical instruments (PHQ-9/GAD-7), ML pipeline visualizer. Deployed on Vercel + HuggingFace Spaces.",
    stack: ["PyTorch", "BERT", "FAISS", "LangChain", "React.js", "Web Speech API"],
    metrics: ["F1: 0.87", "AUC-ROC: 0.92", "200K training samples", "RAG pipeline"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    accent: "border-purple-500/30 hover:border-purple-400/60",
    glowColor: "hover:shadow-purple-500/20",
    featured: true,
  },
  {
    title: "MallikaAI",
    description:
      "Full AI assistant platform — multi-model support (GPT-4o, Claude, LLaMA 3.1 via Groq), live Python code execution, real-time web search, voice input, file upload, document generation. FREE alternative to Claude. Chrome extension included.",
    stack: ["Next.js 14", "FastAPI", "LLaMA 3.1 70B", "WebSocket", "SQLite"],
    metrics: ["Multi-model", "Live code execution", "Web search", "Free"],
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
    accent: "border-amber-500/30 hover:border-amber-400/60",
    glowColor: "hover:shadow-amber-500/20",
    featured: false,
  },
  {
    title: "CureCue",
    description:
      "Gamified full-stack wellness platform. Generative AI Oracle for personalized health guidance. JWT + bcrypt authentication. Scalable MongoDB architecture.",
    stack: ["Next.js 14", "MongoDB", "LLM APIs", "JWT", "bcrypt"],
    metrics: ["AI Oracle", "Gamified", "Full-stack", "Secure"],
    live: "https://curecue312.vercel.app/",
    github: "",
    accent: "border-green-500/30 hover:border-green-400/60",
    glowColor: "hover:shadow-green-500/20",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Things I <span className="text-amber-400">Built</span>
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`card-hover relative p-8 rounded-2xl bg-[#0d0f1a]/80 border ${project.accent} ${project.glowColor} hover:shadow-2xl transition-all duration-300 ${
                project.featured ? "md:col-span-1 row-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#f5f5f0]">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f5f5f0]/40 hover:text-amber-400 transition-colors text-sm"
                      >
                        Live ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f5f5f0]/40 hover:text-amber-400 transition-colors text-sm"
                      >
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#f5f5f0]/70 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-xs font-[var(--font-mono)] bg-white/5 text-[#f5f5f0]/80 rounded-full border border-white/10"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-[var(--font-mono)] text-amber-400/70 bg-amber-400/5 rounded border border-amber-400/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
