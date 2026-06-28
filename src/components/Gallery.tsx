"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/i7.jpeg", alt: "Day 1 at Amazon" },
  { src: "/images/i8.jpeg", alt: "Coding at desk" },
  { src: "/images/i3.jpeg", alt: "Working by the window" },
  { src: "/images/i4.jpeg", alt: "Desk setup" },
  { src: "/images/i6.jpeg", alt: "Office lounge" },
  { src: "/images/i1.jpeg", alt: "Bengaluru skyline" },
  { src: "/images/i5.jpeg", alt: "At Amazon office" },
  { src: "/images/i2.jpeg", alt: "Workstation" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold text-white/90">
            Bengaluru.
          </h2>
          <p className="text-white/25 text-sm mt-2">8 weeks. A lot changed. Most of it wasn&apos;t in the job description.</p>
        </motion.div>
      </div>

      {/* Horizontal scrolling photo strip */}
      <motion.div
        className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            className="flex-shrink-0 relative w-[220px] md:w-[280px] h-[300px] md:h-[360px] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
