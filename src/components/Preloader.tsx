import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) requestAnimationFrame(animate);
      else setTimeout(() => setLoading(false), 300);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated background orbs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, hsl(42 55% 50% / 0.15), transparent 70%)" }}
            animate={{ scale: [1, 1.4, 1], x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, hsl(210 60% 70% / 0.12), transparent 70%)" }}
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glass container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
            className="relative z-10 flex flex-col items-center glass-strong rounded-3xl px-16 py-14"
          >
            {/* Spinning ring behind logo */}
            <div className="relative mb-8">
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-transparent"
                style={{ borderTopColor: "hsl(42 55% 50%)", borderRightColor: "hsl(42 60% 65% / 0.3)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-7 rounded-full border border-transparent"
                style={{ borderBottomColor: "hsl(42 55% 50% / 0.3)", borderLeftColor: "hsl(42 60% 65% / 0.15)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                src={logo}
                alt="NV Constructions"
                className="w-20 h-20 relative z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 200, delay: 0.2 }}
              />
            </div>

            {/* Company name with letter-by-letter animation */}
            <div className="flex gap-[2px] mb-2 overflow-hidden">
              {"NIKHIL VARMA".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-xl font-heading font-bold tracking-wider text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.04, duration: 0.3 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
            <motion.p
              className="text-sm tracking-[0.35em] uppercase text-primary font-medium mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Constructions
            </motion.p>

            {/* Progress bar */}
            <div className="w-56 relative">
              <div className="h-[3px] bg-foreground/8 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{ background: "linear-gradient(90deg, hsl(42 60% 65%), hsl(42 55% 45%), hsl(42 60% 65%))", backgroundSize: "200% 100%" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%`, backgroundPosition: ["0% 0%", "100% 0%"] }}
                  transition={{ backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" } }}
                />
              </div>
              <motion.p
                className="text-xs text-muted-foreground text-center mt-3 font-medium tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {progress}%
              </motion.p>
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-8 text-xs text-muted-foreground/60 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Building Trust · Raising Standards
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;