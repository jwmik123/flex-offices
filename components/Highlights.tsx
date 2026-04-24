"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARDS = [
  {
    num: "01",
    title: "Volledig ingericht",
    desc: "Projecttapijt, scheidingswanden, ingebouwde verlichting. Geen verbouwing nodig — sleutel erin, aan de slag.",
  },
  {
    num: "02",
    title: "Flexibele huurtermijn",
    desc: "Langere eerste termijn voor stabiliteit, daarna flexibel verlengen. Combineren of krimpen? Altijd bespreekbaar.",
  },
  {
    num: "03",
    title: "Centrale ligging",
    desc: "Directe toegang tot uitvalswegen en OV. Flex Offices grenst aan het stadscentrum — altijd binnen handbereik.",
  },
  {
    num: "04",
    title: "Compleet faciliteitenpakket",
    desc: "Gedeelde kantine, reserveerbare vergaderkamer, ruime parkeergelegenheid. Inbegrepen in de servicekosten.",
  },
];

export default function Highlights() {
  const topRef  = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.set(topRef.current, { y: 40, opacity: 0 });
    gsap.to(topRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: topRef.current, start: "top 82%", once: true },
    });

    gsap.set(cardRefs.current, { y: 24, opacity: 0 });
    gsap.to(cardRefs.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.65,
      ease: "power2.out",
      scrollTrigger: { trigger: topRef.current, start: "top 72%", once: true },
    });
  });

  return (
    <section id="waarom" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8">

        {/* Top: 2-col */}
        <div ref={topRef} className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-20 lg:mb-28 items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700 block mb-5">
              Waarom Flex Offices
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
              Een werkplek die je klanten met{" "}
              <em className="text-blue-700 italic">vertrouwen</em>{" "}
              ontvangt.
            </h2>
          </div>
          <div className="md:pt-8">
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
              Volledig afgewerkte kantoorruimtes in een professioneel bedrijfscomplex. Geschikt voor
              uiteenlopende activiteiten — van backoffice tot klantgericht werk. Direct beschikbaar,
              zonder verbouwingskosten.
            </p>
          </div>
        </div>

        {/* Bottom: 4-col cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-slate-200 pt-12">
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => { if (el) cardRefs.current[i] = el; }}
            >
              <span className="text-blue-700 text-sm font-semibold block mb-4">{card.num}</span>
              <h3 className="!font-bold text-slate-900 text-2xl mb-3 leading-snug">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
