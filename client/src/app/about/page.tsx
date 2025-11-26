"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import {
  GraduationCap,
  Rocket,
  Users,
  Lightbulb,
  Target,
  Zap,
  Globe,
  Award,
  ChevronDown,
  Palette,
  Code,
  Camera,
} from "lucide-react";

type ParticleConfig = {
  left: number;
  top: number;
  duration: number;
  delay: number;
};

const heroParticleConfigs: ParticleConfig[] = createParticleConfigs(
  20,
  0x1f2a3c
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <BridgingTheGap />
      <StoryIntro />
      <HowWeEngageSection />
      <WhyACMSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

import TextFillOnScroll from "@/components/TextFillOnScroll";

// Hero Section - The Opening
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background - Import the component */}
      <div className="absolute inset-0">
        {/* Main large orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-96 h-96 md:w-[600px] md:h-[600px]">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-acm-blue/30 via-acm-blue-light/20 to-gray-500/10 blur-3xl" />

            {/* Main orb with iridescent gradient */}
            <motion.div
              className="absolute inset-8 rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(0, 133, 202, 0.5), transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(0, 163, 255, 0.4), transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.15), transparent 70%)
                `,
                boxShadow: `
                  inset 0 0 60px rgba(0, 133, 202, 0.4),
                  inset 0 0 120px rgba(0, 163, 255, 0.3),
                  0 0 80px rgba(0, 133, 202, 0.3)
                `,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner highlight */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Secondary smaller orb */}
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 30, -30, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-acm-blue-light/25 via-acm-blue/20 to-gray-400/10 blur-2xl" />
            <motion.div
              className="absolute inset-4 rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 40% 40%, rgba(0, 163, 255, 0.5), transparent 50%),
                  radial-gradient(circle at 60% 60%, rgba(0, 133, 202, 0.4), transparent 60%)
                `,
                boxShadow: `
                  inset 0 0 40px rgba(0, 163, 255, 0.5),
                  0 0 60px rgba(0, 133, 202, 0.3)
                `,
              }}
              animate={{
                backgroundPosition: ["100% 100%", "0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>

        {/* Ambient particles */}
        {heroParticleConfigs.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-acm-blue/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-sm md:text-base text-gray-400 tracking-wider">
            GGSIPU EDC ACM Student Chapter
          </span>
        </motion.div>

        {/* Main headline - Ellis Digital style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tight text-white mb-8"
        >
          Where Creativity
          <br />
          Meets Technology.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-gray-400 mb-12 tracking-wide"
        >
          Innovation • Community • Impact
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-acm-blue/20">
            <span className="relative z-10">Explore Our Community</span>
            <div className="absolute inset-0 bg-linear-to-r from-acm-blue to-acm-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Bridging The Gap - New Cinematic Section
function BridgingTheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black flex items-center justify-center py-32 px-6 md:px-12"
    >
      <motion.div
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto text-center"
      >
        <TextFillOnScroll className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-16">
          We believe the future belongs to those who can bridge worlds. The
          coder who understands design. The artist who speaks in algorithms. The
          storyteller who builds with code.
        </TextFillOnScroll>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: Code,
              title: "Technical",
              desc: "ML, Web Dev, DSA",
              color: "from-blue-600 to-acm-blue",
            },
            {
              icon: Palette,
              title: "Creative",
              desc: "Design, Content, Media",
              color: "from-purple-600 to-pink-600",
            },
            {
              icon: Users,
              title: "United",
              desc: "One Community",
              color: "from-acm-blue to-acm-blue-light",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 rounded-3xl border border-gray-800 bg-gray-900/20 hover:border-acm-blue/50 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <item.icon className="w-12 h-12 text-acm-blue mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// Water Fill Effect Component
function WaterFillText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.5"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      {/* Fill Layer - Rising Water */}
      <motion.span
        className="absolute inset-0 z-0 text-transparent bg-clip-text bg-linear-to-r bg-gray-50"
        style={{ clipPath }}
        aria-hidden="true"
      >
        {children}
      </motion.span>

      {/* Outline Layer - Glass Container */}
      <span
        className="relative z-10 block text-transparent bg-clip-text"
        style={{
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// Story Introduction - Setting the Scene
function StoryIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black flex items-center justify-center py-32 px-6 md:px-12"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-5xl mx-auto text-center space-y-12"
      >
        <div className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
          <WaterFillText>
            Beyond launch, we offer ongoing support and community partnerships
            to help you scale your potential.
          </WaterFillText>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
        >
          {[
            { icon: Users, label: "50+ Active Members" },
            { icon: Rocket, label: "20+ Events Annually" },
            { icon: Award, label: "Industry Recognition" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm hover:bg-gray-900/40 hover:border-acm-blue/30 transition-all duration-300"
            >
              <stat.icon
                className="w-10 h-10 text-acm-blue"
                strokeWidth={1.5}
              />
              <span className="text-lg text-gray-300 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function createParticleConfigs(count: number, seed: number): ParticleConfig[] {
  const random = mulberry32(seed);
  return Array.from({ length: count }).map(() => ({
    left: random() * 100,
    top: random() * 100,
    duration: 3 + random() * 4,
    delay: random() * 5,
  }));
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// How We Engage - The Journey
function HowWeEngageSection() {
  const engagements = [
    {
      title: "Learn",
      subtitle: "Workshops & Bootcamps",
      price: "Free for Members",
      description:
        "Launch your journey with structured learning paths for both technical and creative skills.",
      features: [
        "Technical Workshops (ML, Web Dev, DSA)",
        "Creative Bootcamps (Design, Content)",
        "Cross-Domain Mentorship",
        "Learning Resources for All",
      ],
      icon: GraduationCap,
      gradient: "from-blue-600 to-acm-blue",
    },
    {
      title: "Build",
      subtitle: "Hackathons & Projects",
      price: "Ongoing Access",
      description:
        "Hands-on experience building real projects where tech meets creativity.",
      features: [
        "Hackathon Participation",
        "Tech + Creative Collaborations",
        "Portfolio Building",
        "Real-World Projects",
      ],
      icon: Rocket,
      gradient: "from-acm-blue to-purple-600",
    },
    {
      title: "Connect",
      subtitle: "Community & Network",
      price: "Lifetime Value",
      description:
        "Join a diverse community of developers, designers, and creators building together.",
      features: [
        "Industry Networking",
        "Cross-Functional Teams",
        "Alumni Network",
        "Career Opportunities",
      ],
      icon: Globe,
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-acm-blue/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/5 rounded-full blur-[150px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <TextFillOnScroll className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            How we engage
          </TextFillOnScroll>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Three pathways to transform your potential into impact
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => (
            <EngagementCard key={index} {...engagement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementCard({
  title,
  subtitle,
  price,
  description,
  features,
  icon: Icon,
  gradient,
  index,
}: {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  icon: any;
  gradient: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.3]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, rotateX, opacity }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative p-8 rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900/50 to-black backdrop-blur-sm hover:border-acm-blue/50 transition-all duration-500"
    >
      <div
        className={`absolute inset-0 rounded-3xl bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-acm-blue" strokeWidth={1.5} />
          </div>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-3xl font-display font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
          <p className="text-lg font-medium text-acm-blue">{price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-8">{description}</p>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-acm-blue mt-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Why ACM - The Value
function WhyACMSection() {
  const values = [
    {
      icon: Target,
      title: "Bridging Worlds",
      description:
        "We unite technical and creative minds. No silos, no barriers—just collaborative innovation where everyone's skills matter.",
    },
    {
      icon: Zap,
      title: "Built to Scale",
      description:
        "Start with a workshop and grow into hackathons or leadership roles. Opportunities expand as you develop, whether you code or create.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We leverage cutting-edge tech and creative methodologies so our community can focus on what matters most—creating impact together.",
    },
    {
      icon: Users,
      title: "Diverse A-Team",
      description:
        "Our mentors span developers, designers, content creators, and industry experts—ready to guide your unique journey.",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-32 px-6 md:px-12 overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-acm-blue/5 rounded-full blur-[150px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <TextFillOnScroll className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Revolutionizing Student Communities
          </TextFillOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group p-8 rounded-2xl border border-gray-800 bg-gray-900/20 hover:bg-gray-900/40 hover:border-acm-blue/30 transition-all duration-500"
            >
              <value.icon
                className="w-12 h-12 text-acm-blue mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can join ACM?",
      answer:
        "Any student from GGSIPU EDC campus with a passion for technology, creativity, or innovation. We welcome developers, designers, content creators, photographers, and anyone eager to learn and collaborate.",
    },
    {
      question: "Do I need to be technical to join?",
      answer:
        "Absolutely not! We're all about bridging tech and non-tech. Whether you code, design, create content, or just want to learn, there's a place for you in our community.",
    },
    {
      question: "What kind of events do you organize?",
      answer:
        "We organize technical workshops, creative bootcamps, hackathons, design sprints, tech talks, networking sessions, and collaborative projects that bring together diverse skills.",
    },
    {
      question: "How can I get involved?",
      answer:
        "Start by attending our events, joining our Discord community, or applying for one of our technical or creative teams. We're always looking for passionate individuals to join our journey.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              FAQ
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </AnimatedText>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/20 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-900/40 transition-colors duration-300"
              >
                <span className="text-xl font-medium text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-acm-blue shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section - The Finale
function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black py-32 px-6 md:px-12"
    >
      <motion.div
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="mb-12">
          <TextFillOnScroll className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
            Now accepting passionate students
          </TextFillOnScroll>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-4"
          >
            Join a community where tech meets creativity
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-500"
          >
            Applications open year-round
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-10 py-5 bg-acm-blue hover:bg-acm-blue-light text-white rounded-full overflow-hidden transition-all duration-300 text-lg font-medium">
            <span className="relative">Apply to Join</span>
          </button>
          <button className="group relative px-10 py-5 bg-transparent border-2 border-gray-700 hover:border-acm-blue text-white rounded-full overflow-hidden transition-all duration-300 text-lg font-medium">
            <span className="relative">Learn More</span>
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-16 border-t border-gray-800"
        >
          <p className="text-gray-500 mb-4">
            Or reach out directly at{" "}
            <a
              href="mailto:acm@ggsipu.ac.in"
              className="text-acm-blue hover:text-acm-blue-light transition-colors"
            >
              acm@ggsipu.ac.in
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
