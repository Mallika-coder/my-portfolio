"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/i7.jpeg", alt: "It's always DAY 1 - Amazon", span: "col-span-2 row-span-2" },
  { src: "/images/i8.jpeg", alt: "Coding at desk", span: "col-span-1 row-span-1" },
  { src: "/images/i6.jpeg", alt: "Smiling in chair", span: "col-span-1 row-span-1" },
  { src: "/images/i3.jpeg", alt: "Laptop on couch", span: "col-span-2 row-span-1" },
  { src: "/images/i4.jpeg", alt: "Desk with whiteboard", span: "col-span-1 row-span-1" },
  { src: "/images/i1.jpeg", alt: "Laptop on windowsill", span: "col-span-1 row-span-1" },
  { src: "/images/i5.jpeg", alt: "Office mirror selfie", span: "col-span-1 row-span-1" },
  { src: "/images/i2.jpeg", alt: "Workspace", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-20 md:py-28 px-6 md:px-12 lg:px-16 relative" ref={ref}>
      <div className="absolute inset-0 mesh-gradient-1 -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-4">
            From Bengaluru, with <span className="text-gradient">&#x1F9E1;</span>
          </h2>
          <p className="text-base text-[#1a1035]/45 max-w-md">
            8 weeks. A lot changed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px] lg:auto-rows-[200px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${photo.span}`}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              onClick={() => setSelectedImage(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-[11px] text-white/90 font-medium bg-black/30 backdrop-blur px-2.5 py-1 rounded-lg">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-8 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[80vh]"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-2xl"
              />
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
