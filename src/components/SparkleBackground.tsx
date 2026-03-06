import { motion } from "framer-motion";

const sparkles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 16 + 8,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 3,
}));

const SparkleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {sparkles.map((s) => (
      <motion.svg
        key={s.id}
        width={s.size}
        height={s.size}
        viewBox="0 0 24 24"
        fill="none"
        className="absolute"
        style={{ left: `${s.x}%`, top: `${s.y}%` }}
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: [0, 0.7, 0],
          scale: [0, 1, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: s.duration,
          delay: s.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M12 0C12 0 13.5 8.5 12 12C10.5 8.5 12 0 12 0Z"
          fill="hsl(195 40% 80% / 0.6)"
        />
        <path
          d="M12 24C12 24 10.5 15.5 12 12C13.5 15.5 12 24 12 24Z"
          fill="hsl(195 40% 80% / 0.6)"
        />
        <path
          d="M0 12C0 12 8.5 10.5 12 12C8.5 13.5 0 12 0 12Z"
          fill="hsl(195 40% 80% / 0.6)"
        />
        <path
          d="M24 12C24 12 15.5 13.5 12 12C15.5 10.5 24 12 24 12Z"
          fill="hsl(195 40% 80% / 0.6)"
        />
      </motion.svg>
    ))}
  </div>
);

export default SparkleBackground;
