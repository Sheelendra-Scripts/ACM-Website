"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function BlogsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Deterministic floating particles
  const particles = Array.from({ length: 50 }, (_, i) => {
    const seed = i * 7919;
    const rand1 = ((seed * 9301 + 49297) % 233280) / 233280;
    const rand2 = ((seed * 7621 + 81237) % 233280) / 233280;
    const rand3 = ((seed * 3571 + 91291) % 233280) / 233280;
    return {
      id: i,
      x: rand1 * 100,
      y: rand2 * 100,
      size: 1 + rand3 * 3,
      duration: 10 + rand1 * 20,
      delay: rand2 * 10,
    };
  });

  // Cinematic light beams
  const lightBeams = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: 10 + i * 20,
    width: 2 + (i % 3),
    duration: 8 + i * 2,
    delay: i * 1.5,
  }));

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] overflow-hidden bg-black"
    >
      {/* Fixed hero content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          {/* Deep space gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 120% 80% at 50% -20%, rgba(0, 133, 202, 0.15), transparent 50%),
                radial-gradient(ellipse 80% 60% at 80% 80%, rgba(0, 133, 202, 0.08), transparent 40%),
                radial-gradient(ellipse 60% 40% at 20% 90%, rgba(0, 163, 255, 0.06), transparent 30%),
                linear-gradient(180deg, #000000 0%, #030308 50%, #000000 100%)
              `,
            }}
          />

          {/* Cinematic light beams */}
          {mounted &&
            lightBeams.map((beam) => (
              <motion.div
                key={beam.id}
                className="absolute top-0 h-full opacity-[0.03]"
                style={{
                  left: `${beam.left}%`,
                  width: `${beam.width}px`,
                  background:
                    "linear-gradient(180deg, transparent, rgba(0, 133, 202, 0.8) 30%, rgba(0, 133, 202, 0.8) 70%, transparent)",
                }}
                animate={{
                  opacity: [0.02, 0.06, 0.02],
                  scaleY: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: beam.duration,
                  repeat: Infinity,
                  delay: beam.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

          {/* Floating particles */}
          {mounted &&
            particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-white/20"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                }}
                animate={{
                  y: [0, -150, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

          {/* Vignette overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
            }}
          />
        </div>

        {/* Main content */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 will-change-transform"
        >
          {/* Cinematic intro text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="mb-6 flex items-center gap-6"
          >
            <span className="h-px w-16 bg-linear-to-r from-transparent to-acm-blue/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/40">
              Stories from the Chapter
            </span>
            <span className="h-px w-16 bg-linear-to-l from-transparent to-acm-blue/50" />
          </motion.div>

          {/* Main title with cinematic reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="text-center font-display text-7xl font-bold leading-[0.85] tracking-tight md:text-9xl lg:text-[12rem]"
            >
              <span className="block bg-linear-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                The
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.4,
                delay: 0.7,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="text-center font-display text-7xl font-bold leading-[0.85] tracking-tight md:text-9xl lg:text-[12rem]"
            >
              <span className="block bg-linear-to-b from-acm-blue via-acm-blue-light to-acm-blue/50 bg-clip-text text-transparent">
                Chronicle
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-white/50 md:text-xl"
          >
            Where ideas take flight and stories unfold. Dive into tales of
            innovation, creativity, and the minds shaping tomorrow.
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex flex-col items-center"
          >
            <div className="flex items-center gap-8">
              <div className="h-px w-24 bg-linear-to-r from-transparent to-white/20" />
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-acm-blue/60"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
              <div className="h-px w-24 bg-linear-to-l from-transparent to-white/20" />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-3"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
                Scroll to discover
              </span>
              <div className="relative h-12 w-px overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-b from-acm-blue to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Film grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  );
}
