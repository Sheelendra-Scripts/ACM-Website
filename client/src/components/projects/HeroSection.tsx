"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[100vh] overflow-hidden">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 133, 202, 0.15), transparent), linear-gradient(180deg, #000 0%, #050510 100%)",
          }}
        />

        {/* Floating particles - optimized */}
        <FloatingParticles />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Main content */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 will-change-transform"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-acm-blue/50" />
            <span className="font-mono text-xs uppercase tracking-[0.5em] text-white/50">
              Our Work
            </span>
            <span className="h-px w-12 bg-acm-blue/50" />
          </motion.div>

          {/* Main title */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.35, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
              className="text-center text-6xl font-display font-bold leading-[0.9] tracking-tight md:text-8xl lg:text-9xl"
            >
              <span className="block text-white">Projects that</span>
              <span className="block text-acm-blue">breathe.</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-2xl text-center text-lg text-white/60 md:text-xl"
          >
            Every pixel tells a story. Every interaction is choreographed.
            <br className="hidden md:block" />
            Welcome to the ACM portfolio.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex gap-12 md:gap-20"
          >
            {[
              { value: "05", label: "Projects" },
              { value: "∞", label: "Iterations" },
              { value: "24/7", label: "Dedication" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Scroll to explore
              </span>
              <div className="h-12 w-px bg-acm-blue/30" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingParticles() {
  // Reduced particle count for performance
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i * 37) % 100,
    y: (i * 53) % 100,
    size: 2 + (i % 3),
    duration: 15 + (i % 10) * 2,
    delay: i * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-acm-blue/30 will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
