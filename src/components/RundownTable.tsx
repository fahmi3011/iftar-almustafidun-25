import { motion } from "framer-motion";

const rundown = [
  { acara: "Pembukaan", waktu: "17.30 – 17.40", pengisi: "MC" },
  { acara: "Pembacaan Ayat Suci Al-Quran", waktu: "17.40 – 17.50", pengisi: "Salah Satu Alumni" },
  { acara: "Sambutan", waktu: "17.50 – 18.00", pengisi: "Panitia" },
  { acara: "Sholat Magrib & Buka Puasa Bersama", waktu: "18.10 – 19.10", pengisi: "Seluruh Para Alumni" },
  { acara: "Penutupan & Doa", waktu: "19.10 – 19.20", pengisi: "MC & Panitia" },
  { acara: "Foto Bersama", waktu: "19.20 – 19.30", pengisi: "Seluruh Para Alumni" },
  { acara: "Selesai", waktu: "19.30", pengisi: "—" },
];

const RundownTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-full overflow-x-auto"
  >
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-navy">
          <th className="px-4 py-3 text-left font-display text-sm uppercase tracking-wider text-primary-foreground">Acara</th>
          <th className="px-4 py-3 text-center font-display text-sm uppercase tracking-wider text-primary-foreground">Waktu</th>
          <th className="px-4 py-3 text-center font-display text-sm uppercase tracking-wider text-primary-foreground">Pengisi Acara</th>
        </tr>
      </thead>
      <tbody>
        {rundown.map((item, i) => (
          <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-ice"}`}>
            <td className="px-4 py-3 font-body text-sm font-medium text-foreground">{item.acara}</td>
            <td className="px-4 py-3 font-body text-sm text-center text-muted-foreground">{item.waktu}</td>
            <td className="px-4 py-3 font-body text-sm text-center text-muted-foreground">{item.pengisi}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="mt-4 text-center font-display text-sm font-bold italic text-navy">
      #NOTE : 17.30 SUDAH DI TEMPAT
    </p>
  </motion.div>
);

export default RundownTable;
