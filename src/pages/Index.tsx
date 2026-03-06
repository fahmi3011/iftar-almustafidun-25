import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, Star } from "lucide-react";
import SparkleBackground from "@/components/SparkleBackground";
import GeometricDecoration from "@/components/GeometricDecoration";
import WaveDecoration from "@/components/WaveDecoration";
import CountdownTimer from "@/components/CountdownTimer";
import RundownTable from "@/components/RundownTable";
import DressCode from "@/components/DressCode";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <SparkleBackground />
        <GeometricDecoration position="left" />
        <GeometricDecoration position="right" className="!left-auto !top-auto !right-0 !bottom-0" />
        
        {/* Wave decorations */}
        <div className="absolute top-10 right-0 w-48 sm:w-72 opacity-60">
          <WaveDecoration />
        </div>
        <div className="absolute bottom-20 left-0 w-48 sm:w-72 opacity-60">
          <WaveDecoration flip />
        </div>

        <div className="text-center z-10 max-w-2xl">
          <motion.div {...fadeUp} className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-8 h-8 text-teal fill-teal" />
            <Star className="w-10 h-10 text-navy fill-navy" />
            <Star className="w-8 h-8 text-teal fill-teal" />
          </motion.div>

          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Undangan Iftar Bersama
          </motion.p>

          <motion.h1 {...fadeUp} transition={{ delay: 0.2 }} className="font-display text-5xl sm:text-7xl font-black text-navy leading-tight mb-2">
            IFTAR
          </motion.h1>
          <motion.h2 {...fadeUp} transition={{ delay: 0.3 }} className="font-display text-3xl sm:text-5xl font-bold text-navy mb-10">
            AL-MUSTAFIDUN'25
          </motion.h2>

          <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-teal" />
              <span className="font-body text-foreground">
                <strong>17.30</strong> WIB – Selesai
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-teal" />
              <span className="font-body text-foreground">
                <strong>SABTU,</strong> 14 MARET 2026
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-teal" />
              <span className="font-body text-foreground">
                <strong>SERELA RIAU HOTEL</strong> — Bandung
              </span>
            </div>
          </motion.div>

          <motion.p {...fadeUp} transition={{ delay: 0.5 }} className="mt-10 font-display text-lg font-bold italic text-navy">
            #ALMUSTAFIDUN
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Countdown Section */}
      <section className="py-20 px-6 relative">
        <GeometricDecoration position="right" className="!left-auto !top-0 !right-0 opacity-30" />
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3">
            Hitung Mundur
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground mb-10">
            Menuju hari yang dinantikan
          </motion.p>
          <CountdownTimer />
        </div>
      </section>

      <div className="section-divider" />

      {/* Rundown Section */}
      <section className="py-20 px-6 bg-muted relative">
        <GeometricDecoration position="left" className="opacity-20" />
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-navy mb-10 text-center">
            Rundown Acara
          </motion.h2>
          <RundownTable />
        </div>
      </section>

      <div className="section-divider" />

      {/* Dress Code Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-5 right-0 w-48 opacity-40">
          <WaveDecoration />
        </div>
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-navy mb-10 text-center">
            Dress Code
          </motion.h2>
          <DressCode />
        </div>
      </section>

      <div className="section-divider" />

      {/* Map Section */}
      <section className="py-20 px-6 bg-muted relative">
        <GeometricDecoration position="right" className="!left-auto !top-0 !right-0 opacity-20" />
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3 text-center">
            Lokasi Acara
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="font-body text-muted-foreground mb-8 text-center">
            Serela Riau Hotel, Bandung
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9023073546376!2d107.61384987576864!3d-6.900825493098567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e63b1536b8c3%3A0xf4e2c959fba63a4e!2sHotel%20Serela%20Riau!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Serela Riau Hotel Bandung"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-navy text-center">
        <p className="font-display text-2xl font-bold text-primary-foreground mb-2">
          Kami Menantikan Kehadiran Anda
        </p>
        <p className="font-body text-sm text-teal-light tracking-widest uppercase">
          #ALMUSTAFIDUN
        </p>
      </footer>
    </div>
  );
};

export default Index;
