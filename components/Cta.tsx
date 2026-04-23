"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Cta() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set([leftRef.current, rightRef.current], { y: 40, opacity: 0 });
    gsap.to(leftRef.current, {
      y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
      scrollTrigger: { trigger: leftRef.current, start: "top 82%", once: true },
    });
    gsap.to(rightRef.current, {
      y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.15,
      scrollTrigger: { trigger: leftRef.current, start: "top 82%", once: true },
    });
  });

  return (
    <section className="bg-blue-700 py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — heading */}
        <div ref={leftRef}>
          <h2 className="text-6xl lg:text-[4.75rem] font-bold text-white leading-[1.05] tracking-tight">
            Kom eens langs <br/>
          
            geheel vrijblijvend.
          </h2>
        </div>

        {/* Right — text + buttons */}
        <div ref={rightRef} className="flex flex-col gap-8">
          <p className="text-blue-200 text-base lg:text-lg leading-relaxed">
            We laten je de units zien, je proeft de sfeer en je weet meteen of het past. Rondleiding binnen 48u inplanbaar.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@hoffstad.nl"
                className="bg-white text-blue-900 font-semibold px-7 py-3 rounded hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
              >
                Plan rondleiding
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+31229213541"
                className="border border-blue-400 text-white font-semibold px-7 py-3 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Bel 0229 — 21 35 41
              </a>
            </div>
            <p className="text-blue-400 text-xs">Vanaf €375/maand, incl. servicekosten, excl. BTW</p>
          </div>
        </div>

      </div>
    </section>
  );
}
