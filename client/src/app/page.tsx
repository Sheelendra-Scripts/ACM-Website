import Hero from "@/components/home/Hero";

import AboutUs from "@/components/home/AboutUs";
import Teams from "@/components/home/Teams";
import Events from "@/components/home/Events";

import ClosingStatement from "@/components/home/ClosingStatement";

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
