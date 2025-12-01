"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function FooterSection() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "About", href: "#about", number: "01" },
    { label: "Projects", href: "#projects", number: "02" },
    { label: "Process", href: "#process", number: "03" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/acm-ggsipu" },
    { label: "LinkedIn", href: "https://linkedin.com/company/acm-ggsipu" },
    { label: "Instagram", href: "https://instagram.com/acm_ggsipu" },
    { label: "Twitter", href: "https://twitter.com/acm_ggsipu" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black px-6 py-12 md:px-12 lg:px-20"
    >
      {/* Top gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-6 right-6 top-0 h-px origin-left bg-linear-to-r from-acm-blue via-gray-700 to-transparent md:left-12 md:right-12 lg:left-20 lg:right-20"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-3 md:py-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/ACM_Logo_white_text.png"
                alt="ACM GGSIPU"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Building the future of technology,
              <br />
              one developer at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 text-xs font-medium uppercase tracking-normalr text-gray-500">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="font-mono text-xs text-acm-blue opacity-50 transition-opacity group-hover:opacity-100">
                      {link.number}
                    </span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-acm-blue transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 text-xs font-medium uppercase tracking-normalr text-gray-500">
              Connect
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-sm text-gray-400 transition-colors hover:text-acm-blue"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-start justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row md:items-center"
        >
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
            whileHover={{ y: -2 }}
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
            Back to top
          </motion.button>

          {/* Copyright */}
          <p className="font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} ACM GGSIPU — All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
