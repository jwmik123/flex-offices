import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
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
        <About />
        <Highlights />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
