"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Plattegrond() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(textRef.current, { x: -40, opacity: 0 });
    gsap.to(textRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: textRef.current, start: "top 82%", once: true },
    });

    gsap.set(imgRef.current, { x: 40, opacity: 0 });
    gsap.to(imgRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: imgRef.current, start: "top 82%", once: true },
    });
  });

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div ref={textRef} className="flex flex-col gap-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
              Acht units,<br />
              <em className="text-blue-700 italic not-italic">Eén gebouw.</em>
            </h2>
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-md">
              Van een compacte 15 m² studio tot een royale 82 m² suite. Units zijn
              zelfstandig te huren, maar combineren met aangrenzende ruimtes is altijd
              bespreekbaar.
            </p>
          </div>

          {/* Right: image */}
          <div ref={imgRef} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="/images/plattegrond.jpg"
              alt="Plattegrond Flex Offices"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
