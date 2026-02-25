"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const img = (n: number) => `/images/FotovanDana-Anodeweg%209A-${n}.jpg`;

const IMAGES = [1, 8, 16, 24, 32, 40, 48, 55].map(img);

export default function Hero() {
  const wordRefs   = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLDivElement>(null);
  const imgRefs    = useRef<HTMLDivElement[]>([]);

  // Slider state kept in refs so GSAP callbacks always see latest values
  const idxRef          = useRef(0);
  const isAnimatingRef  = useRef(false);
  const timerRef        = useRef<ReturnType<typeof setInterval> | null>(null);
  // Exposed to click handlers defined outside useGSAP
  const navigateRef     = useRef<(dir: 1 | -1) => void>(() => {});

  const words = "Nieuwe kantoorruimte in Hoorn".split(" ");

  useGSAP(() => {
    // ── Entry animations ───────────────────────────────────────────────
    gsap.set(wordRefs.current, { y: 70, opacity: 0 });
    gsap.set(subtextRef.current, { y: 28, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });
    tl.to(wordRefs.current, { y: 0, opacity: 1, stagger: 0.09, duration: 0.85 });
    tl.to(subtextRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.55");

    // ── Slider setup ───────────────────────────────────────────────────
    // First slide at 0, every other slide parked off-screen to the right
    imgRefs.current.forEach((el, i) =>
      gsap.set(el, { xPercent: i === 0 ? 0 : 100 })
    );

    const navigate = (dir: 1 | -1) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const prev = idxRef.current;
      const next = ((prev + dir) % IMAGES.length + IMAGES.length) % IMAGES.length;
      idxRef.current = next;

      // Park incoming slide on the correct off-screen side
      gsap.set(imgRefs.current[next], { xPercent: dir * 100 });

      // Slide current out
      gsap.to(imgRefs.current[prev], {
        xPercent: dir * -100,
        duration: 0.72,
        ease: "power2.inOut",
      });

      // Slide next in — unlock when done
      gsap.to(imgRefs.current[next], {
        xPercent: 0,
        duration: 0.72,
        ease: "power2.inOut",
        onComplete: () => { isAnimatingRef.current = false; },
      });

      // Reset auto-advance so manual nav doesn't cause a quick double-advance
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => navigate(1), 4500);
    };

    navigateRef.current = navigate;
    timerRef.current = setInterval(() => navigate(1), 4500);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  });

  return (
    <section id="home" className="relative bg-white flex flex-col md:flex-row">

      {/* LEFT — text, padded to align with the rest of the site ─────── */}
      <div className="w-full md:w-1/2 flex items-center py-28 md:py-0 md:min-h-[80vh]">
        {/*
          paddingLeft mirrors max-w-7xl mx-auto px-8:
          on screens ≥ 1280 px the container margin is (100vw - 80rem) / 2,
          plus the container's own px-8 (2rem) gives us the exact content edge.
        */}
        <div
          className="w-full pr-10 lg:pr-14"
          style={{ paddingLeft: "max(2rem, calc((100vw - 80rem) / 2 + 2rem))" }}
        >

          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
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
          </h1>

          <div ref={subtextRef} className="flex flex-col gap-6">
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-md">
              Moderne kantoorruimten voor startups en groeiende teams in
              het hart van Hoorn. Alles wat jouw bedrijf nodig heeft om
              te schalen — op één plek.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#galerij"
                className="bg-blue-700 text-white font-semibold px-7 py-3 rounded hover:bg-blue-800 transition-colors duration-200"
              >
                Bekijk
              </a>
              <a
                href="#contact"
                className="border border-slate-900 text-slate-900 font-semibold px-7 py-3 rounded hover:bg-slate-900 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT — full-bleed, fills exactly the right third of the screen ─ */}
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

        {/* Arrow navigation — bottom right ────────────────────────── */}
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

    </section>
  );
}
