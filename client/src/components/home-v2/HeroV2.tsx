"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const title = "ACM STUDENT CHAPTER";

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-acm-blue/10 blur-[150px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-acm-blue/5 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 w-full px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex items-center gap-4"
          >
            <Image
              src="/ACM_Logo_white_text.png"
              alt="ACM Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="h-px w-8 bg-gray-600" />
            <span className="font-mono text-xs tracking-[0.2em] text-gray-500">
              GGSIPU EDC
            </span>
          </motion.div>

          {/* Main Title - Large Typography */}
          <motion.div style={{ y: titleY }}>
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 font-display text-[12vw] font-bold leading-[0.85] tracking-normal text-white md:text-[10vw] lg:text-[8vw]"
            >
              {title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl"
          >
            Empowering students to innovate, collaborate, and lead in the world
            of computing—transforming ideas into{" "}
            <span className="text-acm-blue">impact</span>.
          </motion.p>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-gray-800 pt-8"
          >
            <div className="space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-normalr text-gray-600">
                Location
              </p>
              <p className="text-sm text-gray-300">New Delhi, India</p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-normalr text-gray-600">
                Members
              </p>
              <p className="text-sm text-gray-300">50+ Active</p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-normalr text-gray-600">
                Established
              </p>
              <p className="text-sm text-gray-300">2020</p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="hidden md:block"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-normalr text-gray-600">
                  Scroll
                </span>
                <div className="h-12 w-px bg-linear-to-b from-acm-blue to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </section>
  );
}
