"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderV2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-500 md:px-12 md:py-6 lg:px-20 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          {/* Left - Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <p className="text-xs leading-tight text-gray-400">
              Open for projects
              <br />
              <span className="text-acm-blue">and collaborations —</span>
            </p>
          </motion.div>

          {/* Center - Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/ACM_Logo_white_text.png"
                alt="ACM GGSIPU"
                width={120}
                height={32}
                className="h-8 w-auto md:h-10"
              />
            </Link>
          </motion.div>

          {/* Right - Navigation (Desktop) */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-acm-blue transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
              className="h-px w-6 bg-white"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="h-px w-6 bg-white"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
              className="h-px w-6 bg-white"
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-3xl font-bold text-white transition-colors hover:text-acm-blue"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Mobile contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">Get in touch</p>
            <a href="mailto:usaracm@ipu.ac.in" className="text-sm text-acm-blue">
              usaracm@ipu.ac.in
            </a>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
}
