import { motion } from "motion/react";
// Import ikon disesuaikan dengan layanan baru
import { Scissors, Sparkles, Baby, Droplets, Palette } from "lucide-react";

const services = [
  { 
    icon: Scissors, 
    name: "Cukur Dewasa", 
    desc: "Potong rambut standar untuk pria dewasa.", 
    price: "25.000", 
    time: "30 menit" 
  },
  { 
    icon: Sparkles, 
    name: "Remaja", 
    desc: "Potong rambut gaya terkini khusus pelajar/remaja.", 
    price: "20.000", 
    time: "30 menit" 
  },
  { 
    icon: Baby, 
    name: "Anak Anak", 
    desc: "Potong rambut nyaman dan rapi untuk anak-anak.", 
    price: "15.000", 
    time: "25 menit" 
  },
  { 
    icon: Droplets, 
    name: "Cukur + Keramas", 
    desc: "Paket potong rambut lengkap dengan cuci bersih & pijat ringan.", 
    price: "35.000", 
    time: "45 menit", 
    popular: true // Highlight sebagai paket terpopuler
  },
  { 
    icon: Palette, 
    name: "Cukur + Cat Hitam", 
    desc: "Potong rambut plus pewarnaan hitam natural untuk uban.", 
    price: "50.000", 
    time: "60 menit" 
  },
];

export default function Pricing() {
  return (
    <section id="price" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">Daftar Harga</p>
          <h2 className="font-display text-5xl md:text-6xl">
            Pilih Layanan, <span className="text-gold">Tahu Harganya.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Transparan, tanpa biaya tersembunyi. Layanan cukur terbaik di Babelan, Bekasi.
          </p>
        </div>

        {/* Karena ada 5 item, agar rapi di tengah pada layar besar, kita gunakan justify-center */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] overflow-hidden rounded-2xl border bg-card/60 p-7 backdrop-blur transition ${
                s.popular ? "border-primary shadow-gold" : "border-border hover:border-primary/50"
              }`}
            >
              {s.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Populer
                </div>
              )}
              
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="h-6 w-6" />
              </div>
              
              <h3 className="font-display text-2xl tracking-wider">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              
              <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                <div>
                  <span className="text-xs text-muted-foreground">Harga</span>
                  <div className="font-display text-4xl text-gold">Rp {s.price}</div>
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}