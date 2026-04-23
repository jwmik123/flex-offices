"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQS = [
  {
    q: "Wat is de minimale huurtermijn?",
    a: "Een langere eerste termijn voor stabiliteit. Daarna flexibel verlengen in overleg. Opzegperiode bespreekbaar, afhankelijk van huurtermijn.",
  },
  {
    q: "Wat zijn de servicekosten?",
    a: "Een variabel voorschotbedrag per maand voor verwarming en verlichting. Inbegrepen in het aanbod vanaf €375.",
  },
  {
    q: "Kan ik units combineren?",
    a: "Aangrenzende units zijn samenvoegbaar. Middelste groottes zijn nu nog bespreekbaar — neem contact op voor een plan op maat.",
  },
  {
    q: "Is er BTW verschuldigd?",
    a: "Over de huur wordt BTW berekend. De zekerheidsstelling is gelijk aan drie maanden huur, te vermeerderen met BTW.",
  },
  {
    q: "Wanneer kan ik aanvaarden?",
    a: "Direct mogelijk, onder voorbehoud van recht van gunning. Rondleiding binnen 48u inplanbaar.",
  },
];

export default function Faq() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.set(leftRef.current, { y: 40, opacity: 0 });
    gsap.to(leftRef.current, {
      y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
      scrollTrigger: { trigger: leftRef.current, start: "top 82%", once: true },
    });

    gsap.set(itemRefs.current, { y: 20, opacity: 0 });
    gsap.to(itemRefs.current, {
      y: 0, opacity: 1, stagger: 0.08, duration: 0.65, ease: "power2.out",
      scrollTrigger: { trigger: leftRef.current, start: "top 78%", once: true },
    });
  });

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 lg:gap-24">

        {/* Left */}
        <div ref={leftRef} className="flex flex-col gap-6">
        
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
            Veelgestelde
            <em className="text-blue-700 italic block">vragen.</em>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-sm">
            Hebt niet het juiste antwoord? Laat het ons weten of stuur een bericht — we reageren binnen één werkdag.
          </p>
          {/* <div className="flex items-center gap-3 mt-2">
            <a
              href="https://wa.me/31229000000"
              className="border border-slate-300 text-slate-700 font-medium text-sm px-5 py-2.5 rounded hover:bg-slate-200 transition-colors duration-200"
            >
              WhatsApp
            </a>
            <a
              href="mailto:info@flexoffices.nl"
              className="border border-slate-300 text-slate-700 font-medium text-sm px-5 py-2.5 rounded hover:bg-slate-200 transition-colors duration-200"
            >
              E-mail
            </a>
          </div> */}
        </div>

        {/* Right — FAQ list */}
        <div className="flex flex-col">
          {FAQS.map((item, i) => (
            <div
              key={i}
              ref={(el) => { if (el) itemRefs.current[i] = el; }}
              className="border-t border-slate-200 py-7 last:border-b"
            >
              <h3 className="font-semibold text-slate-900 text-xl mb-2">{item.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
