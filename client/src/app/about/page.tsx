import {
  AboutHero,
  BridgingTheGap,
  StoryIntro,
  HowWeEngage,
  WhyACM,
  FAQSection,
  CTASection,
} from "@/components/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AboutHero />
      <BridgingTheGap />
      <StoryIntro />
      <HowWeEngage />
      <WhyACM />
      <FAQSection />
      <CTASection />
    </main>
  );
}
