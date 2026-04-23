"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/flexlogo.png" alt="Flex Offices logo" width={48} height={48} />
          <span className="flex flex-col" style={{ gap: "1px" }}>
            <span className="text-base font-bold text-slate-900 tracking-wide leading-none">Flex</span>
            <span className="text-base font-bold text-blue-700 tracking-wide leading-none">Offices</span>
          </span>
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
        <a
          href="mailto:info@hoffstad.nl"
          className="bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-blue-800 transition-colors duration-200 flex items-center gap-2"
        >
          Plan rondleiding
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
