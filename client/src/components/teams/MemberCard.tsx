"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/data/teamData";

interface MemberCardProps {
  member: TeamMember;
  index: number;
}

export default function MemberCard({ member, index }: MemberCardProps) {
  const isTBF = member.name === "TBF" || member.name === "To be filled";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/50 to-gray-900/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-acm-blue/50 hover:shadow-2xl hover:shadow-acm-blue/20">
        {/* Photo Placeholder */}
        <div className="relative aspect-3/4 overflow-hidden bg-linear-to-br from-gray-800/50 to-gray-900/80">
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id={`grid-${index}`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
            </svg>
          </div>

          {/* Stylized Silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="w-32 h-32 rounded-full bg-linear-to-br from-acm-blue/20 to-acm-blue-light/10 blur-3xl"
            />
          </div>

          {/* Hover Overlay - Glitch Effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-acm-blue/0 via-acm-blue/0 to-acm-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{
              background: [
                "linear-gradient(to top, rgba(0, 133, 202, 0), rgba(0, 133, 202, 0.1), rgba(0, 133, 202, 0))",
                "linear-gradient(to top, rgba(0, 163, 255, 0.1), rgba(0, 133, 202, 0), rgba(0, 163, 255, 0.1))",
                "linear-gradient(to top, rgba(0, 133, 202, 0), rgba(0, 133, 202, 0.1), rgba(0, 133, 202, 0))",
              ],
              transition: { duration: 0.3, repeat: 2 },
            }}
          />

          {/* Film Strip Indicator */}
          <div className="absolute top-4 right-4">
            <div className="flex space-x-1">
              <div className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-acm-blue transition-colors" />
              <div className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-acm-blue transition-colors delay-75" />
              <div className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-acm-blue transition-colors delay-150" />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="relative p-5 bg-linear-to-b from-transparent to-black/40">
          {/* Role Badge */}
          <div className="mb-2">
            <span className="inline-block px-2.5 py-0.5 text-xs uppercase tracking-widest text-acm-blue/80 border border-acm-blue/30 rounded-full bg-acm-blue/5 group-hover:bg-acm-blue/10 group-hover:text-acm-blue transition-all">
              {member.role}
            </span>
          </div>

          {/* Name */}
          <h3
            className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-all duration-300 ${
              isTBF
                ? "text-gray-500 italic"
                : "text-white group-hover:text-acm-blue-light"
            }`}
          >
            {member.name}
          </h3>

          {/* Accent Line */}
          <motion.div
            className="mt-3 h-0.5 bg-linear-to-r from-acm-blue via-acm-blue-light to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
          />
        </div>

        {/* Scan Line Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          initial={false}
          whileHover={{
            background: [
              "linear-gradient(0deg, transparent 0%, rgba(0, 133, 202, 0.1) 50%, transparent 100%) 0% 0% / 100% 200%",
              "linear-gradient(0deg, transparent 0%, rgba(0, 133, 202, 0.1) 50%, transparent 100%) 0% 100% / 100% 200%",
            ],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
      </div>
    </motion.div>
  );
}
