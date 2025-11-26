"use client";

import HeroSection from "@/components/projects/HeroSection";
import TransitionSection from "@/components/projects/TransitionSection";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import FeaturedDeepDive from "@/components/projects/FeaturedDeepDive";
import ClosingStatement from "@/components/projects/ClosingStatement";
import { projects } from "@/data/projectsData";

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white selection:bg-acm-blue/30">
      <HeroSection />
      <TransitionSection />
      <ProjectsShowcase projects={projects} />
      <FeaturedDeepDive projects={projects} />
      <ClosingStatement />
    </main>
  );
}
