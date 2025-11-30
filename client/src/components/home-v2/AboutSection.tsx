"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for storytelling effect
  const imageY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const textBlockY1 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const textBlockY2 = useTransform(scrollYProgress, [0, 1], [150, -80]);
  const textBlockY3 = useTransform(scrollYProgress, [0, 1], [200, -100]);

  // Word reveal animation
  const words1 =
    "We are a multi-disciplinary student community passionate about exploring technology, creativity, and innovation.".split(
      " "
    );
  const words2 =
    "With a genuine belief in the transformative power of technology, we constantly explore machine learning, web development, design, and content creation.".split(
      " "
    );
  const words3 =
    "Our goal is to deliver experiences that not only engage and inspire but also achieve tangible results and meaningful impact.".split(
      " "
    );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden bg-black px-6 py-18 md:px-12 md:py-28 lg:px-20"
    >
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[800px] w-[800px] rounded-full bg-acm-blue/5 blur-[200px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-acm-blue/3 blur-[150px]" />
      </div>

      <div ref={contentRef} className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section Label with line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={isInView ? { opacity: 1, width: "auto" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 flex items-center gap-4 md:mb-32"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-acm-blue"
          />
          <span className="font-mono text-xs tracking-[0.3em] text-gray-500">
            ABOUT
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Image with parallax */}
          <motion.div
            style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
            className="relative lg:col-span-4"
          >
            <div className="relative aspect-square w-full max-w-[350px] overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
              <div className="absolute inset-0 bg-linear-to-br from-acm-blue/20 via-transparent to-transparent" />
              <Image
                src="/ACM_Logo_white_text.png"
                alt="ACM Logo"
                fill
                className="object-contain p-12"
              />

              {/* Decorative corner accents */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-acm-blue" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-acm-blue" />
            </div>

            {/* Contact Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 space-y-3"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                Email
              </p>
              <a
                href="mailto:acm@ggsipu.ac.in"
                className="group flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-acm-blue"
              >
                acm@ggsipu.ac.in
                <motion.span className="inline-block" whileHover={{ x: 5 }}>
                  →
                </motion.span>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 max-w-[250px] text-sm leading-relaxed text-gray-500"
            >
              Passionate about crafting unforgettable experiences.
            </motion.p>
          </motion.div>

          {/* Right Column - Text Content with staggered reveal */}
          <div className="space-y-12 lg:col-span-8 lg:space-y-16">
            {/* First Paragraph */}
            <motion.div style={{ y: textBlockY1 }}>
              <p className="text-xl leading-relaxed md:text-2xl lg:text-3xl">
                {words1.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                    className={`inline-block mr-[0.3em] ${
                      [
                        "multi-disciplinary",
                        "technology,",
                        "creativity,",
                        "innovation.",
                      ].includes(word)
                        ? "text-white font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* Second Paragraph */}
            <motion.div style={{ y: textBlockY2 }}>
              <p className="text-xl leading-relaxed md:text-2xl lg:text-3xl">
                {words2.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.03 }}
                    className={`inline-block mr-[0.3em] ${
                      [
                        "machine",
                        "learning,",
                        "web",
                        "development,",
                        "design,",
                        "creation.",
                      ].includes(word)
                        ? "text-acm-blue"
                        : "text-gray-400"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* Third Paragraph */}
            <motion.div style={{ y: textBlockY3 }}>
              <p className="text-xl leading-relaxed md:text-2xl lg:text-3xl">
                {words3.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.03 }}
                    className={`inline-block mr-[0.3em] ${
                      ["engage", "inspire", "meaningful", "impact."].includes(
                        word
                      )
                        ? "text-white font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
