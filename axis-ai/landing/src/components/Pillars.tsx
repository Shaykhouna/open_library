import { motion } from "framer-motion";
import { KeyRound, HardDrive, EyeOff } from "lucide-react";
import type { JSX } from "react";

const PILLARS = [
  {
    icon: KeyRound,
    title: "BYOK",
    tagline: "Your keys, your providers.",
    body: "OpenRouter or OpenAI keys, your choice. Stored in your OS keychain, never in our database. No subscription — you pay providers directly.",
  },
  {
    icon: HardDrive,
    title: "Local-first",
    tagline: "Your data stays on your machine.",
    body: "Every conversation, agent, and result lives locally. Vault retrieval runs against your local index. Chat refines prompts via Ollama before they hit the cloud.",
  },
  {
    icon: EyeOff,
    title: "No tracking",
    tagline: "Zero telemetry. Full stop.",
    body: "No analytics. No usage pings. The Network tab in Settings lists every domain Axis-AI may contact, what triggers it, and how to disable it.",
  },
];

export default function Pillars(): JSX.Element {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="label text-accent-cyan mb-4">Principles</div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
          Built on three commitments.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="relative rounded-xl border border-divider p-8 hover:border-accent-cyan/25 transition-colors duration-300 group overflow-hidden cursor-default"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.06), transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-6 group-hover:bg-accent-cyan/15 transition-colors duration-300">
                <p.icon size={17} className="text-accent-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-1.5 text-text-primary">
                {p.title}
              </h3>
              <p className="text-accent-cyan/60 text-xs font-medium mb-4 label">
                {p.tagline}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
