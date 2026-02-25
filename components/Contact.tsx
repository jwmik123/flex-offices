"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    bericht: "",
    akkoord: false,
  });
  const [submitted, setSubmitted] = useState(false);

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
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.akkoord) setSubmitted(true);
  };

  const inputClass =
    "border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 transition-colors bg-white w-full";

  return (
    <section id="contact" className="bg-blue-50 py-24 lg:py-32">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
            Vraag
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Contact
          </h2>
          <p className="text-slate-600 text-lg max-w-xl">
            Neem contact met ons op voor meer informatie of een vrijblijvende
            rondleiding door onze ruimtes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Form */}
          <div>
            {submitted ? (
              <div className="border border-blue-200 bg-blue-50 p-8">
                <p className="text-blue-700 font-semibold text-lg">
                  Bedankt voor uw bericht!
                </p>
                <p className="text-slate-600 mt-2 text-sm">
                  We nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Voornaam + Achternaam */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
                      Voornaam
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jan"
                      value={form.voornaam}
                      onChange={(e) => setForm({ ...form, voornaam: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
                      Achternaam
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="de Vries"
                      value={form.achternaam}
                      onChange={(e) => setForm({ ...form, achternaam: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jan@bedrijf.nl"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Bericht */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
                    Bericht
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Schrijf uw vraag of opmerking..."
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Checkbox voorwaarden */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.akkoord}
                    onChange={(e) => setForm({ ...form, akkoord: e.target.checked })}
                    className="mt-0.5 w-4 h-4 accent-blue-700 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    Ik ga akkoord met de{" "}
                    <a href="/algemene-voorwaarden" className="text-blue-700 hover:underline">
                      algemene voorwaarden
                    </a>{" "}
                    en het privacybeleid.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!form.akkoord}
                  className="bg-blue-700 text-white font-semibold px-8 py-3 rounded hover:bg-blue-800 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed w-fit"
                >
                  Stuur bericht
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
                E-mail
              </span>
              <a
                href="mailto:info@flexhoorn.nl"
                className="text-slate-900 font-medium hover:text-blue-700 transition-colors"
              >
                info@flexhoorn.nl
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
                Telefoon
              </span>
              <a
                href="tel:+31612345678"
                className="text-slate-900 font-medium hover:text-blue-700 transition-colors"
              >
                +31 6 12 34 56 78
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
                Kantoor
              </span>
              <p className="text-slate-900 font-medium leading-relaxed">
                Anodeweg 9A
                <br />
                1627 LE Hoorn
              </p>
              <a
                href="https://maps.google.com/?q=Anodeweg+9A,+Hoorn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-blue-700 font-medium hover:underline mt-1 w-fit"
              >
                Route plannen
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
