"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

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
            Over ons
          </Link>
          <Link
            href="/galerij"
            className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors duration-200"
          >
            Galerij
          </Link>
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
