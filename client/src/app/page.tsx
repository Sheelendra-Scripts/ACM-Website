import Hero from "@/components/Hero";

import AboutUs from "@/components/AboutUs";
import Teams from "@/components/Teams";
import Events from "@/components/Events";

import ClosingStatement from "@/components/ClosingStatement";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutUs />
      <Events />
      <Teams />
      <ClosingStatement />
    </main>
  );
}
