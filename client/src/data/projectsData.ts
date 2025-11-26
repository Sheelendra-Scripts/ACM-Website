export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  metrics: string[];
  tone: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Solstice",
    subtitle: "Interactive Film Festival Showcase",
    summary:
      "A browser-based premiere room that stitched Dolby Atmos stems, live chat, and volumetric lighting so every premiere felt like a midnight screening.",
    description:
      "Solstice reimagines the cinema experience for a distributed world. We built a browser-based screening room where film premieres unfold with Dolby Atmos spatial audio, real-time chat overlays that pulse with audience emotion, and volumetric lighting that syncs to each scene's color temperature. The result: 92 countries tuned in simultaneously, racking up 11.4 million watch minutes during a single festival weekend.",
    metrics: ["92 countries", "11.4M watch minutes", "Realtime color grading"],
    tone: "acm-blue",
    image: "/assets/project_showcase_1.webp",
    tags: ["Web GL", "Spatial Audio", "React", "Three.js"],
    year: "2024",
    role: "Technical Lead",
    link: "#",
    featured: true,
  },
  {
    id: "02",
    title: "Pulse",
    subtitle: "Campus-wide Wellbeing Platform",
    summary:
      "Biometric wearables met journaling loops. We designed story-driven dashboards where every data pulse breathed like a slow-motion heartbeat.",
    description:
      "Pulse connects biometric wearables with narrative journaling to create a wellbeing ecosystem for 18 university labs. Our dashboards don't just chart heart rates—they breathe. Data visualizations expand and contract like lungs, helping researchers understand stress patterns at a glance. Four custom neural models power anomaly detection, and the system has maintained zero downtime since launch.",
    metrics: ["18 labs", "4 neural models", "Zero downtime"],
    tone: "acm-blue",
    image: "/assets/project_showcase_2.webp",
    tags: ["AI/ML", "Health Tech", "D3.js", "Python"],
    year: "2024",
    role: "Full Stack + ML",
    link: "#",
    featured: true,
  },
  {
    id: "03",
    title: "Archive°",
    subtitle: "Living Museum for ACM Chapters",
    summary:
      "An infinite scroll atlas that maps code commits, photos, and oral histories into seasons—so every cohort can see their origin story.",
    description:
      "Archive° is a living museum that weaves together 120 oral histories, 35 terabytes of photos and videos, and thousands of code commits into a navigable timeline. AI-powered curation surfaces forgotten stories when you least expect them. The interface feels like wandering through seasons: spring batches bloom with new recruits, winter preserves legacy projects in crystalline detail.",
    metrics: ["120 stories", "35TB media", "AI curation"],
    tone: "acm-blue",
    image: "/assets/project_showcase_3.webp",
    tags: ["Archive", "AI", "Next.js", "Supabase"],
    year: "2023",
    role: "Design + Frontend",
    link: "#",
    featured: true,
  },
  {
    id: "04",
    title: "Nebula",
    subtitle: "Real-time Collaboration Canvas",
    summary:
      "A multiplayer whiteboard where ideas orbit like constellations—drag, connect, and watch concepts collide in zero gravity.",
    description:
      "Nebula turns brainstorming into a cosmic experience. Ideas float as luminous nodes that team members can drag, connect, and cluster. The physics engine simulates gentle gravitational pull, so related concepts naturally drift together. Used by 12 ACM project teams for sprint planning, it's become the default tool for turning chaos into constellations.",
    metrics: ["12 teams", "4,200 boards", "Real-time sync"],
    tone: "acm-blue",
    image: "/assets/project_showcase_1.webp",
    tags: ["Collaboration", "WebSocket", "Canvas API", "React"],
    year: "2024",
    role: "Frontend Lead",
    link: "#",
  },
  {
    id: "05",
    title: "Cipher",
    subtitle: "Competitive Programming Arena",
    summary:
      "A battleground where algorithms duel in real-time—live leaderboards, instant feedback, and the thrill of the clock.",
    description:
      "Cipher is where code meets competition. Real-time leaderboards update as contestants submit, with instant feedback powered by sandboxed execution environments. The interface pulses with urgency: timers count down, rankings shuffle, and spectators watch highlighted solutions unfold character by character. Over 800 participants have battled across 24 contests.",
    metrics: ["800+ users", "24 contests", "50ms judging"],
    tone: "acm-blue",
    image: "/assets/project_showcase_2.webp",
    tags: ["Competitive", "Docker", "Go", "WebSocket"],
    year: "2023",
    role: "Backend Architect",
    link: "#",
  },
];

