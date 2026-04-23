"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GalleryLightbox from "@/components/GalleryLightbox";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GALLERY_IMAGES = [12, 13, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59].map(
  (n) => `/images/FotovanDana-Anodeweg%209A-${n}.jpg`
);

export default function Gallery() {
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(headingRef.current, { y: 40, opacity: 0 });
    gsap.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        once: true,
      },
    });
  });

  return (
    <section id="galerij" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Galerij
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Een blik in onze moderne kantoorruimte aan de Anodeweg in Hoorn.
          </p>
        </div>

        <GalleryLightbox images={GALLERY_IMAGES} />

        {/* CTA button */}
        <div className="text-center mt-12">
          <Link
            href="/galerij"
            className="inline-block bg-slate-900 text-white px-8 py-3 font-medium hover:bg-slate-700 transition-colors duration-200"
          >
            Bekijk alle foto&apos;s
          </Link>
        </div>

      </div>
    </section>
  );
}
