"use client";

import { motion, useScroll } from "framer-motion";

export default function CinematicScroll() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* Film Strip Container */}
      <div className="relative w-8 h-64">
        {/* Film Strip Background */}
        <div className="absolute inset-0 border border-white/10 rounded-full overflow-hidden bg-black/20 backdrop-blur-sm">
          {/* Perforations */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 flex flex-col justify-around py-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-white/5 border border-white/10"
              />
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ scaleY: scrollYProgress }}
        >
          <div className="w-full h-full bg-linear-to-b from-acm-blue via-acm-blue-light to-acm-blue" />
        </motion.div>

        {/* Current Frame Number */}
        <motion.div
          className="absolute -left-16 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            className="text-xs font-mono text-gray-500 tracking-wider"
            style={{
              opacity: useScroll().scrollYProgress,
            }}
          >
            FRAME
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
