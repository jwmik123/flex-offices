import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Plattegrond from "@/components/Plattegrond";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FlexHoorn – Kantoorruimte in Hoorn",
  description:
    "Moderne en flexibele kantoorruimte in het hart van Hoorn. Voor zzp'ers en kleine teams.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <Highlights />
        <Gallery />
        <Plattegrond />
        <Location />
        <Faq />
        <Cta />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
