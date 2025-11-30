"use client";

import { useRef } from "react";
import { useParallax } from "./ProjectsSection";
/**
 * COMPONENT: MarqueeColumn
 * A single vertical column of images that moves based on scroll.
 */
const MarqueeColumn = ({ images, speed = 0.2, className }: { images: string[], speed?: number, className?: string }) => {
    const columnRef = useRef(null);
    // We use the same parallax hook here! 
    // If speed is negative, it moves UP against scroll. If positive, it moves DOWN.
    const yOffset = useParallax(columnRef, speed);

    return (
        <div ref={columnRef} className={`flex flex-col gap-6 ${className}`} style={{ transform: `translate3d(0px, ${yOffset}px, 0px)` }}>
            {images.map((src: string, index: number) => (
                <img
                    key={index}
                    src={src}
                    alt="Work showcase"
                    className="w-full h-auto object-cover rounded-lg shadow-xl shadow-black/50  opacity-80 hover:opacity-100 transition-all duration-500 border border-white/5"
                />
            ))}
        </div>
    );
};

/**
 * COMPONENT: MarqueeSection
 * The container for the 3 moving columns.
 */
export default function MarqueeColumnSection() {
    // Image links from your provided code
    const col1Images = [
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d0998f3236f85be26505_OzgeKeles_LemonResolve.webp",
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d09b7e14851976e81702_OzgeKeles_SANAA-2.webp",
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d0998f3236f85be26505_OzgeKeles_LemonResolve.webp"
    ];

    const col2Images = [
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d09a2064a3f8b9d7712f_OzgeKeles_NevArtFest-1.webp",
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d09ab82f71fb7797058b_OzgeKeles_NevArtFest-2.webp",
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d09a2064a3f8b9d7712f_OzgeKeles_NevArtFest-1.webp"
    ];

    const col3Images = [
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d09b21e5907499d2a190_OzgeKeles_SandaPlaitt.webp",
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d09b7e14851976e817c8_OzgeKeles_SANAA-1.webp",
        "https://cdn.prod.website-files.com/64b04fffef60996503e80a1a/64e9d09b21e5907499d2a190_OzgeKeles_SandaPlaitt.webp"
    ];

    return (
      <section className="relative w-full h-[100vh] overflow-hidden bg-[#0d0d0d]  py-12 z-0">
        <div className="grid grid-cols-4 gap-1 mx-auto px-1 h-[120%] -mt-24">
          {/* Column 1: Moves Up (-speed) */}
          <MarqueeColumn images={col1Images} speed={0.15} className="mt-12" />

          {/* Column 2: Moves Down (+speed) - Starts higher up so it has room to go down */}
          <MarqueeColumn images={col2Images} speed={-0.15} className="-mt-48" />

          {/* Column 3: Moves Up (-speed) */}
          <MarqueeColumn images={col3Images} speed={0.15} className="mt-24" />
    
          {/* Column 3: Moves Up (-speed) */}
          <MarqueeColumn images={col1Images} speed={-0.15} className="mt-24" />
        </div>

        {/* Optional Gradient Overlay to fade edges */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
      </section>
    );
};