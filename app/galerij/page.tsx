import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Galerij – FlexHoorn",
  description:
    "Bekijk alle foto's van onze moderne kantoorruimte aan de Anodeweg in Hoorn.",
};

const ALL_IMAGES = Array.from({ length: 59 }, (_, i) => i + 1).map(
  (n) => `/images/FotovanDana-Anodeweg%209A-${n}.jpg`
);

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Galerij
            </h1>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Alle foto&apos;s van onze moderne kantoorruimte aan de Anodeweg in Hoorn.
            </p>
          </div>

          <GalleryLightbox images={ALL_IMAGES} />

          {/* Back link */}
          <div className="text-center mt-12">
            <Link
              href="/#galerij"
              className="inline-block bg-slate-900 text-white px-8 py-3 font-medium hover:bg-slate-700 transition-colors duration-200"
            >
              ← Terug naar home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
