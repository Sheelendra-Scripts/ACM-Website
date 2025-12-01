"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TeamsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#030303]"
    >
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-acm-blue/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-acm-blue/8 blur-[200px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 border-l-2 border-t-2 border-white/10" />
          <div className="absolute top-0 left-0 w-2 h-2 bg-acm-blue" />
        </div>
      </div>
      
      <div className="absolute top-8 right-8 md:top-12 md:right-12">
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 border-r-2 border-t-2 border-white/10" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-acm-blue" />
        </div>
      </div>

      <div className="absolute bottom-20 left-8 md:bottom-28 md:left-12">
        <div className="w-20 h-20 md:w-24 md:h-24 border-l-2 border-b-2 border-white/10" />
      </div>

      <div className="absolute bottom-20 right-8 md:bottom-28 md:right-12">
        <div className="w-20 h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-white/10" />
      </div>

      {/* Side Labels */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
          <span 
            className="text-[9px] tracking-[0.5em] text-white/30 uppercase"
            style={{ fontFamily: "var(--font-body)", writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          >
            ACM Chapter
          </span>
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
          <span 
            className="text-[9px] tracking-[0.5em] text-white/30 uppercase"
            style={{ fontFamily: "var(--font-body)", writingMode: "vertical-lr" }}
          >
            GGSIPU EDC
          </span>
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1400px] mx-auto w-full text-center">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-acm-blue" />
              <span
                className="text-[10px] md:text-[11px] tracking-[0.4em] text-white/50 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Meet The Visionaries
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-acm-blue" />
            </div>
          </motion.div>

          {/* Main Title - "OUR" */}
          <div className="relative mb-2">
            {/* Title Glow Effect */}
            <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
              <div 
                className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-acm-blue text-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OUR
              </div>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-white tracking-normal leading-[0.9]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OUR
              </motion.h1>
            </div>
          </div>

          {/* Subtitle "TEAM" with gradient */}
          <div className="relative mb-10">
            <div className="overflow-hidden pt-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-[20vw] md:text-[16vw] lg:text-[12vw] font-black tracking-normal leading-none"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #0085CA 0%, #00A3E0 50%, #0085CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                TEAM
              </motion.h2>
            </div>
            
            {/* Decorative line under TEAM */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-32 h-0.5 bg-linear-to-r from-transparent via-acm-blue to-transparent mx-auto mt-4"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/40 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-14"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The <span className="text-white/60">innovators</span>, <span className="text-white/60">creators</span>, and <span className="text-white/60">leaders</span> who 
            make our chapter extraordinary.
            <span className="text-acm-blue"> United by passion</span>, driven by purpose.
          </motion.p>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
          >
            {[
              { value: "15+", label: "Core Members", icon: "✦" },
              { value: "4", label: "Domains", icon: "◆" },
              { value: "2", label: "Faculty Mentors", icon: "★" },
              { value: "1", label: "Shared Vision", icon: "◈" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group relative text-center"
              >
                <div className="relative px-4 py-3">
                  <div className="text-acm-blue text-sm mb-2 opacity-60">{stat.icon}</div>
                  <div 
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-[9px] md:text-[10px] tracking-[0.25em] text-white/30 uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span 
            className="text-[9px] tracking-[0.4em] text-white/30 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore
          </span>
          <div className="w-px h-10 bg-linear-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#030303] to-transparent pointer-events-none z-10" />
    </section>
  );
}
