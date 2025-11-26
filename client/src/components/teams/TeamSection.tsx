"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MemberCard from "./MemberCard";
import { TeamMember } from "@/data/teamData";

interface TeamSectionProps {
  title: string;
  subtitle?: string;
  members: TeamMember[];
  sectionNumber: string;
}

export default function TeamSection({
  title,
  subtitle,
  members,
  sectionNumber,
}: TeamSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative py-16 px-6 md:px-12 lg:px-16 scale-90"
    >
      {/* Section Number - Cinematic marker */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-8 left-6 md:left-12 lg:left-16"
      >
        <span className="text-[6rem] md:text-[8rem] font-display font-bold text-white/5 leading-none select-none">
          {sectionNumber}
        </span>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle && (
              <p className="text-sm md:text-base uppercase tracking-[0.4em] text-acm-blue mb-4 font-medium">
                {subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4">
              {title}
            </h2>
            <motion.div
              className="h-1 bg-linear-to-r from-acm-blue via-acm-blue-light to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {members.map((member, index) => (
            <MemberCard
              key={`${member.name}-${member.role}`}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 1.2 }}
      />
    </motion.section>
  );
}
