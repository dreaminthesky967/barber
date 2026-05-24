import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { Scissors, ChevronLeft, ChevronRight } from "lucide-react";
import s1 from "@/assets/shop-1.jpeg";
import s2 from "@/assets/shop-2.jpg";
import s3 from "@/assets/shop-3.jpg";
import s4 from "@/assets/shop-4.jpg";
const slides = [
  { img: s1, title: "Ritual Klasik", sub: "Suasana hangat, tradisi sejak 2022" },
  { img: s2, title: "Presisi Fade", sub: "Garis tajam dari tangan ahli" },
  { img: s3, title: "Gaya Berkarakter", sub: "Tampilan yang menjadi identitas" },
  { img: s4, title: "Alat Pilihan", sub: "Pisau cukur dan gunting kelas atas" },
];
export default function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!embla) return;
    embla.on("select", () => setIdx(embla.selectedScrollSnap()));
    const t = setInterval(() => embla.scrollNext(), 5000);
    return () => clearInterval(t);
  }, [embla]);
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-screen">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-screen">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
            </div>
          ))}
        </div>
      </div>
      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-primary" />
          <span className="font-display text-2xl tracking-widest">TYM BARBERS</span>
        </div>
        <nav className="hidden gap-8 text-sm uppercase tracking-widest text-muted-foreground md:flex">
          <a href="#about" className="hover:text-primary transition">Tentang</a>
          <a href="#price" className="hover:text-primary transition">Harga</a>
          <a href="#location" className="hover:text-primary transition">Lokasi</a>
        </nav>
        <a href="https://api.whatsapp.com/send?phone=6282287341450" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition">
          Booking
        </a>
      </header>
      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] items-end px-6 pb-24 md:px-12 md:pb-32">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur">
            Barber Shop · Est. 2022
          </div>
          <h1 className="font-display text-6xl leading-[0.9] md:text-8xl">
            Potong Rambut, <br />
            <span className="text-gold">Bentuk Karakter.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {slides[idx].sub}. Tradisi cukur klasik dengan sentuhan modern di jantung kota.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#price" className="rounded-full bg-gold px-7 py-3 font-semibold text-primary-foreground shadow-gold hover:scale-105 transition">
              Lihat Harga
            </a>
            <a href="#location" className="rounded-full border border-border px-7 py-3 font-semibold hover:border-primary hover:text-primary transition">
              Temukan Kami
            </a>
          </div>
        </motion.div>
      </div>
      {/* Controls */}
      <div className="absolute bottom-10 right-6 z-20 flex items-center gap-3 md:right-12">
        <button onClick={() => embla?.scrollPrev()} className="rounded-full border border-border bg-card/50 p-3 backdrop-blur hover:bg-primary hover:text-primary-foreground transition">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="font-display text-xl tabular-nums">
          {String(idx + 1).padStart(2, "0")} <span className="text-muted-foreground">/ {String(slides.length).padStart(2, "0")}</span>
        </span>
        <button onClick={() => embla?.scrollNext()} className="rounded-full border border-border bg-card/50 p-3 backdrop-blur hover:bg-primary hover:text-primary-foreground transition">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 stripe-pattern opacity-80" />
    </section>
  );
}
