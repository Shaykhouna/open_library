import { motion } from "framer-motion";
import { Apple, Monitor, Download } from "lucide-react";
import type { DownloadCard } from "../lib/github";
import type { JSX } from "react"

interface Props {
  downloads: DownloadCard[];
  releaseTag: string;
  releaseDate: string;
}

function iconFor(os: string): JSX.Element {
  if (os.startsWith("macOS")) return <Apple size={16} />;
  if (os.startsWith("Windows")) return <Monitor size={16} />;
  return <Download size={16} />;
}

export default function Downloads({ downloads, releaseTag, releaseDate }: Props): JSX.Element {
  return (
    <section id="downloads" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="label text-accent-cyan mb-3">DOWNLOAD</div>
        <h2 className="text-4xl font-semibold tracking-tight mb-3">
          Pick your platform.
        </h2>
        <div className="label text-text-faint">
          {releaseTag} · {releaseDate}
        </div>
      </motion.div>

      {downloads.length === 0 ? (
        <div className="text-center text-text-faint text-sm">
          No release available yet. Check back soon.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {downloads.map((d, i) => (
            <motion.a
              key={d.filename}
              href={d.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-lg p-5 flex items-center gap-4 hover:border-accent-cyan/40 transition group"
            >
              <div className="w-11 h-11 rounded-md bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition">
                {iconFor(d.os)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-text-primary font-medium">{d.os}</div>
                <div className="label text-text-faint mt-1">
                  {d.filename.split("_").slice(-1)[0]} · {d.sizeMb}MB
                </div>
              </div>
              <Download size={14} className="text-text-faint group-hover:text-accent-cyan transition" />
            </motion.a>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <a>
          href="https://github.com/Shaykhouna/axis-ai/blob/main/INSTALL.md"
          className="label text-text-faint hover:text-accent-cyan transition"
        
          INSTALLATION GUIDE & FIRST-RUN BYPASS →
        </a>
      </div>
    </section>
  );
}