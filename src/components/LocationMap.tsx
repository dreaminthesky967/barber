import { MapPin, Phone, Clock } from "lucide-react";

// Komponen Ikon Instagram Kustom
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export default function Location() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.885270992167!2d107.0291694!3d-6.146108399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69890017fe3b03%3A0xdd30cde90c7ecfe9!2sTym%20barbers!5e0!3m2!1sid!2sid!4v1779641957049!5m2!1sid!2sid";

  return (
    <section id="location" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        
        {/* Bagian Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">Lokasi Kami</p>
            <h2 className="font-display text-5xl md:text-6xl">
              Mampir & <span className="text-gold">Geser Petanya.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Temukan kami dengan mudah. Parkir luas, ruang tunggu nyaman, dan kopi gratis menanti.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          
          {/* Info Kontak (Sebelah Kiri) */}
          <div className="space-y-6">
            {[
              { 
                icon: MapPin,
                t: "Alamat",
                v: "Jl. Pertamina, Kedungjaya, Kec. Babelan, Kabupaten Bekasi, Jawa Barat" 
              },
              { 
                icon: Clock, 
                t: "Jam Buka", 
                v: "Senin – Minggu · 09.00 – 22.00 WIB" 
              },
              { 
                icon: Phone, 
                t: "Telepon", 
                v: "Hubungi Kami", 
                href: "https://api.whatsapp.com/send?phone=6282287341450" 
              },
              { 
                icon: InstagramIcon, 
                t: "Media Sosial", 
                v: "Instagram Kami", 
                href: "https://www.instagram.com/tymbarbers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Ganti dengan username IG kamu
              }
            ].map((item, idx) => {
              
              // Ini adalah isi (tampilan) dari setiap baris
              const RowContent = (
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display tracking-wider text-lg">{item.t}</h3>
                    <p className={`mt-1 text-sm leading-relaxed transition-colors ${
                      item.href 
                        ? "font-semibold text-gold underline underline-offset-4 group-hover:text-primary" 
                        : "text-muted-foreground"
                    }`}>
                      {item.v}
                    </p>
                  </div>
                </div>
              );

              // Jika item memiliki link (href), gunakan tag <a>
              if (item.href) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative z-50 block cursor-pointer rounded-xl p-2 -ml-2 transition-all hover:bg-card/50"
                  >
                    {RowContent}
                  </a>
                );
              }

              // Jika tidak ada link, gunakan div biasa
              return (
                <div key={idx} className="group relative z-10 block p-2 -ml-2">
                  {RowContent}
                </div>
              );
            })}
          </div>

          {/* Iframe Peta (Sebelah Kanan) */}
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-deep h-[300px] lg:h-[450px]">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}