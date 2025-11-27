"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useCallback } from "react";
import { X, Clock, Calendar, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { type BlogPost } from "@/data/blogsData";

interface BlogReaderProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogReader({ post, isOpen, onClose }: BlogReaderProps) {
  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
          />

          {/* Reader container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-4 z-50 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f] shadow-2xl md:inset-8 lg:inset-12"
          >
            {/* Inner scroll container */}
            <div className="h-full overflow-y-auto overflow-x-hidden">
              {/* Hero section */}
              <div className="relative min-h-[50vh] overflow-hidden">
                {/* Background gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 133, 202, 0.15), transparent 50%),
                      linear-gradient(180deg, rgba(0,133,202,0.08) 0%, transparent 40%),
                      linear-gradient(135deg, rgba(0,133,202,0.1) 0%, rgba(10,10,15,1) 50%, rgba(0,0,0,1) 100%)
                    `,
                  }}
                />

                {/* Cinematic bars */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0a0a0f] to-transparent" />

                {/* Top bar with controls */}
                <div className="sticky top-0 z-20 flex items-center justify-between p-4 md:p-6">
                  {/* Back button */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={onClose}
                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-sm transition-all hover:border-acm-blue/50 hover:bg-black/60"
                  >
                    <ArrowLeft className="h-4 w-4 text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-acm-blue" />
                    <span className="font-mono text-xs uppercase tracking-wider text-white/60 group-hover:text-white">
                      Back
                    </span>
                  </motion.button>

                  {/* Action buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <button className="rounded-full border border-white/10 bg-black/40 p-2.5 backdrop-blur-sm transition-all hover:border-acm-blue/50 hover:bg-black/60">
                      <Bookmark className="h-4 w-4 text-white/60" />
                    </button>
                    <button className="rounded-full border border-white/10 bg-black/40 p-2.5 backdrop-blur-sm transition-all hover:border-acm-blue/50 hover:bg-black/60">
                      <Share2 className="h-4 w-4 text-white/60" />
                    </button>
                    <button
                      onClick={onClose}
                      className="rounded-full border border-white/10 bg-black/40 p-2.5 backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-red-500/10"
                    >
                      <X className="h-4 w-4 text-white/60" />
                    </button>
                  </motion.div>
                </div>

                {/* Hero content */}
                <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-8 md:px-12 md:pt-12">
                  {/* Category */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <span className="inline-block rounded-full border border-acm-blue/30 bg-acm-blue/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-acm-blue">
                      {post.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                  >
                    {post.title}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8 text-xl text-white/50 md:text-2xl"
                  >
                    {post.subtitle}
                  </motion.p>

                  {/* Meta row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center gap-6"
                  >
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-linear-to-br from-acm-blue/40 to-acm-blue/10 ring-2 ring-white/10" />
                      <div>
                        <span className="block text-sm font-medium text-white">
                          {post.author.name}
                        </span>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-white/40">
                          {post.author.role}
                        </span>
                      </div>
                    </div>

                    <span className="h-6 w-px bg-white/10" />

                    {/* Date */}
                    <div className="flex items-center gap-2 text-white/40">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono text-xs uppercase tracking-wider">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <span className="h-6 w-px bg-white/10" />

                    {/* Read time */}
                    <div className="flex items-center gap-2 text-white/40">
                      <Clock className="h-4 w-4" />
                      <span className="font-mono text-xs uppercase tracking-wider">
                        {post.readTime}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Article content */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative mx-auto max-w-3xl px-6 pb-20 md:px-12"
              >
                {/* Tags */}
                <div className="mb-12 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="mb-12 flex items-center gap-4">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-acm-blue/40"
                      />
                    ))}
                  </div>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                  {/* Opening quote */}
                  <blockquote className="relative border-l-2 border-acm-blue/50 pl-6 italic text-white/60">
                    <p className="text-xl leading-relaxed">{post.excerpt}</p>
                  </blockquote>

                  {/* Sample content paragraphs */}
                  <p className="text-white/70 leading-relaxed">
                    In the ever-evolving landscape of technology, we find
                    ourselves at the intersection of innovation and imagination.
                    The boundaries that once defined what was possible are being
                    redrawn with each passing day, as pioneers and dreamers push
                    the limits of human achievement.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    At ACM GGSIPU EDC, we believe that the future belongs to
                    those who can see beyond the horizon—those who understand
                    that technology is not just about code and circuits, but
                    about the human stories that give them meaning. Every
                    project we undertake is a conversation with tomorrow, a
                    question posed to the universe about what could be.
                  </p>

                  <h2 className="mt-12 mb-6 font-display text-2xl font-bold text-white">
                    The Journey Begins
                  </h2>

                  <p className="text-white/70 leading-relaxed">
                    Our community is built on the foundation of shared curiosity
                    and collective growth. When one of us learns something new,
                    we all benefit. When one of us faces a challenge, we face it
                    together. This is the essence of what makes ACM not just an
                    organization, but a family of innovators.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    The stories we tell here are not just about technical
                    achievements— they are about the late nights spent
                    debugging, the eureka moments in the shower, the friendships
                    forged over shared frustrations and triumphs. They are about
                    becoming the best versions of ourselves through the pursuit
                    of knowledge and the joy of creation.
                  </p>

                  <h2 className="mt-12 mb-6 font-display text-2xl font-bold text-white">
                    Looking Forward
                  </h2>

                  <p className="text-white/70 leading-relaxed">
                    As we continue to grow and evolve, we remain committed to
                    our core values: excellence, collaboration, and impact. We
                    are not content to simply follow trends—we aim to set them.
                    We don&apos;t just want to participate in the future; we
                    want to shape it.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    Join us on this journey. Whether you&apos;re a seasoned
                    developer or just taking your first steps into the world of
                    technology, there&apos;s a place for you here. Together, we
                    can build something extraordinary.
                  </p>
                </div>

                {/* End divider */}
                <div className="mt-16 mb-12 flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-linear-to-r from-transparent to-white/20" />
                  <div className="font-mono text-xs uppercase tracking-widest text-white/20">
                    End
                  </div>
                  <div className="h-px w-16 bg-linear-to-l from-transparent to-white/20" />
                </div>

                {/* Author card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                  <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-linear-to-br from-acm-blue/40 to-acm-blue/10 ring-2 ring-white/10" />
                    <div className="flex-1">
                      <h4 className="mb-1 font-display text-lg font-bold text-white">
                        Written by {post.author.name}
                      </h4>
                      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-acm-blue">
                        {post.author.role}
                      </p>
                      <p className="text-sm text-white/50">
                        Passionate about technology and its potential to
                        transform lives. Part of the ACM GGSIPU EDC family.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Film grain overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-30 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
