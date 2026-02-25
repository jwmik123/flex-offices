"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [meerOpen, setMeerOpen] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onEnter: () =>
        gsap.to(navRef.current, {
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
          duration: 0.3,
          ease: "power2.out",
        }),
      onLeaveBack: () =>
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 0.3,
        }),
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          Flex<span className="text-blue-700"> Offices</span>
        </Link>

        {/* Center links — desktop only */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/#ruimtes"
            className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors duration-200"
          >
            Ruimtes
          </Link>
          <Link
            href="/galerij"
            className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors duration-200"
          >
            Galerij
          </Link>

          {/* Meer dropdown */}
          <div className="relative">
            <button
              onClick={() => setMeerOpen((o) => !o)}
              className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors duration-200"
            >
              Meer
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${meerOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {meerOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-slate-100 shadow-xl py-1 z-50">
                <Link
                  href="/#over-ons"
                  onClick={() => setMeerOpen(false)}
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
                >
                  Over ons
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMeerOpen(false)}
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/#contact"
          className="bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-blue-800 transition-colors duration-200"
        >
          Neem contact op
        </Link>
      </div>
    </nav>
  );
}
