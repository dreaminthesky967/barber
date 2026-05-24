import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Pastikan path import aset kamu sudah benar
import g1 from "@/assets/gal-1.jpeg";
import g2 from "@/assets/gal-2.jpeg";
import g3 from "@/assets/gal-3.jpeg";
import g4 from "@/assets/gal-4.jpeg";
import g5 from "@/assets/gal-5.jpeg";
import g6 from "@/assets/gal-6.jpeg";
import g7 from "@/assets/gal-7.jpeg";


const items = [
    { src: g1, label: "", span: "row-span-2" },
    { src: g2, label: " ", span: "" },
    { src: g3, label: " ", span: "" },
    { src: g4, label: " ", span: "row-span-2" },
    { src: g5, label: " ", span: "" },
    { src: g6, label: " ", span: "" },
    { src: g7, label: " ", span: "" },
];

// Buat tipe data untuk mempermudah (opsional tapi disarankan)
type SelectedItem = typeof items[0] | null;

export default function Gallery() {
  // State untuk menyimpan gambar mana yang sedang dipilih/diklik
  const [selectedImage, setSelectedImage] = useState<SelectedItem>(null);

  return (
    <section id="gallery" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">Galeri</p>
            <h2 className="font-display text-5xl md:text-6xl">
              Momen di <span className="text-gold">Kursi Cukur.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Cuplikan suasana, hasil potongan, dan detail yang membuat kami berbeda.
          </p>
        </div>

        {/* Grid Galeri */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              // Tambahkan cursor-pointer agar pengguna tahu ini bisa diklik
              className={`group relative overflow-hidden rounded-2xl border border-border cursor-pointer ${it.span}`}
              // Fungsi untuk mengisi state saat diklik
              onClick={() => setSelectedImage(it)} 
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-display text-lg tracking-wider">{it.label}</span>
                <span className="h-px flex-1 mx-3 bg-primary/40" />
                <span className="text-xs text-primary">0{i + 1}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* MODAL POPUP LIGHTBOX (Muncul saat selectedImage ada isinya) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            // Animasi latar belakang gelap memudar
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Menutup modal jika area gelap di luar gambar diklik
            onClick={() => setSelectedImage(null)} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md md:p-10"
          >
            <div className="relative flex max-h-full max-w-5xl items-center justify-center">
              
              {/* Gambar yang Diperbesar */}
              <motion.img
                // Animasi gambar membesar perlahan dengan efek memantul (spring)
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage.src}
                alt={selectedImage.label}
                // e.stopPropagation() mencegah modal tertutup jika user tidak sengaja mengklik area gambar
                onClick={(e) => e.stopPropagation()} 
                className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-deep ring-1 ring-border"
              />

              {/* Teks Label & Tombol Tutup */}
              <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-between text-muted-foreground">
                <span className="font-display tracking-widest text-primary">{selectedImage.label}</span>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  Tutup [X]
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}