/**
 * Animated Background Component for Hero Section
 * Inspired by Ellis Digital's 3D animated background
 * Features floating orbs with gradient effects and subtle animations
 */

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ParticleConfig = {
  left: number;
  top: number;
  duration: number;
  delay: number;
};

const particleConfigs = createParticleConfigs(20, 0x539ef1);

export default function AnimatedHeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main large orb - simulating the torus */}
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
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      >
        <div className="relative w-96 h-96 md:w-[600px] md:h-[600px]">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-acm-blue/20 via-purple-600/20 to-pink-600/20 blur-3xl" />

          {/* Main orb with iridescent gradient */}
          <motion.div
            className="absolute inset-8 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(0, 133, 202, 0.4), transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.3), transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2), transparent 70%)
              `,
              boxShadow: `
                inset 0 0 60px rgba(0, 133, 202, 0.3),
                inset 0 0 120px rgba(147, 51, 234, 0.2),
                0 0 80px rgba(0, 133, 202, 0.2)
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
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl"
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

      {/* Secondary smaller orb */}
      <motion.div
        className="absolute top-1/3 right-1/4"
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
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-600/20 via-pink-600/20 to-acm-blue/20 blur-2xl" />
          <motion.div
            className="absolute inset-4 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.5), transparent 50%),
                radial-gradient(circle at 60% 60%, rgba(0, 133, 202, 0.3), transparent 60%)
              `,
              boxShadow: `
                inset 0 0 40px rgba(147, 51, 234, 0.4),
                0 0 60px rgba(147, 51, 234, 0.2)
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

      {/* Ambient particles */}
      {particleConfigs.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-acm-blue rounded-full"
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

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          opacity: 0.3,
        }}
      />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
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

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
