"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(sectionRef.current, { y: 60, opacity: 0 });
      gsap.to(sectionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="ruimtes" className="bg-blue-50 py-16 lg:py-20">
      <div
        ref={sectionRef}
        className="max-w-[90rem] mx-auto px-6 lg:px-8"
      >
        {/* Two columns: title + paragraph left, paragraph right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
              Onze Flex offices
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
              Kantoorruimte die meegroeit met jouw team
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Flex Offices biedt moderne, volledig uitgeruste kantoorruimten voor
              startups en groeiende bedrijven in Hoorn. Snelle glasvezel, stille
              werkplekken, vergaderruimtes en een professionele omgeving — alles
              onder één dak.
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm self-end">
            Centraal gelegen aan de Anodeweg met uitstekende parkeer- en
            OV-bereikbaarheid. Beschikbaar voor teams van twee tot twintig
            personen, op basis van een flexibel maandcontract. Of je nu een
            privékantoor zoekt of een gedeelde werkplek, er is altijd een passende
            oplossing beschikbaar.
          </p>
        </div>
      </div>
    </section>
  );
}
