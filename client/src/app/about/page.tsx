import {
  AboutHero,
  WhatIsACM,
  AboutGGSIPU,
  AboutChapter,
  FAQSection,
  CTASection,
} from "@/components/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <AboutHero />
      <WhatIsACM />
      <AboutGGSIPU />
      <AboutChapter />
      <FAQSection />
      <CTASection />
    </main>
  );
}
