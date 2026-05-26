import { motion } from "framer-motion";
import { Apple, Monitor, Download, Terminal } from "lucide-react";
import type { DownloadCard } from "../lib/github";
import type { JSX } from "react";

interface Props {
  downloads: DownloadCard[];
  releaseTag: string;
  releaseDate: string;
}

function iconFor(os: string): JSX.Element {
  if (os.startsWith("macOS")) return <Apple size={18} />;
  if (os.startsWith("Windows")) return <Monitor size={18} />;
  if (os.startsWith("Linux")) return <Terminal size={18} />;
  return <Download size={18} />;
}

function archLabel(os: string): string {
  if (os.includes("Apple Silicon")) return "ARM64";
  if (os.includes("Intel")) return "x64";
  if (os.includes("Windows")) return "x64";
  return "amd64";
}

export default function Downloads({ downloads, releaseTag, releaseDate }: Props): JSX.Element {
  return (
    <section id="downloads" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="label text-accent-cyan mb-4">Download</div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-text-primary">
          Pick your platform.
        </h2>
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-divider">
          <span className="label text-text-faint">{releaseTag}</span>
          <span className="w-px h-3 bg-divider" />
          <span className="label text-text-faint">{releaseDate}</span>
        </div>
      </motion.div>

      {downloads.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-faint text-sm py-16 border border-dashed border-divider rounded-xl"
        >
          No release available yet. Check back soon.
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {downloads.map((d, i) => (
            <motion.a
              key={d.filename}
              href={d.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-accent-cyan/30 transition-colors duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0 group-hover:bg-accent-cyan/15 transition-colors duration-300">
                {iconFor(d.os)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-text-primary font-medium text-sm">{d.os}</div>
                <div className="label text-text-faint mt-1">
                  {archLabel(d.os)} · {d.sizeMb} MB
                </div>
              </div>
              <Download
                size={14}
                className="text-text-faint group-hover:text-accent-cyan transition-colors duration-300 shrink-0"
              />
            </motion.a>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/Shaykhouna/axis-ai/blob/main/INSTALL.md"
          className="label text-text-faint hover:text-accent-cyan transition-colors duration-200"
          style={{ fontSize: "10px" }}
        >
          Installation guide & first-run bypass →
        </a>
      </motion.div>
    </section>
  );
}
