"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";

import InteractiveGridPattern from "./InteractiveGridPattern";
import BackgroundMorph from "./BackgroundMorph";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden py-16 px-6 md:px-12 lg:px-24 flex flex-col justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundMorph />
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <InteractiveGridPattern />
        </div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-acm-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Vertical Label */}
        <div className="hidden lg:flex lg:col-span-2 flex-col items-start justify-start h-full pt-4">
          <motion.div
            style={{ opacity }}
            className="origin-top-left rotate-90 -translate-x-8 translate-y-12"
          >
            <span className="text-xs font-mono tracking-[0.3em] text-acm-blue uppercase">
              Who We Are
            </span>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-10 flex flex-col gap-10">
          <div className="space-y-8">
            <SplitText
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tight text-white"
              delay={0.2}
            >
              Innovating the Future
            </SplitText>
            <SplitText
              className="text-4xl md:text-6xl lg:text-7xl font-title font-bold leading-[0.9] tracking-tight text-gray-500"
              delay={0.4}
            >
              Together.
            </SplitText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium text-white">
                The GGSIPU EDC ACM Student Chapter
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We are a vibrant community where technology meets creativity.
                Bridging the gap between technical expertise and non-technical
                innovation, we foster an environment of growth, collaboration,
                and excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium text-white">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                To empower students with the skills, network, and mindset needed
                to thrive in the digital age. From hackathons to design
                workshops, we curate experiences that challenge the status quo
                and unlock unseen possibilities.
              </p>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mt-12"
          />
        </div>
      </div>
    </section>
  );
}
