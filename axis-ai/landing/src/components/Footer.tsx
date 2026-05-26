import { motion } from "framer-motion";
import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-divider py-10 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="label text-text-faint">Axis-AI · Private Beta</div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Shaykhouna/axis-ai"
            className="label text-text-faint hover:text-accent-cyan transition-colors duration-200"
          >
            Source
          </a>
          <a
            href="https://github.com/Shaykhouna/axis-ai/issues"
            className="label text-text-faint hover:text-accent-cyan transition-colors duration-200"
          >
            Feedback
          </a>
          <a
            href="https://github.com/Shaykhouna/axis-ai/releases"
            className="label text-text-faint hover:text-accent-cyan transition-colors duration-200"
          >
            Changelog
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
