"use client";

import { motion } from "framer-motion";
import TextFillOnScroll from "../TextFillOnScroll";
import InteractiveGridPattern from "./InteractiveGridPattern";
import BackgroundMorph from "./BackgroundMorph";

export default function ClosingStatement() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black flex items-center justify-center py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <BackgroundMorph />
        <InteractiveGridPattern />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto text-center pointer-events-none">
        <div className="pointer-events-auto">
          <TextFillOnScroll className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-[0.9] tracking-normal mb-12">
            Ready to shape the future? Join the community where innovation has
            no boundaries.
          </TextFillOnScroll>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Join Us Today</span>
              <div className="absolute inset-0 bg-linear-to-r from-acm-blue to-acm-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
