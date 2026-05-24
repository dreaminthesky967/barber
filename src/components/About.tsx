import { motion } from "motion/react";
import { Award, Clock, Users } from "lucide-react";
const stats = [
  { icon: Clock, n: "4+", l: "Tahun Berkarya" },
  { icon: Users, n: "1000+", l: "Pelanggan Setia" },
  { icon: Award, n: "5", l: "Barber Berbintang" },
];
export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">Tentang Kami</p>
            <h2 className="font-display text-5xl md:text-6xl">
              Lebih dari sekadar <span className="text-gold">potong rambut.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              TYM BARBERS Barber lahir dari kecintaan terhadap detail. Setiap kursi adalah panggung,
              setiap potongan adalah pertunjukan. Kami menggabungkan teknik klasik dengan estetika
              modern — handuk panas, pisau cukur tajam, dan obrolan yang membuat hari Anda lebih baik.
            </p>
          </motion.div>
          <div className="grid gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur hover:border-primary/50 transition"
              >
                <div className="rounded-xl bg-primary/10 p-4 text-primary">
                  <s.icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="font-display text-4xl text-gold">{s.n}</div>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}