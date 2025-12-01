"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SplitText from "../SplitText";

interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  location: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Tech Summit 2024",
    date: "OCT 15",
    category: "CONFERENCE",
    description:
      "Exploring the frontiers of AI and Machine Learning with industry leaders.",
    location: "Main Auditorium",
  },
  {
    id: 2,
    title: "Design Systems Workshop",
    date: "NOV 02",
    category: "WORKSHOP",
    description:
      "A deep dive into building scalable and beautiful user interfaces.",
    location: "Lab 302",
  },
  {
    id: 3,
    title: "Hackathon: Code for Good",
    date: "DEC 10",
    category: "COMPETITION",
    description: "48-hour coding marathon to solve real-world problems.",
    location: "Innovation Hub",
  },
  {
    id: 4,
    title: "Future of Fintech",
    date: "JAN 20",
    category: "PANEL",
    description: "Discussing the evolution of digital payments and blockchain.",
    location: "Seminar Hall",
  },
];

export default function Events() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24 flex justify-center md:mb-[20vh] mb-[35vh]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-2 border-b border-gray-800 pb-8">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="text-xs font-mono tracking-[0.3em] text-acm-blue uppercase"
            >
              Timeline
            </motion.span>
            <SplitText
              className="text-5xl md:text-7xl font-display font-bold text-white"
              delay={0.2}
            >
              Events
            </SplitText>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-right hidden md:block"
          >
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Join us in our journey of innovation. From workshops to
              hackathons, experience the pulse of technology.
            </p>
          </motion.div>
        </div>

        {/* Events List */}
        <div className="flex flex-col">
          {events.map((event, index) => (
            <EventItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventItem({ event, index }: { event: Event; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-gray-800 py-8 cursor-pointer overflow-hidden"
    >
      {/* Hover Background */}
      <motion.div
        className="absolute inset-0 bg-gray-900/30 -z-10"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        {/* Date */}
        <div className="md:col-span-2">
          <span className="block text-4xl md:text-5xl font-display font-bold text-gray-500 group-hover:text-white transition-colors duration-300">
            {event.date}
          </span>
        </div>

        {/* Info */}
        <div className="md:col-span-7 space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono tracking-normalr text-acm-blue border border-acm-blue/30 px-2 py-1 rounded-full">
              {event.category}
            </span>
            <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
              {event.location}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
            {event.title}
          </h3>
          <p className="text-gray-400 max-w-lg group-hover:text-gray-300 transition-colors">
            {event.description}
          </p>
        </div>

        {/* Arrow Action */}
        <div className="md:col-span-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
