"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TeamsHeroBackground from "./TeamsHeroBackground";
import SplitText from "../SplitText";

export default function TeamsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Background */}
      <TeamsHeroBackground />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ scale }}
        className="relative z-10 text-center px-6 md:px-12"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.5em] text-acm-blue font-medium">
            ACM Chapter Presents
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tight">
            <SplitText>The Cast</SplitText>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Meet the visionaries, creators, and innovators
          <br className="hidden md:block" />
          shaping the future of technology
        </motion.p>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 h-px max-w-md mx-auto bg-linear-to-r from-transparent via-acm-blue to-transparent"
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 md:mt-24"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-acm-blue"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Film Strip Borders */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-linear-to-b from-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-linear-to-t from-white/5 to-transparent" />
    </motion.section>
  );
}
