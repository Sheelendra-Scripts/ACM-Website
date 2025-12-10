"use client";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsMarquee from "@/components/projects/ProjectsMarquee";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ProjectsClosing from "@/components/projects/ProjectsClosing";
import { projects } from "@/data/projectsData";

export default function ProjectsPage() {
  return (
    <main className="bg-[#030303] text-white selection:bg-acm-blue/30">
      <ProjectsHero />
      <ProjectsMarquee />
      <ProjectsGallery projects={projects} />
      <ProjectsClosing />
    </main>
  );
}
