"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const NAV_ITEMS = [
  { label: "About", number: "1.0", href: "/about" },
  { label: "Projects", number: "2.0", href: "/projects" },
  { label: "Events", number: "3.0", href: "#" },
  { label: "Team", number: "4.0", href: "/teams" },
  { label: "Clubs", number: "5.0", href: "#" },
  { label: "Blogs", number: "6.0", href: "/blogs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!href || href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHomeActive = isActive("/");

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-[1200px] -translate-x-1/2 px-4">
      {/* Desktop */}
      <div className="hidden w-full overflow-hidden rounded-2xl border border-white/10 bg-[#181818]/45 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md md:flex">
        <div
          className={`flex items-center border-r border-white/5 px-6 transition-colors ${
            isHomeActive ? "bg-acm-blue/35" : "bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center">
            <div className="relative h-7 w-9">
              <Image
                src="/ACM_Logo_white_text.png"
                alt="ACM Logo"
                fill
                className="object-contain"
                sizes="128px"
                priority
              />
            </div>
            <span
              className={`rounded-full text-[12px] font-semibold ${
                isHomeActive ? "text-white" : "text-white/70"
              }`}
            >
              GGSIPU EDC ACM
            </span>
          </Link>
        </div>

        <ul className="flex flex-1 items-stretch text-xs uppercase tracking-[0.3em]">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="flex flex-1 min-w-[140px]">
              <Link
                href={item.href}
                className={`flex flex-1 items-center justify-center gap-2 border-r border-white/5 px-3 py-3 transition ${
                  isActive(item.href)
                    ? "bg-acm-blue/35 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="font-mono text-[11px] tracking-[0.2em]">
                  {item.number}
                </span>
                <span className="font-semibold tracking-[0.15em]">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="flex w-full flex-col rounded-2xl border border-white/10 bg-[#181818]/45 text-white shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-md md:hidden">
        <div className="flex items-center justify-between px-1 py-1">
          <div className="relative h-8 w-12">
            <Image
              src="/ACM_Logo_white_text.png"
              alt="ACM logo"
              fill
              className="object-contain"
              sizes="112px"
              priority
            />
          </div>
          <button
            className="rounded-xl border border-white/20 p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="mt-1 block h-0.5 w-5 bg-white" />
            <span className="mt-1 block h-0.5 w-5 bg-white" />
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 px-4 py-3">
            <ul className="space-y-3 text-sm uppercase tracking-[0.25em]">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between transition-colors ${
                      isActive(item.href)
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[11px]">{item.number}</span>
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
