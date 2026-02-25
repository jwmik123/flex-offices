"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ITEMS = [
  "Verschillende unit types en oppervlaktes",
  "Snelle glasvezel internet inbegrepen",
  "Maandcontract — geen langetermijnverplichtingen",
  "Professionele vergaderruimtes beschikbaar",
];

export default function Highlights() {
  const sloganRef = useRef<HTMLDivElement>(null);
  const itemRefs  = useRef<HTMLLIElement[]>([]);

  useGSAP(() => {
    gsap.set(sloganRef.current, { y: 50, opacity: 0 });
    gsap.to(sloganRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: sloganRef.current, start: "top 82%", once: true },
    });

    gsap.set(itemRefs.current, { x: 24, opacity: 0 });
    gsap.to(itemRefs.current, {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.65,
      ease: "power2.out",
      scrollTrigger: { trigger: sloganRef.current, start: "top 78%", once: true },
    });
  });

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: Slogan */}
        <div ref={sloganRef} className="flex flex-col gap-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
            Waarom Flex Offices
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1]">
            Alles wat je nodig hebt voor een productieve werkdag.
          </h2>
        </div>

        {/* Right: Checkmarks */}
        <ul className="flex flex-col gap-6">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              ref={(el) => { if (el) itemRefs.current[i] = el; }}
              className="flex items-start gap-4"
            >
              {/* Square check icon — matches the sharp-edge design language */}
              <span className="flex-shrink-0 w-6 h-6 bg-blue-700 flex items-center justify-center mt-0.5">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-slate-700 font-medium text-lg leading-snug">{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
