"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Code,
  Network,
  PenTool,
  Camera,
  Film,
  Palette,
  LucideIcon,
} from "lucide-react";
import AnimatedText from "./AnimatedText";
import { useRef } from "react";

interface TeamProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const techTeams: TeamProps[] = [
  {
    number: "01",
    icon: Brain,
    title: "Machine Learning",
    description:
      "Exploring the frontiers of AI, from neural networks to predictive modeling.",
  },
  {
    number: "02",
    icon: Code,
    title: "Web Development",
    description:
      "Building scalable, modern web applications with cutting-edge technologies.",
  },
  {
    number: "03",
    icon: Network,
    title: "DSA & System Design",
    description:
      "Mastering algorithms and architecting robust, high-performance systems.",
  },
];

const creativeTeams: TeamProps[] = [
  {
    number: "01",
    icon: PenTool,
    title: "Content & PR",
    description:
      "Crafting compelling narratives and managing our public presence.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Photo & Video",
    description: "Capturing moments and telling stories through visual media.",
  },
  {
    number: "03",
    icon: Film,
    title: "Video Editing",
    description:
      "Bringing visuals to life with professional post-production and effects.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Graphics & UI/UX",
    description: "Designing intuitive interfaces and stunning visual assets.",
  },
];

export default function Teams() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const creativeY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.6, 1],
    [400, 140, 160, 160]
  );
  const creativeShadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 120px 160px rgba(0,0,0,0.35)", "0px 40px 90px rgba(0,0,0,0.55)"]
  );
  // const techScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const techShadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 80px 120px rgba(0,0,0,0.35)", "0px 30px 60px rgba(0,0,0,0.6)"]
  );

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12 lg:px-16 flex justify-center mb-[40vh]">
      <div className="max-w-[1600px] w-full">
        <div className="text-center mb-16">
          <AnimatedText>
            <p className="text-sm md:text-base uppercase tracking-[0.4em] text-gray-500 mb-4">
              The Collective
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Teams that power the narrative
            </h2>
          </AnimatedText>
        </div>

        {/* Mobile simple layout */}
        <div className="space-y-12 md:hidden">
          <div className="rounded-4xl border border-white/5 bg-[#08080c] px-6 py-10">
            <DomainSection
              title="Technical Domains"
              gridCols="grid-cols-1"
              teams={techTeams}
              centerHeading
            />
          </div>
          <div className="rounded-4xl border border-white/5 bg-[#0b0b12] px-6 py-10">
            <DomainSection
              title="Creative Domains"
              gridCols="grid-cols-1"
              teams={creativeTeams}
              centerHeading
            />
          </div>
        </div>

        {/* Desktop stacked layout */}
        <div ref={stackRef} className="relative min-h-[230vh] hidden md:block">
          <motion.div
            style={{ boxShadow: techShadow }}
            className="sticky top-8 z-20 rounded-4xl border border-white/5 bg-[#08080c] px-10 md:px-14 py-12 md:py-16"
          >
            <DomainSection
              title="Technical Domains"
              gridCols="grid-cols-1 md:grid-cols-3"
              teams={techTeams}
            />
          </motion.div>

          <motion.div
            style={{ y: creativeY, boxShadow: creativeShadow }}
            className="sticky top-8 z-30 mt-16 rounded-4xl border border-white/5 bg-[#08080c] px-10 md:px-14 py-12 md:py-16"
          >
            <DomainSection
              title="Creative Domains"
              gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              teams={creativeTeams}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DomainSection({
  title,
  teams,
  gridCols,
  centerHeading = false,
}: {
  title: string;
  teams: TeamProps[];
  gridCols: string;
  centerHeading?: boolean;
}) {
  return (
    <div>
      <AnimatedText className="mb-12">
        <h2
          className={`text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 ${
            centerHeading ? "text-center" : ""
          }`}
        >
          {title}
        </h2>
        <div
          className={`h-0.5 w-24 bg-acm-blue rounded-full ${
            centerHeading ? "mx-auto" : "md:mx-0"
          }`}
        />
      </AnimatedText>

      <div className={`grid ${gridCols} gap-x-10 gap-y-12 pt-6`}>
        {teams.map((team, index) => (
          <TeamCard key={team.title} {...team} delay={index * 0.12} />
        ))}
      </div>
    </div>
  );
}

function TeamCard({
  number,
  icon: Icon,
  title,
  description,
  delay,
}: TeamProps & { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      {/* Top Section: Number and Icon */}
      <div className="relative mb-6">
        {/* Large Background Number - Clipped to show top half */}
        <div className="relative h-24 overflow-hidden select-none pointer-events-none">
          <span className="absolute -top-4 left-0 text-[8rem] leading-none font-display font-bold text-[#1a1a1a] transition-colors duration-500 group-hover:text-[#222]">
            {number}
          </span>
        </div>
        <div className="-translate-y-6 bg-[#08080c]">
          {/* Divider Line */}
          <div className="w-full h-px bg-linear-to-r from-gray-800 via-gray-500 to-gray-800 mb-8 group-hover:bg-gray-700 transition-colors duration-500" />

          {/* Icon */}
          <div className="mt-4 mb-6">
            <Icon
              size={28}
              strokeWidth={1.5}
              className="text-white group-hover:text-acm-blue transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-10">
        <h3 className="text-2xl md:text-3xl font-title  text-white tracking-wide group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-transparent bg-clip-text bg-linear-to-r from-gray-600 via-gray-500 to-gray-600 leading-tight text-xl md:text-2xl font-light max-w-sm group-hover:text-gray-500 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
