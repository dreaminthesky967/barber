import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll"; // Plugin untuk efek "lampu alir"

const testimonials = [
  { name: "Budi Santoso", text: "Cukurannya presisi banget, stafnya ramah dan tempatnya bersih.", rating: "★★★★★" },
  { name: "Andi Wijaya", text: "Barbershop terbaik di Babelan! Langganan tiap bulan di sini.", rating: "★★★★★" },
  { name: "Rizky Pratama", text: "Signature Fade-nya juara. Gak nyesel langganan di TYM Barbers.", rating: "★★★★★" },
  { name: "Fajar Nugroho", text: "Tempatnya nyaman, cocok buat anak muda yang mau gaya kekinian.", rating: "★★★★☆" },
  { name: "Dedi Kurniawan", text: "Pelayanan cepat dan hasilnya rapi. Sangat recommended!", rating: "★★★★★" },
  { name: "Hendra Gunawan", text: "Harga murah tapi kualitasnya premium. Gak kalah sama barber mahal.", rating: "★★★★★" },
  { name: "Satria Budi", text: "Royal Package-nya bikin relax. Wajib coba facial-nya!", rating: "★★★★★" },
  { name: "Gilang Ramadhan", text: "Langganan potong rambut anak di sini, hasilnya selalu rapi.", rating: "★★★★☆" },
  { name: "Reza Fahlevi", text: "Komunikasi dengan barber-nya enak, paham banget gaya rambut saya.", rating: "★★★★★" },
  { name: "Yusuf Ibrahim", text: "Mantap! Kopi gratisnya enak, potongannya juga sangat memuaskan.", rating: "★★★★★" },
];

export default function Testimonials() {
  // Menggunakan AutoScroll agar bergeser terus menerus
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1.5 }) 
  ]);

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">Testimoni</p>
        <h2 className="font-display text-4xl md:text-5xl">Kata Mereka.</h2>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-[0_0_300px] md:flex-[0_0_400px]">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-card/50 border border-border p-8 rounded-2xl h-full shadow-lg"
              >
                <div className="text-gold mb-4 text-sm">{t.rating}</div>
                <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
                <div className="font-display text-lg">{t.name}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}