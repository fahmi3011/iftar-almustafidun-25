import { motion } from "framer-motion";
import { User } from "lucide-react";

const DressCode = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col sm:flex-row items-center justify-center gap-10"
  >
    <div className="flex flex-col items-center gap-3">
      <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center">
        <User className="w-12 h-12 text-primary-foreground" />
      </div>
      <div className="text-center">
        <p className="font-display font-bold text-foreground">Wanita</p>
        <p className="font-body text-sm text-muted-foreground">Gamis Hitam</p>
        <p className="font-body text-sm text-muted-foreground">Kerudung Hitam</p>
      </div>
    </div>
    <div className="flex flex-col items-center gap-3">
      <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center">
        <User className="w-12 h-12 text-primary-foreground" />
      </div>
      <div className="text-center">
        <p className="font-display font-bold text-foreground">Pria</p>
        <p className="font-body text-sm text-muted-foreground">Kemeja / Gamis Hitam</p>
        <p className="font-body text-sm text-muted-foreground">Celana Hitam</p>
      </div>
    </div>
  </motion.div>
);

export default DressCode;
