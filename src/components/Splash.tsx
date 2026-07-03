"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-blue text-white"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-medium uppercase tracking-[0.3em] text-white/75"
          >
            Powered by
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-2 text-6xl font-bold tracking-wide sm:text-7xl"
          >
            QuickTap
          </motion.p>

          {/* loading dots */}
          <div className="mt-9 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -5, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
                className="h-2.5 w-2.5 rounded-full bg-white"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
