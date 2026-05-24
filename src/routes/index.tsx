import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  component: () => <Index />,
  head: () => ({
    meta: [
      { title: "TYM BARBERS — Potong Rambut Klasik & Modern di Jakarta" },
      { name: "description", content: "Barber shop modern dengan sentuhan klasik. Lihat layanan, harga potong rambut, dan lokasi kami." },
    ],
  }),
});

function Index() {
  return (
    <>
      {}
      {}
      
      <main>
        <Hero />
        <About />
        <Gallery />
        <Pricing />
        <LocationMap />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}