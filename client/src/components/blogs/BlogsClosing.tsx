"use client";

import { motion } from "framer-motion";

export default function BlogsClosing() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-black py-32">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-acm-blue/10 blur-[180px]" />
        <div className="absolute right-1/4 top-0 h-[300px] w-[300px] rounded-full bg-acm-blue/5 blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-8 h-px bg-acm-blue/50"
        />

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-mono text-[10px] uppercase tracking-[0.5em] text-acm-blue"
        >
          Join the Narrative
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-white">Have a Story to</span>
          <br />
          <span className="bg-linear-to-r from-acm-blue to-acm-blue-light bg-clip-text text-transparent">
            Share?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-white/50"
        >
          We&apos;re always looking for fresh perspectives and compelling
          voices. If you have insights to share, we want to hear from you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-acm-blue px-10 py-4 font-medium text-white shadow-lg shadow-acm-blue/20 transition-all hover:shadow-xl hover:shadow-acm-blue/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Submit Your Story</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group rounded-full border border-white/20 bg-white/5 px-10 py-4 font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            <span className="flex items-center justify-center gap-3">
              <span>Editorial Guidelines</span>
              <span className="text-white/50 transition-colors group-hover:text-white">
                ↗
              </span>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex items-center gap-8 md:gap-16"
        >
          {[
            { value: "50+", label: "Stories" },
            { value: "20+", label: "Authors" },
            { value: "10K+", label: "Readers" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="block font-display text-2xl font-bold text-white md:text-3xl"
              >
                {stat.value}
              </motion.span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-normalr text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
