import { motion } from "framer-motion";
import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyan glow orb */}
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-225 h-175 opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse, #00d4ff, transparent 65%)",
            filter: "blur(72px)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 25%, #070a0e 78%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 mb-9"
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan"
            style={{ boxShadow: "0 0 10px rgba(0,212,255,0.9)" }}
          />
          <span className="label text-accent-cyan">Private Beta · v0.1</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-5xl md:text-[4.5rem] font-semibold tracking-tight leading-[1.04] mb-7 text-text-primary"
        >
          Your personal
          <br />
          <span className="text-accent-cyan">AI lab.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-130 mx-auto mb-14"
        >
          Test agents in parallel. Freeze the winners. Build a library of AI
          workflows you actually use.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="#downloads"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="label inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent-cyan text-bg-deep font-semibold transition-opacity duration-200 hover:opacity-90"
          >
            Download →
          </motion.a>
          <motion.a
            href="#how"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="label inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-divider text-text-secondary hover:text-text-primary hover:border-accent-cyan/30 transition-all duration-200"
          >
            How it works
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="mt-24 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-px h-14"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,212,255,0.45))",
              }}
            />
            <span
              className="label text-text-faint"
              style={{ fontSize: "10px" }}
            >
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
