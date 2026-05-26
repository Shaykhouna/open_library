import { motion } from "framer-motion";
import { Beaker, Lock, RefreshCw } from "lucide-react";
import type { JSX } from "react";

const STEPS = [
  {
    number: "01",
    icon: Beaker,
    label: "Lab",
    title: "Run parallel agents",
    body: "Test multiple AI agents on the same task simultaneously. Compare outputs side by side and vote on which result you'd actually use.",
  },
  {
    number: "02",
    icon: Lock,
    label: "Process",
    title: "Freeze the winner",
    body: "Pin the best agent, configuration, and model version. That task type is now handled exactly this way — until you decide otherwise.",
  },
  {
    number: "03",
    icon: RefreshCw,
    label: "Re-Lab",
    title: "Re-test as models improve",
    body: "A new SOTA model drops. Re-run the same benchmark. Promote the new winner if it earns it. Your library of frozen workflows grows.",
  },
];

export default function LoopDiagram(): JSX.Element {
  return (
    <section id="how" className="py-32 px-6 max-w-5xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="label text-accent-cyan mb-4">The Loop</div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5 text-text-primary">
          Test, freeze, retest.
        </h2>
        <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
          Your taste is the moat. Axis-AI gives you the workflow to apply it
          systematically.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Animated connector between cards */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          className="hidden md:block absolute top-11 left-[calc(33.33%+0.5rem)] right-[calc(33.33%+0.5rem)] h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,0.55), rgba(0,212,255,0.15), rgba(0,212,255,0.55))",
          }}
        />

        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.13 }}
            className="glass rounded-xl p-7 relative hover:border-accent-cyan/25 transition-colors duration-300 group"
          >
            {/* Icon + step number row */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center group-hover:bg-accent-cyan/15 transition-colors duration-300">
                <step.icon size={18} className="text-accent-cyan" />
              </div>
              <span className="label text-text-faint" style={{ fontSize: "10px" }}>
                {step.number}
              </span>
            </div>

            <div className="label text-accent-cyan mb-2.5" style={{ fontSize: "10px" }}>
              {step.label}
            </div>
            <h3 className="text-lg font-semibold mb-3 text-text-primary">
              {step.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
