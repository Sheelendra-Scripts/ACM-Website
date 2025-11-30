import {
  HeaderV2,
  HeroV2,
  AboutSection,
  MarqueeSection,
  ProjectsSection,
  MarqueeColumnSection,
  ProcessSection,
  GallerySection,
  ContactSection,
  FooterSection,
  ParallaxImageSection,
} from "@/components/home-v2";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <ParallaxImageSection />
      <MarqueeSection />
      <ProjectsSection />
      <MarqueeColumnSection />
      <GallerySection />
      <ProcessSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
