import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-14T17:30:00+07:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="countdown-box"
        >
          <div className="font-display text-3xl sm:text-5xl font-bold">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm font-body mt-1 opacity-80 uppercase tracking-widest">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
