"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function ClosingBackgroundEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Deterministic values for grid dots - reduced count for performance
  const gridDots = Array.from({ length: 30 }, (_, i) => {
    const seed = i * 12345;
    const pseudoRandom1 = ((seed * 9301 + 49297) % 233280) / 233280;
    const pseudoRandom2 = ((seed * 7621 + 81237) % 233280) / 233280;
    const pseudoRandom3 = ((seed * 3571 + 91291) % 233280) / 233280;
    return {
      left: `${pseudoRandom1 * 100}%`,
      top: `${pseudoRandom2 * 100}%`,
      delay: pseudoRandom3 * 5,
      duration: 3 + pseudoRandom3 * 2,
    };
  });

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acm-blue/10 blur-[150px] will-change-transform"
      />

      {/* Grid dots */}
      {gridDots.map((dot, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
          }}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{ left: dot.left, top: dot.top }}
        />
      ))}
    </div>
  );
}

export default function ClosingStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-black py-32"
    >
      <ClosingBackgroundEffect />

      {/* Content */}
      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 text-center will-change-transform"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 h-px bg-acm-blue/50"
        />

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.5em] text-acm-blue"
        >
          Join The Movement
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-white">Ready to Build</span>
          <br />
          <span className="text-acm-blue">Something Extraordinary?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl"
        >
          Whether you&apos;re a seasoned developer or just getting started,
          there&apos;s a place for you in our community. Let&apos;s create the
          next breakthrough together.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          {/* Primary CTA */}
          <motion.a
            href="/join"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-acm-blue px-10 py-4 font-medium text-white shadow-lg shadow-acm-blue/20 transition-all hover:bg-acm-blue-light hover:shadow-xl hover:shadow-acm-blue/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Join ACM</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="/events"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-10 py-4 font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            <span className="flex items-center justify-center gap-3">
              <span>View Events</span>
              <span className="text-white/50 transition-colors group-hover:text-white">
                ↗
              </span>
            </span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 flex items-center gap-8 md:gap-16"
        >
          {[
            { value: "500+", label: "Members" },
            { value: "50+", label: "Projects" },
            { value: "100+", label: "Events" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                className="block font-display text-3xl font-bold text-white md:text-4xl"
              >
                {stat.value}
              </motion.span>
              <span className="mt-1 block font-mono text-xs uppercase tracking-wider text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-black" />
    </section>
  );
}
