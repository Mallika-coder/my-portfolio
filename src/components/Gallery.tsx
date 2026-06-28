"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/i7.jpeg", alt: "It's always DAY 1 - Amazon", featured: true },
  { src: "/images/i8.jpeg", alt: "Coding at desk", featured: false },
  { src: "/images/i6.jpeg", alt: "Smiling in chair", featured: false },
  { src: "/images/i4.jpeg", alt: "Desk with whiteboard", featured: false },
  { src: "/images/i3.jpeg", alt: "Laptop on couch", featured: false },
  { src: "/images/i1.jpeg", alt: "Laptop on windowsill", featured: false },
  { src: "/images/i5.jpeg", alt: "Office mirror selfie with badge", featured: false },
  { src: "/images/i2.jpeg", alt: "Workspace and desk", featured: false },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          From Bengaluru, with <span className="text-amber-400">&#x1F9E1;</span>
        </motion.h2>
        <motion.p
          className="text-lg text-[#f5f5f0]/60 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          8 weeks. A lot changed.
        </motion.p>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                photo.featured ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onClick={() => setSelectedImage(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] aspect-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-xl"
              />
            </motion.div>
            <button
              className="absolute top-8 right-8 text-white/70 hover:text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
