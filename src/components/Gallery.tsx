"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback, TouchEvent } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/i7.jpeg",
    alt: "Mallika standing next to the It's Always Day 1 sign at Amazon Bengaluru",
    caption: "Day 1. I didn't know what a Brazil build was. I didn't know what a CR was. I just knew the wall said DAY 1 — and that felt like permission to not know anything yet.",
    beat: "Week 1",
  },
  {
    src: "/images/i8.jpeg",
    alt: "Mallika coding at her desk at Amazon Bengaluru office",
    caption: "Somewhere between Day 1 and Day 56, this became normal. The headphones went on, the world went quiet, and the code stopped feeling like a foreign language.",
    beat: "Week 2–3",
  },
  {
    src: "/images/i3.jpeg",
    alt: "Laptop open on a leather couch by floor-to-ceiling windows in the Amazon Bengaluru office",
    caption: "Nobody tells you how much of engineering is just sitting with a problem. Not solving it. Sitting with it. This is where v3 became v4.",
    beat: "Week 3–4",
  },
  {
    src: "/images/i4.jpeg",
    alt: "Desk with a whiteboard reading 'You are what you believe yourself to be' and sticky notes",
    caption: "'You are what you believe yourself to be.' I wrote that in Week 2, when the agent was failing on 6 out of 14 criteria. By Week 6, it passed all of them.",
    beat: "Week 4–5",
  },
  {
    src: "/images/i6.jpeg",
    alt: "Mallika smiling in a striped armchair at the Amazon office lounge",
    caption: "Week 7. The agent hit 100% accuracy across 26 competitors. I should have been celebrating. Instead I was already grieving — counting the days left.",
    beat: "Week 7",
  },
  {
    src: "/images/i1.jpeg",
    alt: "Laptop open on an office windowsill overlooking the Bengaluru skyline",
    caption: "Building things nobody had built before. From a window seat in Bengaluru, watching a city I barely knew become the backdrop to the best work of my life.",
    beat: "Week 7–8",
  },
  {
    src: "/images/i5.jpeg",
    alt: "Mallika in office attire with Amazon badge visible, mirror selfie",
    caption: "The badge comes off. The intern title disappears. But the code stays deployed. The agents still run. Some part of me lives in production now.",
    beat: "Week 8",
  },
  {
    src: "/images/i2.jpeg",
    alt: "Workspace desk with dual monitors, papers, and a standing desk at Amazon",
    caption: "This desk saw v1 through v7. It saw the first CR get approved, the first pipeline succeed, the first moment I thought: maybe I actually belong here.",
    beat: "Last Day",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    else if (diff < -50) prev();
    setPaused(false);
  };

  return (
    <div className="bg-[#0a0a0a] py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold text-white">
            Bengaluru.
          </h2>
          <p className="text-white/30 text-base mt-2">8 weeks. A lot changed.</p>
        </motion.div>

        {/* Slider */}
        <motion.div
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
                priority={i === 0}
              />

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Beat label — top left */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[11px] font-medium text-white/80 tracking-wide">
                  {slide.beat}
                </span>
              </div>

              {/* Caption — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                <p className="font-[var(--font-playfair)] italic text-sm md:text-base text-white/90 leading-relaxed max-w-2xl">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation — arrows + dots centered below slider */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? "bg-white/80 w-6" : "bg-white/20 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
          >
            ›
          </button>
        </div>

        {/* Closing line */}
        <motion.p
          className="text-center mt-10 font-[var(--font-playfair)] italic text-sm text-white/25"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          8 weeks. A lot changed. Most of it wasn&apos;t in the job description.
        </motion.p>
      </div>
    </div>
  );
}
