"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-scrub horizontal movement - moves based on scroll position
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const marqueeText = "CURATED EVENTS - ";
  const repeatCount = 4;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-16 md:py-24"
    >
      {/* Top border line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gray-800" />

      {/* First Marquee Row - moves left on scroll */}
      <div className="relative mb-4 overflow-hidden">
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          {Array.from({ length: repeatCount }).map((_, i) => (
            <span
              key={`row1-${i}`}
              className="font-display text-[7.5vw] font-bold leading-none tracking-tighter md:text-[6vw]"
              style={{
                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)",
                color: "transparent",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Second Marquee Row - moves right on scroll (opposite direction) */}
      <div className="relative overflow-hidden">
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap">
          {Array.from({ length: repeatCount }).map((_, i) => (
            <span
              key={`row2-${i}`}
              className="font-display text-[15vw] font-bold leading-none tracking-tighter md:text-[12vw]"
              style={{
                WebkitTextStroke: "1.5px rgba(0, 133, 202, 0.5)",
                color: "transparent",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />
    </section>
  );
}
