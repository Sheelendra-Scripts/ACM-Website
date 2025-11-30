"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string;
  color: string;
  alignRight: boolean;
  speed: number;
}

const projects: Project[] = [
  {
    title: "HACKATHON 2024",
    description:
      "Our flagship annual hackathon bringing together 500+ participants from across the nation. A 36-hour coding marathon featuring innovative solutions to real-world problems, mentorship from industry experts, and prizes worth ₹2,00,000+.",
    tags: "#hackathon #innovation #collaboration #tech",
    color: "bg-[#1a1a2e]",
    alignRight: false,
    speed: -0.7,
  },
  {
    title: "TECH WORKSHOP SERIES",
    description:
      "Comprehensive workshop series covering cutting-edge technologies. From React and Next.js to Machine Learning with Python, our workshops provide hands-on experience with industry-standard tools.",
    tags: "#workshops #react #python #hands-on",
    color: "bg-[#1e293b]",
    alignRight: true,
    speed: -0.25,
  },
  {
    title: "DESIGN BOOTCAMP",
    description:
      "Intensive design program focusing on UI/UX principles, Figma mastery, and design thinking. Students learn to create user-centered designs that solve real problems.",
    tags: "#design #ui/ux #figma #creative",
    color: "bg-[#1a1a2e]",
    alignRight: false,
    speed: -0.75,
  },
  {
    title: "OPEN SOURCE INITIATIVE",
    description:
      "Contributing to and maintaining open-source projects that benefit the developer community. Members gain real-world experience in collaborative coding and project management.",
    tags: "#opensource #github #community #code",
    color: "bg-[#1e293b]",
    alignRight: true,
    speed: -0.25,
  },
];

/**
 * HOOK: useParallax
 * A simple custom hook to calculate parallax offset based on scroll position.
 */
export const useParallax = (ref: React.RefObject<HTMLDivElement | null>, speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate distance from center of viewport
      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;

      // Multiply by speed to get the pixel offset
      setOffset(distanceFromCenter * speed);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  return offset;
};

/**
 * COMPONENT: ProjectItem
 * Replicates the structure of the provided reference code
 */
function ProjectItem({
  title,
  description,
  tags,
  color,
  alignRight = false,
  speed = -0.1,
}: Project) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply parallax to the entire container
  const yOffset = useParallax(containerRef, speed);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[100vh] max-w-7xl mx-auto py-24 px-6 md:px-12 flex flex-col ${alignRight ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 md:gap-24`}
      style={{ transform: `translate3d(0px, ${yOffset}px, 0px)` }}
    >
      {/* --- Visual Wrapper (Video Placeholder) --- */}
      <div className="w-full md:w-3/5 relative group">
        <div className="relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-75 ease-out will-change-transform">
          {/* Placeholder for Video/Image */}
          <div
            className={`w-full aspect-video ${color} flex items-center justify-center text-white/20 font-bold text-xl tracking-widest uppercase`}
          >
            Video Placeholder
          </div>

          {/* Hover Button Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <div className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Site <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* --- Info Wrapper --- */}
      <div className="w-full md:w-2/5 flex flex-col relative">
        {/* The 'Timeline' visual elements */}
        <div
          className={`hidden md:block absolute top-0 bottom-0 ${alignRight ? "-right-12" : "-left-12"
            } w-px bg-gray-700`}
        >
          <div className="absolute top-1/4 -left-[5px] w-[11px] h-[11px] border-2 border-gray-600 rounded-full bg-[#0d0d0d] z-10" />
        </div>

        <div
          className={`space-y-6 ${alignRight ? "md:text-right" : "md:text-left"
            }`}
        >
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            {title}
          </h3>

          <div
            className={`h-px w-12 bg-gray-600 my-4 inline-block ${alignRight ? "ml-auto" : ""
              }`}
          />

          <div className="text-lg text-gray-400 leading-relaxed font-light">
            {description}
          </div>

          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide leading-loose">
            {tags}
          </p>

          <button
            className={`mt-4 text-sm font-bold border-b-2 border-white text-white pb-1 w-max hover:text-acm-blue hover:border-acm-blue transition-colors ${alignRight ? "ml-auto" : "mr-auto"
              }`}
          >
            VIEW CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0d0d0d]/90 overflow-hidden  backdrop-blur-sm"
    >
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-[#0d0d0d] z-5"/>
      {/* Fixed Grid Background - Stays in place while content scrolls */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: "inset(0)" }}
      >
        <div
          className="fixed inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(75, 85, 99, 0.9) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(75, 85, 99, 0.9) 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 py-24 overflow-hidden">
        <div className="container mx-auto">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              color={project.color}
              alignRight={project.alignRight}
              speed={project.speed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
