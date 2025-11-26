"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { type Project } from "@/data/projectsData";

interface FeaturedDeepDiveProps {
  projects: Project[];
}

export default function FeaturedDeepDive({ projects }: FeaturedDeepDiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const featuredProjects = projects.filter((p) => p.featured);
  const displayProjects =
    featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-neutral-950 py-32"
    >
      {/* Subtle background glow */}
      <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-acm-blue/5 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-acm-blue/3 blur-[150px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-16 bg-acm-blue/50" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-acm-blue">
              Deep Dive
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span className="text-white">Featured</span>
            <br />
            <span className="text-white/30">Projects</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/40">
            An in-depth look at our most impactful work — the challenges we
            faced, the solutions we crafted, and the results we achieved.
          </p>
        </motion.div>

        {/* Featured projects grid */}
        <div className="space-y-32">
          {displayProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
  scrollProgress,
}: {
  project: Project;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(cardScroll, [0, 1], ["0%", "15%"]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px", amount: 0.55 }}
      transition={{ duration: 0.8 }}
      className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${
        isEven ? "" : "lg:grid-flow-dense"
      }`}
    >
      {/* Image side */}
      <motion.div
        style={{ y: imageY }}
        className={`relative will-change-transform ${
          isEven ? "" : "lg:col-start-2"
        }`}
      >
        <div className="group relative overflow-hidden rounded-3xl">
          {/* Glow effect - simplified */}
          <div className="absolute -inset-4 rounded-3xl bg-acm-blue/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          {/* Image */}
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Floating number */}
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-8xl font-bold text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content side */}
      <div
        className={`flex flex-col justify-center ${
          isEven ? "" : "lg:col-start-1 lg:row-start-1"
        }`}
      >
        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 flex items-center gap-4"
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/40">
            {project.year}
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/30">
            {project.role}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-3xl font-bold text-white md:text-5xl"
        >
          {project.title}
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-lg text-acm-blue"
        >
          {project.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-white/50"
        >
          {project.description}
        </motion.p>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric} className="border-l-2 border-acm-blue/30 pl-4">
              <span className="block font-mono text-xs uppercase tracking-wider text-white/40">
                {metric}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white/40"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        {project.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-white transition-colors hover:text-acm-blue"
            >
              <span>View Project</span>
              <span className="relative h-px w-10 bg-white/30 transition-all group-hover:w-16 group-hover:bg-acm-blue">
                <span className="absolute -top-[5px] right-0 text-white/50 transition-colors group-hover:text-acm-blue">
                  →
                </span>
              </span>
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
