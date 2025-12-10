import {
  EventsHero,
  EventsMarquee,
  EventsShowcase,
  EventsClosing,
} from "@/components/events";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-acm-blue/30">
      <EventsHero />
      <EventsMarquee />
      <EventsShowcase />
      <EventsClosing />
    </main>
  );
}
