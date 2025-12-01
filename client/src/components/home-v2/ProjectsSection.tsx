"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { TextReveal } from "../TextReveal";

interface Event {
  title: string;
  description: string;
  tags: string[];
  date: string;
  index: string;
  link?: string;
}

interface UpcomingEvent {
  title: string;
  description: string;
  tags: string[];
  dateRange: string;
  registrationLink: string;
  stats: { label: string; value: string }[];
}

// Upcoming Events
const upcomingEvents: UpcomingEvent[] = [
  {
    title: "75 DAYS DSA CHALLENGE",
    description: "Daily problems, weekly contests, mentor-led discussions, and leaderboards to build consistency and prepare for FAANG interviews.",
    tags: ["Challenge", "Algorithms", "Competitive Programming"],
    dateRange: "Jan 1 → Mar 15, 2026",
    registrationLink: "https://forms.gle/acm-dsa-challenge-2026",
    stats: [
      { label: "Days", value: "75" },
      { label: "Problems", value: "150+" },
      { label: "Contests", value: "10" },
      { label: "Mentors", value: "5" }
    ]
  }
];

// Past Events (top 6)
const pastEvents: Event[] = [
  {
    title: "FAANG WEEKEND EP 3",
    description: "Senior engineers from Google sharing system design tips and interview strategies.",
    tags: ["Career", "Google"],
    date: "Nov 22, 2025",
    index: "01",
  },
  {
    title: "ACM CODECATALYST 0x6",
    description: "A 6-day online bootcamp covering DSA, Development, and Machine Learning.",
    tags: ["Bootcamp", "DSA"],
    date: "Oct 29 – Nov 3, 2025",
    index: "02",
  },
  {
    title: "SILICON QUEST: ANIMEVERSE",
    description: "An anime-themed hackathon blending technology and innovation.",
    tags: ["Hackathon", "Creative"],
    date: "Oct 5–7, 2025",
    index: "03",
    link: "https://unstop.com",
  },
  {
    title: "HELA CROSSROADS",
    description: "Workshop with HeLa Labs on Web3 fundamentals and smart contracts.",
    tags: ["Web3", "Blockchain"],
    date: "Sep 26, 2025",
    index: "04",
  },
  {
    title: "FAANG WEEKEND EP 2",
    description: "Sanket Singh from Meta on SDE interviews and career growth.",
    tags: ["Career", "Meta"],
    date: "Sep 21, 2025",
    index: "05",
  },
  {
    title: "BUILDING AI CHATBOTS",
    description: "Hands-on workshop building chatbots with Python and OpenAI APIs.",
    tags: ["Workshop", "AI"],
    date: "Aug 22, 2025",
    index: "06",
  },
];

/**
 * Upcoming Event Card - Simplified premium design
 */
function UpcomingEventCard({ event }: { event: UpcomingEvent }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0a0a0a] to-[#050505]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Visual */}
        <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-[500px] bg-linear-to-br from-[#0d1117] to-[#080808] flex items-center justify-center">
          {/* Large Number */}
          <span className="text-[140px] md:text-[200px] font-black text-white/5 select-none" style={{ fontFamily: "var(--font-heading)" }}>
            75
          </span>
          <p className="absolute bottom-1/3 text-white/40 text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
            Days of Code
          </p>
          
          {/* Badge */}
          <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-acm-blue/90">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-xs font-semibold text-white uppercase tracking-normalr" style={{ fontFamily: "var(--font-body)" }}>
              Upcoming
            </span>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          {/* Date */}
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-4 h-4 text-acm-blue" />
            <span className="text-acm-blue font-medium tracking-normal" style={{ fontFamily: "var(--font-body)" }}>
              {event.dateRange}
            </span>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] font-semibold uppercase tracking-normalst text-white/60 border border-white/15 rounded-full"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h3
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-normal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {event.title}
          </h3>
          
          {/* Description */}
          <p
            className="text-white/50 text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {event.description}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8 py-6 border-y border-white/10">
            {event.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-2xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </span>
                <span className="text-[9px] uppercase tracking-normalr text-white/40" style={{ fontFamily: "var(--font-body)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-acm-blue text-white font-semibold text-sm uppercase tracking-normalr transition-all duration-300 hover:bg-acm-blue/90"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Event Card - Simple and clean
 */
function EventCard({ event, index }: { event: Event; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group relative bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-300 hover:border-white/10"
    >
      {/* Index */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-acm-blue text-xs font-medium tracking-normalst" style={{ fontFamily: "var(--font-body)" }}>
          {event.index}
        </span>
        <div className="w-6 h-px bg-white/20" />
        <span className="text-xs text-white/40" style={{ fontFamily: "var(--font-body)" }}>
          {event.date}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-normal" style={{ fontFamily: "var(--font-heading)" }}>
        {event.title}
      </h3>
      
      {/* Description */}
      <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
        {event.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-[10px] uppercase tracking-normalst text-white/40 border border-white/10 rounded"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Link */}
      {event.link ? (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span>View Event</span>
          <ArrowUpRight size={14} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-white/30" style={{ fontFamily: "var(--font-body)" }}>
          <span>Completed</span>
        </span>
      )}
    </motion.div>
  );
}

/**
 * Section Header
 */
function SectionHeader({ title, subtitle, isUpcoming = false }: { title: string; subtitle: string; isUpcoming?: boolean }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={headerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-px bg-acm-blue/50" />
        <span className={`text-[10px] tracking-[0.4em] uppercase ${isUpcoming ? 'text-acm-blue' : 'text-white/30'}`} style={{ fontFamily: "var(--font-body)" }}>
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-normal" style={{ fontFamily: "var(--font-heading)" }}>
        <TextReveal text={title} delay={0.1} />
      </h2>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="events"
      className="relative w-full bg-black overflow-hidden py-24 md:py-32"
      style={{ zIndex: 10 }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-acm-blue/3 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Upcoming Events */}
          <SectionHeader title="Join the Challenge" subtitle="Upcoming Events" isUpcoming />
          
          <div className="mb-24">
            {upcomingEvents.map((event) => (
              <UpcomingEventCard key={event.title} event={event} />
            ))}
          </div>
          
          {/* Past Events */}
          <SectionHeader title="What We've Hosted" subtitle="Past Events" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard key={event.index} event={event} index={index} />
            ))}
          </div>
          
          {/* View All CTA */}
          <div className="text-center mt-16">
            <a
              href="/events"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white/60 text-sm uppercase tracking-normalst hover:border-white/30 hover:text-white transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span>View All Events</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
