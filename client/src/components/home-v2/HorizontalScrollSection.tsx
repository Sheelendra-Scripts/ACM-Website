"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal, AnimatedCounter } from "../TextReveal";

const highlights = [
  {
    number: 50,
    suffix: "+",
    label: "Active Members",
    description: "Passionate students driving innovation",
    gradient: "from-acm-blue/20 to-transparent",
  },
  {
    number: 25,
    suffix: "+",
    label: "Events Hosted",
    description: "Workshops, hackathons & tech talks",
    gradient: "from-purple-500/10 to-transparent",
  },
  {
    number: 12,
    suffix: "",
    label: "Tech Domains",
    description: "From AI to Web3 and beyond",
    gradient: "from-cyan-500/10 to-transparent",
  },
  {
    number: 1000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Students across Delhi transformed",
    gradient: "from-green-500/10 to-transparent",
  },
];

function HighlightCard({ item, index }: { item: typeof highlights[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      className="relative w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 h-[70vh] md:h-[80vh] group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#080808]">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-linear-to-br ${item.gradient}`} />
        
        {/* Large decorative number */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span 
            className="text-[40vw] md:text-[25vw] font-black text-white leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
        {/* Index */}
        <span
          className="absolute top-8 left-8 text-acm-blue text-xs font-medium tracking-[0.4em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          0{index + 1}
        </span>

        {/* Large Number */}
        <div className="mb-4">
          <AnimatedCounter
            value={item.number}
            suffix={item.suffix}
            className="text-7xl md:text-9xl font-black text-white tracking-normal"
            duration={2}
          />
        </div>

        {/* Label */}
        <h3
          className="text-2xl md:text-3xl font-black text-white mb-2 tracking-normal"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {item.label}
        </h3>

        {/* Description */}
        <p
          className="text-white/50 text-sm md:text-base max-w-[280px]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {item.description}
        </p>

        {/* Bottom Line */}
        <div className="mt-8 h-px w-16 bg-acm-blue/60" />
      </div>
    </motion.div>
  );
}

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for the scroll animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Transform scroll Y into horizontal scroll X
  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "-75%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030303] overflow-hidden"
      style={{ height: "300vh" }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <div 
          ref={headerRef}
          className="relative z-10 px-6 md:px-12 lg:px-20 pt-16 md:pt-24"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6 mb-4"
            >
              <div className="w-12 h-px bg-acm-blue/60" />
              <span
                className="text-[10px] tracking-[0.5em] text-white/30 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Impact
              </span>
            </motion.div>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-normal"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <TextReveal text="Numbers that" delay={0.2} />
                <br />
                <span className="text-acm-blue">
                  <TextReveal text="speak" delay={0.5} />
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isHeaderInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/40 text-sm max-w-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Scroll to explore our journey of building the future, one event at a time.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={containerRef}
          className="flex-1 flex items-center px-6 md:px-12 lg:px-20 mt-8"
          style={{ x }}
        >
          <div className="flex gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <HighlightCard key={item.label} item={item} index={index} />
            ))}
            
            {/* End Card - CTA */}
            <div className="w-[85vw] md:w-[50vw] lg:w-[35vw] shrink-0 h-[70vh] md:h-[80vh] flex items-center justify-center bg-[#0a0a0a] border border-white/5">
              <div className="text-center px-8">
                <span
                  className="text-acm-blue text-xs font-medium tracking-[0.4em] uppercase mb-4 block"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Join Us
                </span>
                <h3
                  className="text-4xl md:text-5xl font-black text-white mb-6 tracking-normal"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Ready to make an impact?
                </h3>
                <a
                  href="/teams"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-acm-blue text-white text-sm font-semibold uppercase tracking-normalr hover:bg-acm-blue/90 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Explore Our Team
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-4">
          <motion.div
            className="w-24 h-px bg-white/10 overflow-hidden"
          >
            <motion.div
              className="h-full bg-acm-blue"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </motion.div>
          <span
            className="text-[10px] text-white/30 tracking-normalst uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
