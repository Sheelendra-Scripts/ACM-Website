"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Split headline into characters for animation
  const headline = "HAVE AN IDEA?";
  const characters = headline.split("");

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden bg-black px-6 py-32 md:px-12 md:py-48 lg:px-20"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acm-blue/10 blur-[150px]"
        />
      </div>

      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 h-full w-px bg-linear-to-b from-transparent via-gray-600 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-transparent via-gray-600 to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-linear-to-b from-transparent via-gray-600 to-transparent" />
      </div>

      <motion.div
        ref={textRef}
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-[1400px] text-center"
      >
        {/* Main Headline - Character by character animation */}
        <h2 className="mb-8 font-display text-[12vw] font-bold leading-[0.9] tracking-normal md:text-[10vw] lg:text-[8vw]">
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={char === "?" ? "text-acm-blue" : "text-white"}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 120 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mb-8 h-px bg-linear-to-r from-transparent via-acm-blue to-transparent"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-4 text-base text-gray-500 md:text-lg"
        >
          Drop us an email:
        </motion.p>

        {/* Email Link */}
        <motion.a
          href="mailto:acm@ggsipu.ac.in"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="group inline-flex flex-col items-center"
        >
          <motion.span
            className="relative text-lg font-medium tracking-normal text-white transition-colors group-hover:text-acm-blue md:text-xl lg:text-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            ACM@GGSIPU.AC.IN
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              className="absolute -bottom-1 left-0 h-px w-full origin-left bg-acm-blue"
            />
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-4 text-sm text-gray-600 transition-colors group-hover:text-acm-blue"
          >
            LET&apos;S CREATE SOMETHING AMAZING!
          </motion.span>
        </motion.a>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-8 top-1/2 hidden -translate-y-1/2 md:block"
        >
          <div className="space-y-2">
            <div className="h-px w-8 bg-gray-700" />
            <div className="h-px w-12 bg-gray-700" />
            <div className="h-px w-6 bg-acm-blue" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute right-8 top-1/2 hidden -translate-y-1/2 md:block"
        >
          <div className="space-y-2">
            <div className="ml-auto h-px w-6 bg-acm-blue" />
            <div className="ml-auto h-px w-12 bg-gray-700" />
            <div className="ml-auto h-px w-8 bg-gray-700" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
