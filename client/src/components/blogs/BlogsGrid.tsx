"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { type BlogPost, categories } from "@/data/blogsData";

interface BlogsGridProps {
  posts: BlogPost[];
  onPostClick?: (post: BlogPost) => void;
}

export default function BlogsGrid({ posts, onPostClick }: BlogsGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-32">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-16 bg-acm-blue/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-acm-blue">
              All Stories
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Explore the Archive
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-5 py-2 font-mono text-xs uppercase tracking-normalr transition-all duration-300 ${
                activeCategory === category
                  ? "bg-acm-blue text-white"
                  : "border border-white/10 bg-white/5 text-white/50 hover:border-acm-blue/50 hover:text-white"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 -z-10 rounded-full bg-acm-blue"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  layout: { duration: 0.4 },
                }}
                onHoverStart={() => setHoveredId(post.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => onPostClick?.(post)}
                className="group relative cursor-pointer"
              >
                {/* Card container */}
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/2 transition-all duration-500 hover:border-acm-blue/30">
                  {/* Image placeholder with gradient */}
                  <div className="relative aspect-16/10 overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, rgba(0,133,202,${
                          0.1 + (parseInt(post.id) % 5) * 0.05
                        }) 0%, rgba(10,10,20,1) 60%, rgba(0,0,0,1) 100%)`,
                      }}
                    />

                    {/* Hover zoom effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: hoveredId === post.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[9px] uppercase tracking-normalr text-white/60 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Read time badge */}
                    <div className="absolute right-4 top-4">
                      <span className="font-mono text-[9px] uppercase tracking-normalr text-white/40">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Title */}
                    <h3 className="mb-2 font-display text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-acm-blue">
                      {post.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mb-4 text-sm text-white/40">
                      {post.subtitle}
                    </p>

                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-normalr text-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and date */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-linear-to-br from-acm-blue/40 to-acm-blue/10 ring-1 ring-white/10" />
                        <span className="text-xs text-white/50">
                          {post.author.name}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-normalr text-white/30">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    {/* Read indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredId === post.id ? 1 : 0,
                        x: hoveredId === post.id ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-6 right-6 flex items-center gap-2 text-acm-blue"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-normalr">
                        Read
                      </span>
                      <span>→</span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover glow */}
                <motion.div
                  className="pointer-events-none absolute -inset-px rounded-2xl"
                  animate={{
                    boxShadow:
                      hoveredId === post.id
                        ? "0 0 40px rgba(0,133,202,0.15), inset 0 0 20px rgba(0,133,202,0.05)"
                        : "0 0 0px rgba(0,133,202,0), inset 0 0 0px rgba(0,133,202,0)",
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="font-mono text-sm uppercase tracking-normalr text-white/30">
              No stories found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
