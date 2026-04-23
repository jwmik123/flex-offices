"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const img = (n: number) => `/images/FotovanDana-Anodeweg%209A-${n}.jpg`;

const IMAGES = [60, 8, 16, 24, 32, 40, 61, 62].map(img);

const STATS = [
  { value: "8",      label: "Nieuwe units"       },
  { value: "15—150", label: "Verhuurbare m²"      },

];

export default function Hero() {
  const badgeRef   = useRef<HTMLDivElement>(null);
  const wordRefs   = useRef<HTMLSpanElement[]>([]);
  const italicRef  = useRef<HTMLElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const bottomRef  = useRef<HTMLDivElement>(null);
  const imgRefs    = useRef<HTMLDivElement[]>([]);

  const idxRef         = useRef(0);
  const isAnimatingRef = useRef(false);
  const timerRef       = useRef<ReturnType<typeof setInterval> | null>(null);
  const navigateRef    = useRef<(dir: 1 | -1) => void>(() => {});

  const words = "Representatieve kantoorunits".split(" ");

  useGSAP(() => {
    gsap.set(badgeRef.current, { y: 20, opacity: 0 });
    gsap.set(wordRefs.current, { y: 70, opacity: 0 });
    gsap.set(italicRef.current, { y: 60, opacity: 0 });
    gsap.set(subtextRef.current, { y: 28, opacity: 0 });
    gsap.set(statsRef.current, { y: 20, opacity: 0 });
    gsap.set(bottomRef.current, { y: 10, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });
    tl.to(badgeRef.current, { y: 0, opacity: 1, duration: 0.5 });
    tl.to(wordRefs.current, { y: 0, opacity: 1, stagger: 0.09, duration: 0.85 }, "-=0.2");
    tl.to(italicRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4");
    tl.to(subtextRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.55");
    tl.to(statsRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");
    tl.to(bottomRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5");

    // ── Slider setup ───────────────────────────────────────────────────
    imgRefs.current.forEach((el, i) =>
      gsap.set(el, { xPercent: i === 0 ? 0 : 100 })
    );

    const navigate = (dir: 1 | -1) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const prev = idxRef.current;
      const next = ((prev + dir) % IMAGES.length + IMAGES.length) % IMAGES.length;
      idxRef.current = next;

      gsap.set(imgRefs.current[next], { xPercent: dir * 100 });
      gsap.to(imgRefs.current[prev], {
        xPercent: dir * -100,
        duration: 0.72,
        ease: "power2.inOut",
      });
      gsap.to(imgRefs.current[next], {
        xPercent: 0,
        duration: 0.72,
        ease: "power2.inOut",
        onComplete: () => { isAnimatingRef.current = false; },
      });

      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => navigate(1), 4500);
    };

    navigateRef.current = navigate;
    timerRef.current = setInterval(() => navigate(1), 4500);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  });

  const padLeft = { paddingLeft: "max(2rem, calc((100vw - 90rem) / 2 + 2rem))" };

  return (
    <section id="home" className="relative bg-taupe-100">

      {/* Main row */}
      <div className="flex flex-col md:flex-row">

        {/* LEFT — text ───────────────────────────────────────────────── */}
        <div className="w-full md:w-1/2 flex items-center py-24 md:py-0 md:min-h-[80vh]">
          <div className="w-full pr-10 lg:pr-14" style={padLeft}>

            {/* Availability badge */}
            {/* <div ref={badgeRef} className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-sm text-blue-700 font-medium">
                7 van 8 units nog beschikbaar
              </span>
            </div> */}

            {/* Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-slate-900 leading-[1.05] tracking-tight">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="overflow-hidden inline-block align-bottom mr-[0.22em] last:mr-0"
                >
                  <span
                    ref={(el) => { if (el) wordRefs.current[i] = el; }}
                    className="inline-block"
                  >
                    {word}
                  </span>
                </span>
              ))}
              <span className="overflow-hidden block mt-1">
                <em
                  ref={italicRef}
                  className="text-blue-700 italic block leading-[1.05]"
                >
                  op jouw maat.
                </em>
              </span>
            </h1>

            {/* Subtext + buttons */}
            <div ref={subtextRef} className="flex flex-col gap-6 mt-8">
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-md">
                Nieuwe, complete kantoorunits op <strong>Hoorn80</strong>, van 15 tot 150 m².
                Compleet opgeleverd, gedeelde kantine, reserveerbare vergaderkamer. Direct startklaar.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:info@hoffstad.nl"
                  className="bg-blue-700 text-white font-semibold px-7 py-3 rounded hover:bg-blue-800 transition-colors duration-200 flex items-center gap-2"
                >
                  Plan rondleiding
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#galerij"
                  className="border border-slate-900 text-slate-900 font-semibold px-7 py-3 rounded hover:bg-slate-900 hover:text-white transition-colors duration-200"
                >
                  Bekijk units
                </a>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex items-center mt-10 pt-8 border-t border-slate-200">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-8 bg-slate-200 mx-8" />}
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT — slider (unchanged) ────────────────────────────────── */}
        <div className="w-full md:w-1/2 h-[320px] md:h-auto md:self-stretch relative overflow-hidden">

          {IMAGES.map((src, i) => (
            <div
              key={i}
              ref={(el) => { if (el) imgRefs.current[i] = el; }}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src={src}
                fill
                alt="Kantoorruimte Hoorn"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Arrow navigation */}
          <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
            <button
              onClick={() => navigateRef.current(-1)}
              aria-label="Vorige afbeelding"
              className="w-10 h-10 bg-white flex items-center justify-center hover:bg-slate-100 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigateRef.current(1)}
              aria-label="Volgende afbeelding"
              className="w-10 h-10 bg-white flex items-center justify-center hover:bg-slate-100 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>

      {/* Bottom pricing card ─────────────────────────────────────────── */}
      <div className="bg-white pb-8 px-6 lg:px-8">
        <div ref={bottomRef} className="max-w-[90rem] mx-auto pt-6">
          <div className="bg-blue-800 rounded-2xl px-8 lg:px-12 py-7 flex items-center justify-between shadow-xl shadow-blue-900/20">
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-200">
                Al beschikbaar vanaf
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-4xl font-bold text-white">€375</span>
                <span className="text-blue-300 text-sm">/maand</span>
              </div>
              <p className="text-xs text-blue-400 mt-0.5">Incl. servicekosten, excl. BTW</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <a
                href="mailto:info@hoffstad.nl"
                className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 text-base shadow-sm"
              >
                Plan rondleiding
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-blue-400">Vrijblijvend · Geen wachttijd</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
