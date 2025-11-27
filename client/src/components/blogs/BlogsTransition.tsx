"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BlogsTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9]
  );

  // Cinematic connector line progress
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] overflow-hidden bg-black py-32"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0">
        <motion.div
          style={{ opacity }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acm-blue/5 blur-[150px]"
        />
      </div>

      {/* Central connector line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
        <motion.div
          className="h-full w-full bg-linear-to-b from-transparent via-acm-blue/30 to-transparent"
          style={{ scaleY: lineHeight, transformOrigin: "top" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        {/* Decorative element */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              className="h-20 w-20 rounded-full border border-acm-blue/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner dot */}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acm-blue/60" />
            {/* Orbital dot */}
            <motion.div
              className="absolute h-1.5 w-1.5 rounded-full bg-acm-blue"
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                top: "-4px",
                left: "50%",
                transformOrigin: "0 44px",
              }}
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-display text-2xl font-medium leading-relaxed text-white/80 md:text-4xl lg:text-5xl">
            &ldquo;Every story we tell is a{" "}
            <span className="bg-linear-to-r from-acm-blue to-acm-blue-light bg-clip-text text-transparent">
              window
            </span>{" "}
            into the minds that shape our future.&rdquo;
          </p>
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-12 bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
            ACM Editorial
          </span>
          <div className="h-px w-12 bg-white/20" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent" />
    </section>
  );
}
