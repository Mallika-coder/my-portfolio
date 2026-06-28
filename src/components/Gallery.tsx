"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const rows = [
  {
    photos: [
      {
        src: "/images/i7.jpeg",
        alt: "Mallika standing next to the It's Always Day 1 sign at Amazon Bengaluru",
        caption: "Day 1. I didn't know what a Brazil build was. I didn't know what a CR was. I didn't know that 'working' and 'correct' were different things. I just knew the wall said DAY 1 — and that felt like permission to not know anything yet.",
        width: "60",
        aspect: "aspect-[3/4]",
      },
      {
        src: "/images/i8.jpeg",
        alt: "Mallika coding at her desk at Amazon Bengaluru office",
        caption: "Somewhere between Day 1 and Day 56, this became normal. The headphones went on, the world went quiet, and the code stopped feeling like a foreign language. That's the part that scared me — how quickly something impossible starts feeling like home.",
        width: "40",
        aspect: "aspect-[3/4]",
      },
    ],
  },
  {
    photos: [
      {
        src: "/images/i3.jpeg",
        alt: "Laptop open on a leather couch by floor-to-ceiling windows in the Amazon Bengaluru office",
        caption: "Nobody tells you how much of engineering is just sitting with a problem. Not solving it. Sitting with it. Letting it breathe. The leather couch, the city outside, the half-written notes — this is where v3 became v4.",
        width: "40",
        aspect: "aspect-[4/3]",
      },
      {
        src: "/images/i4.jpeg",
        alt: "Mallika's desk with a whiteboard reading 'You are what you believe yourself to be' and sticky notes",
        caption: "'You are what you believe yourself to be.' I wrote that on the whiteboard in Week 2, when the first agent was failing on 6 out of 14 criteria. By Week 6, it passed all of them. The sticky notes stayed. The doubt didn't.",
        width: "60",
        aspect: "aspect-[4/3]",
      },
    ],
  },
  {
    photos: [
      {
        src: "/images/i6.jpeg",
        alt: "Mallika smiling in a striped armchair at the Amazon office lounge",
        caption: "Week 7. The agent hit 100% accuracy across 26 competitors. I should have been celebrating. Instead I was already grieving — counting the days left, memorising the commute, wondering if I'd ever feel this specific kind of alive again.",
        width: "50",
        aspect: "aspect-[3/4]",
      },
      {
        src: "/images/i1.jpeg",
        alt: "Laptop open on an office windowsill overlooking the Bengaluru skyline",
        caption: "Building things nobody had built before. From a window seat in Bengaluru, watching a city I barely knew become the backdrop to the hardest, best work of my life. The view never got old. The gratitude never did either.",
        width: "50",
        aspect: "aspect-[3/4]",
      },
    ],
  },
  {
    photos: [
      {
        src: "/images/i5.jpeg",
        alt: "Mallika in office attire with Amazon badge visible, mirror selfie",
        caption: "The badge comes off. The intern title disappears from Slack. The desk gets cleared for whoever comes next. But the code stays deployed. The agents still run. Some part of me lives in production now.",
        width: "45",
        aspect: "aspect-[3/4]",
      },
      {
        src: "/images/i2.jpeg",
        alt: "Mallika's workspace desk with dual monitors, papers, and a standing desk at Amazon",
        caption: "This desk saw v1 through v7. It saw me mass-ping my mentor at 11pm and apologise at 9am. It saw the first CR get approved, the first pipeline succeed, the first moment I thought: maybe I actually belong here.",
        width: "55",
        aspect: "aspect-[3/4]",
      },
    ],
  },
];

const allPhotos = rows.flatMap((r) => r.photos);

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#0a0a0a] py-28 md:py-36" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold text-white">
            Bengaluru.
          </h2>
          <p className="text-white/30 text-lg mt-3">8 weeks. A lot changed.</p>
        </motion.div>

        {/* Masonry rows */}
        <div className="space-y-4">
          {rows.map((row, ri) => (
            <div key={ri} className="flex flex-col md:flex-row gap-4">
              {row.photos.map((photo, pi) => {
                const globalIndex = ri * 2 + pi;
                return (
                  <motion.div
                    key={photo.src}
                    className={`relative overflow-hidden cursor-crosshair group w-full md:w-[${photo.width}%]`}
                    style={{ flex: `0 0 ${photo.width}%` }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + globalIndex * 0.08 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                  >
                    <div className={`relative ${photo.aspect} w-full`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {/* Hover overlay + caption — desktop only */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-[400ms] items-end p-6 hidden md:flex">
                        <p className="font-[var(--font-playfair)] italic text-[13px] text-white/0 group-hover:text-white/90 transition-all duration-500 leading-relaxed max-w-[90%]">
                          {photo.caption}
                        </p>
                      </div>
                    </div>

                    {/* Mobile caption — below photo */}
                    <p className="md:hidden mt-3 mb-2 font-[var(--font-playfair)] italic text-[12px] text-white/40 leading-relaxed">
                      {photo.caption}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          className="text-center mt-20 font-[var(--font-playfair)] italic text-sm text-white/25 hover:text-white/60 transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          onClick={() => document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" })}
        >
          I&apos;m scared of forgetting. So I wrote it all down.
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button className="absolute top-6 right-6 text-white/40 hover:text-white text-2xl z-10" onClick={() => setLightboxIndex(null)}>×</button>
            {lightboxIndex > 0 && (
              <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white text-3xl z-10" onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}>‹</button>
            )}
            {lightboxIndex < allPhotos.length - 1 && (
              <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white text-3xl z-10" onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}>›</button>
            )}
            <motion.div
              className="relative w-full max-w-4xl flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={allPhotos[lightboxIndex].src} alt={allPhotos[lightboxIndex].alt} width={1200} height={800} className="object-contain w-full max-h-[70vh] rounded-sm" />
              <p className="mt-5 font-[var(--font-playfair)] italic text-sm text-white/40 text-center max-w-xl leading-relaxed px-4">
                {allPhotos[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
