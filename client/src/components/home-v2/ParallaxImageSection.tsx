"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/**
 * ParallaxImageSection
 * A full-screen section where the background image stays FIXED
 * while the website scrolls over it - with subtle downward movement
 */
export default function ParallaxImageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      // Effect starts when section enters viewport from bottom
      // and continues as it scrolls through
      if (rect.bottom > 0 && rect.top < windowHeight) {
        // Progress goes from 0 (section just entering from bottom) to 1 (section leaving at top)
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
        );
        // Subtle movement: image moves down slightly (max 50px) as you scroll
        setOffsetY(progress * 50);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full"
      style={{ clipPath: "inset(0)" }}
    >
      {/* Fixed Background Image with subtle movement */}
      <div
        className="fixed inset-0 h-[120vh] w-full"
        style={{
          transform: `translate3d(0, -${offsetY * 4.4}px, 0)`,
          willChange: "transform",
        }}
      >
        <Image
          src="/home/PlaceholderBelowHeroImg.jpg"
          alt="Parallax Background"
          fill
          className="object-cover"
          priority
        />
      </div>

    
    </section>
  );
}
