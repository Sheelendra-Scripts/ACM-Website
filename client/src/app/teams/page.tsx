import TeamsHero from "@/components/teams/TeamsHero";
import TeamSection from "@/components/teams/TeamSection";
import CinematicScroll from "@/components/teams/CinematicScroll";
import {
  officeBearer,
  acmCreatives,
  teamLeads,
  creativeLeads,
} from "@/data/teamData";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Cinematic Scroll Indicator */}
      <CinematicScroll />

      {/* Hero Section */}
      <TeamsHero />

      {/* Content Sections */}
      <div className="relative">
        {/* Office Bearers */}
        <TeamSection
          title="The Leadership"
          subtitle="ACT I: Office Bearers"
          members={officeBearer}
          sectionNumber="01"
        />

        {/* ACM Creatives Heads */}
        <TeamSection
          title="Creative Vision"
          subtitle="ACT II: ACM Creatives"
          members={acmCreatives}
          sectionNumber="02"
        />

        {/* Team Leads */}
        <TeamSection
          title="Technical Knights"
          subtitle="ACT III: Team Captains"
          members={teamLeads}
          sectionNumber="03"
        />

        {/* Creative Leads */}
        <TeamSection
          title="The Artisans"
          subtitle="ACT IV: Creative Captains"
          members={creativeLeads}
          sectionNumber="04"
        />

        {/* Final Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-acm-blue to-transparent max-w-7xl mx-auto" />

        {/* Closing Credits */}
        <div className="py-24 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-4">
            End Credits
          </p>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white/10">
            To Be Continued...
          </h3>
        </div>
      </div>
    </main>
  );
}
