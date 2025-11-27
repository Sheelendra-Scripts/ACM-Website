"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TextFillOnScroll from "@/components/TextFillOnScroll";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-4 py-20 md:px-12 md:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acm-blue/10 blur-[100px] md:h-96 md:w-96 md:blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <TextFillOnScroll className="mb-6 font-display text-3xl font-bold md:mb-8 md:text-6xl lg:text-7xl">
          Ready to begin?
        </TextFillOnScroll>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-8 max-w-xl text-base text-gray-400 md:mb-12 md:max-w-2xl md:text-xl"
        >
          Join us to explore, create, and innovate. Your journey starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6"
        >
          <Link
            href="https://discord.gg/acm-vit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full overflow-hidden rounded-full bg-acm-blue px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-acm-blue/90 hover:shadow-lg hover:shadow-acm-blue/25 sm:w-auto md:px-8 md:py-4 md:text-lg"
          >
            <span className="relative z-10">Join Discord</span>
            <div className="absolute inset-0 bg-linear-to-r from-acm-blue to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <Link
            href="/contact"
            className="w-full rounded-full border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:border-acm-blue hover:bg-acm-blue/10 sm:w-auto md:px-8 md:py-4 md:text-lg"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-6 md:mt-16 md:gap-8"
        >
          <Link
            href="https://instagram.com/acmvit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-acm-blue md:text-base"
          >
            Instagram
          </Link>
          <Link
            href="https://twitter.com/acmvit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-acm-blue md:text-base"
          >
            Twitter
          </Link>
          <Link
            href="https://linkedin.com/company/acmvit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-acm-blue md:text-base"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/acmvit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-acm-blue md:text-base"
          >
            GitHub
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
