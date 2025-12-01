"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { type BlogPost } from "@/data/blogsData";

interface BlogsFeaturedProps {
  posts: BlogPost[];
  onPostClick?: (post: BlogPost) => void;
}

export default function BlogsFeatured({
  posts,
  onPostClick,
}: BlogsFeaturedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-black py-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-acm-blue/5 blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-acm-blue/3 blur-[150px]" />
      </div>

      {/* Section header */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-16 bg-acm-blue/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-acm-blue">
              Featured Stories
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span className="text-white">Tales that</span>
            <br />
            <span className="bg-linear-to-r from-white/40 to-white/20 bg-clip-text text-transparent">
              Inspire
            </span>
          </h2>
        </motion.div>

        {/* Featured posts layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main featured post */}
          {featuredPosts[0] && (
            <FeaturedCard
              post={featuredPosts[0]}
              isMain
              scrollProgress={scrollYProgress}
              onClick={() => onPostClick?.(featuredPosts[0])}
            />
          )}

          {/* Secondary featured posts */}
          <div className="flex flex-col gap-8">
            {featuredPosts.slice(1, 3).map((post, index) => (
              <FeaturedCard
                key={post.id}
                post={post}
                isMain={false}
                index={index}
                scrollProgress={scrollYProgress}
                onClick={() => onPostClick?.(post)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  post,
  isMain,
  index = 0,
  scrollProgress,
  onClick,
}: {
  post: BlogPost;
  isMain: boolean;
  index?: number;
  scrollProgress: ReturnType<
    typeof useTransform<number, number>
  > extends infer T
    ? T
    : never;
  onClick?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: isMain ? 0 : 0.2 + index * 0.15 }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm transition-all duration-700 hover:border-acm-blue/30 ${
        isMain ? "lg:row-span-2" : ""
      }`}
    >
      {/* Image section */}
      <div
        className={`relative overflow-hidden ${
          isMain ? "aspect-4/3 lg:aspect-auto lg:h-full" : "aspect-video"
        }`}
      >
        {/* Placeholder gradient for missing images */}
        <div
          className="absolute inset-0 bg-linear-to-br from-acm-blue/20 via-gray-900 to-black"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,133,202,0.15) 0%, rgba(10,10,15,1) 50%, rgba(0,0,0,1) 100%)`,
          }}
        />

        {/* Animated overlay on hover */}
        <motion.div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

        {/* Cinematic bars */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-black/80 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block rounded-full border border-acm-blue/30 bg-acm-blue/10 px-3 py-1 font-mono text-[10px] uppercase tracking-normalr text-acm-blue backdrop-blur-sm">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`font-display font-bold leading-tight text-white transition-colors duration-300 group-hover:text-acm-blue ${
              isMain
                ? "text-2xl md:text-4xl lg:text-5xl"
                : "text-xl md:text-2xl"
            }`}
          >
            {post.title}
          </motion.h3>

          {/* Subtitle - only on main */}
          {isMain && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-2 text-lg text-white/50"
            >
              {post.subtitle}
            </motion.p>
          )}

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className={`mt-4 leading-relaxed text-white/40 ${
              isMain ? "text-base md:text-lg" : "text-sm line-clamp-2"
            }`}
          >
            {post.excerpt}
          </motion.p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center gap-4"
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-linear-to-br from-acm-blue/40 to-acm-blue/10 ring-1 ring-white/10" />
              <div>
                <span className="block text-sm font-medium text-white/70">
                  {post.author.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-normalr text-white/30">
                  {post.author.role}
                </span>
              </div>
            </div>

            <span className="h-4 w-px bg-white/10" />

            {/* Read time */}
            <span className="font-mono text-[10px] uppercase tracking-normalr text-white/30">
              {post.readTime}
            </span>
          </motion.div>

          {/* Read more indicator */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 flex items-center gap-2 text-white/40 transition-all duration-300 group-hover:gap-4 group-hover:text-acm-blue"
          >
            <span className="font-mono text-xs uppercase tracking-normalr">
              Read Story
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-br from-acm-blue/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
