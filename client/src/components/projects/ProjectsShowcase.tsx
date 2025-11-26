"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { type Project } from "@/data/projectsData";

interface ProjectsShowcaseProps {
  projects: Project[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const slideSteps = Math.max(projects.length - 1, 1);
  const snappedProgress = useTransform(scrollYProgress, (value) => {
    if (projects.length <= 1) return 0;
    return Math.round(value * slideSteps) / slideSteps;
  });

  const smoothProgress = useSpring(snappedProgress, {
    stiffness: 270,
    damping: 40,
    mass: 0.8,
  });

  const driver = projects.length <= 1 ? scrollYProgress : smoothProgress;

  const x = useTransform(
    driver,
    [0, 1],
    ["0%", `-${Math.max(projects.length - 1, 0) * 100}%`]
  );

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="absolute left-6 top-8 z-20 md:left-12"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-acm-blue/50" />
            <span className="font-mono text-xs uppercase tracking-[0.5em] text-white/40">
              Featured Work
            </span>
          </div>
        </motion.div>

        {/* Project counter */}
        <div className="absolute bottom-8 left-6 z-20 md:left-12">
          <ProjectCounter
            scrollProgress={scrollYProgress}
            total={projects.length}
          />
        </div>

        {/* Progress indicator */}
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 md:right-8 md:flex">
          {projects.map((project, i) => (
            <ProjectProgressDot
              key={project.id}
              index={i}
              scrollProgress={scrollYProgress}
              total={projects.length}
              title={project.title}
            />
          ))}
        </div>

        {/* Horizontal scroll container */}
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {projects.map((project, index) => (
            <ProjectSlide key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCounter({
  scrollProgress,
  total,
}: {
  scrollProgress: MotionValue<number>;
  total: number;
}) {
  const currentIndex = useTransform(scrollProgress, (v) =>
    Math.min(Math.floor(v * total) + 1, total)
  );

  return (
    <div className="flex items-baseline gap-2 font-mono">
      <motion.span className="text-3xl font-bold text-white">
        {currentIndex}
      </motion.span>
      <span className="text-white/30">/</span>
      <span className="text-lg text-white/30">
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

function ProjectProgressDot({
  index,
  scrollProgress,
  total,
  title,
}: {
  index: number;
  scrollProgress: MotionValue<number>;
  total: number;
  title: string;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;

  const opacity = useTransform(
    scrollProgress,
    [start, start + segmentSize * 0.1, end - segmentSize * 0.1, end],
    [0.3, 1, 1, 0.3]
  );
  const scale = useTransform(
    scrollProgress,
    [start, start + segmentSize * 0.1, end - segmentSize * 0.1, end],
    [1, 1.3, 1.3, 1]
  );
  const width = useTransform(
    scrollProgress,
    [start, start + segmentSize * 0.1, end - segmentSize * 0.1, end],
    [8, 24, 24, 8]
  );

  return (
    <div className="group flex items-center gap-3">
      <motion.div
        style={{ opacity, scale, width }}
        className="h-2 rounded-full bg-white will-change-transform"
      />
      <motion.span
        style={{ opacity }}
        className="font-mono text-[10px] uppercase tracking-wider text-white/60 opacity-0 transition-opacity group-hover:opacity-100"
      >
        {title}
      </motion.span>
    </div>
  );
}

function ProjectSlide({ project, index }: { project: Project; index: number }) {
  return (
    <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-6 md:px-16 lg:px-24">
      {/* Background tint */}
      <div className="absolute inset-0 bg-acm-blue/5" />

      {/* Content grid */}
      <div className="relative z-10 grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: Project info */}
        <div className="flex flex-col justify-center">
          {/* Project number */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-4"
          >
            <span className="font-mono text-7xl font-bold text-white/5 md:text-9xl">
              {project.id}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="-mt-12 text-4xl font-display font-bold text-white md:-mt-16 md:text-6xl lg:text-7xl"
          >
            {project.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-lg text-acm-blue md:text-xl"
          >
            {project.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          >
            {project.summary}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-white/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex gap-6 border-t border-white/10 pt-6"
          >
            {project.metrics.map((metric, i) => (
              <div key={metric} className="relative">
                {i > 0 && (
                  <span className="absolute -left-3 top-1/2 h-3 w-px -translate-y-1/2 bg-white/10" />
                )}
                <span className="font-mono text-xs uppercase tracking-wider text-white/40">
                  {metric}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          {/* Glow effect - simplified */}
          <div className="absolute -inset-8 rounded-3xl bg-acm-blue/10 blur-3xl" />

          {/* Image container */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 lg:aspect-square lg:rounded-3xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Year badge */}
            <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md md:bottom-6 md:right-6">
              <span className="font-mono text-xs uppercase tracking-wider text-white/70">
                {project.year}
              </span>
            </div>

            {/* Role badge */}
            <div className="absolute left-4 top-4 md:left-6 md:top-6">
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
                {project.role}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
