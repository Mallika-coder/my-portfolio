"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/i7.jpeg", caption: "Day 1" },
  { src: "/images/i3.jpeg", caption: "Building" },
  { src: "/images/i4.jpeg", caption: "Believing" },
  { src: "/images/i1.jpeg", caption: "Bengaluru" },
  { src: "/images/i5.jpeg", caption: "The badge" },
  { src: "/images/i2.jpeg", caption: "Last day" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-40 md:py-56 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] text-white/20 font-[var(--font-mono)] tracking-[0.2em] uppercase mb-4">
            Memories
          </p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-white/90">
            Bengaluru, 2026
          </h2>
        </motion.div>
      </div>

      {/* Horizontal photo strip — large, cinematic */}
      <motion.div
        className="flex gap-5 overflow-x-auto no-scrollbar px-8 md:px-16 lg:px-24 pb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            className="flex-shrink-0 relative w-[280px] md:w-[350px] h-[380px] md:h-[460px] rounded-lg overflow-hidden group"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute bottom-4 left-4 text-xs text-white/0 group-hover:text-white/70 transition-colors duration-500 font-[var(--font-mono)]">
              {photo.caption}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 mt-10">
        <p className="text-xs text-white/15 italic font-[var(--font-playfair)]">
          8 weeks. Most of it wasn&apos;t in the job description.
        </p>
      </div>
    </section>
  );
}
