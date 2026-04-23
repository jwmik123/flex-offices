"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
  { value: "8 min",  label: "N506 / A7"        },
  { value: "5 min",  label: "Centrum Hoorn"     },
];

export default function Location() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(textRef.current, { y: 40, opacity: 0 });
    gsap.to(textRef.current, {
      y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
      scrollTrigger: { trigger: textRef.current, start: "top 82%", once: true },
    });
    gsap.set(imgRef.current, { opacity: 0 });
    gsap.to(imgRef.current, {
      opacity: 1, duration: 1.1, ease: "power2.out",
      scrollTrigger: { trigger: imgRef.current, start: "top 82%", once: true },
    });
  });

  return (
    <section className="bg-slate-900 overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[520px]">

        {/* Left — text */}
        <div ref={textRef} className="w-full md:w-1/2 flex items-center py-20 lg:py-28 px-6 lg:px-16 xl:px-24">
          <div className="flex flex-col gap-8 max-w-lg">

            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                Ligging
              </span>
              <h2 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white leading-[1.05] tracking-tight">
                Op Hoorn80,<br />
                aan het{" "}
                <em className="text-blue-400 italic">Markermeer.</em>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Strategisch gelegen aan een doorgaande weg met directe toegang
                tot de N506, die kort aansluit op de A7 richting Amsterdam of
                Leeuwarden. Op een steenworp afstand van het centrum van Hoorn.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-start gap-10 pt-2">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contact"
                className="border border-white text-white font-semibold text-sm px-6 py-2.5 rounded hover:bg-white hover:text-slate-900 transition-colors duration-200 flex items-center gap-2"
              >
                Plan rondleiding
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/Fx4JqATA22MtKU388"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 font-semibold text-sm px-6 py-2.5 rounded hover:border-slate-400 hover:text-white transition-colors duration-200"
              >
                Open in Google Maps
              </a>
            </div>

          </div>
        </div>

        {/* Right — map image */}
        <div ref={imgRef} className="w-full md:w-1/2 relative min-h-[320px] md:min-h-0">
          <Image
            src="/images/ligging.jpeg"
            alt="Ligging Flex Offices Hoorn"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
