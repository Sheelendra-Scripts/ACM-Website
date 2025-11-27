"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

type ParticleConfig = {
  left: number;
  top: number;
  duration: number;
  delay: number;
};

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createParticleConfigs(count: number, seed: number): ParticleConfig[] {
  const random = mulberry32(seed);
  return Array.from({ length: count }).map(() => ({
    left: random() * 100,
    top: random() * 100,
    duration: 3 + random() * 4,
    delay: random() * 5,
  }));
}

const heroParticleConfigs: ParticleConfig[] = createParticleConfigs(
  20,
  0x1f2a3c
);

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main large orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            opacity,
            scale,
            y: useTransform(scrollYProgress, [0, 0.5], [0, -100]),
          }}
        >
          <div className="relative h-64 w-64 md:h-96 md:w-96 lg:h-[600px] lg:w-[600px]">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-acm-blue/30 via-acm-blue-light/20 to-gray-500/10 blur-3xl" />

            {/* Main orb with iridescent gradient */}
            <motion.div
              className="absolute inset-4 rounded-full md:inset-8"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(0, 133, 202, 0.5), transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(0, 163, 255, 0.4), transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.15), transparent 70%)
                `,
                boxShadow: `
                  inset 0 0 60px rgba(0, 133, 202, 0.4),
                  inset 0 0 120px rgba(0, 163, 255, 0.3),
                  0 0 80px rgba(0, 133, 202, 0.3)
                `,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner highlight */}
            <motion.div
              className="absolute left-1/4 top-1/4 h-16 w-16 rounded-full bg-white/10 blur-xl md:h-32 md:w-32 md:blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Secondary smaller orb - hidden on smallest screens */}
        <motion.div
          className="absolute right-1/4 top-1/3 hidden sm:block"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 30, -30, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            opacity,
            scale,
            y: useTransform(scrollYProgress, [0, 0.5], [0, -100]),
          }}
        >
          <div className="relative h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-acm-blue-light/25 via-acm-blue/20 to-gray-400/10 blur-2xl" />
            <motion.div
              className="absolute inset-2 rounded-full md:inset-4"
              style={{
                background: `
                  radial-gradient(circle at 40% 40%, rgba(0, 163, 255, 0.5), transparent 50%),
                  radial-gradient(circle at 60% 60%, rgba(0, 133, 202, 0.4), transparent 60%)
                `,
                boxShadow: `
                  inset 0 0 40px rgba(0, 163, 255, 0.5),
                  0 0 60px rgba(0, 133, 202, 0.3)
                `,
              }}
              animate={{
                backgroundPosition: ["100% 100%", "0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>

        {/* Ambient particles - fewer on mobile */}
        {heroParticleConfigs.slice(0, 12).map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-acm-blue/30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-12"
      >
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            opacity,
            scale,
            y: useTransform(scrollYProgress, [0, 0.5], [0, -100]),
          }}
          className="mb-6 md:mb-8"
        >
          <span className="text-xs tracking-wider text-gray-400 md:text-base">
            GGSIPU EDC ACM Student Chapter
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            opacity,
            scale,
            y: useTransform(scrollYProgress, [0, 0.5], [0, -100]),
          }}
          className="mb-6 font-display text-4xl font-bold leading-[0.9] tracking-tight text-white md:mb-8 md:text-7xl lg:text-9xl"
        >
          Where Creativity
          <br />
          Meets Technology.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8 text-sm tracking-wide text-gray-400 md:mb-12 md:text-lg"
        >
          Innovation • Community • Impact
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="group relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-acm-blue/20 md:px-8 md:py-4 md:text-base">
            <span className="relative z-10">Explore Our Community</span>
            <div className="absolute inset-0 bg-linear-to-r from-acm-blue to-acm-blue-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-5 w-5 text-gray-500 md:h-6 md:w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
