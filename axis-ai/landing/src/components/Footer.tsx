import type { JSX } from "react"

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-divider py-10 px-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="label text-text-faint">
          AXIS-AI · PRIVATE BETA
        </div>
        <div className="flex items-center gap-6">
          
            href="https://github.com/Shaykhouna/axis-ai"
            className="label text-text-faint hover:text-accent-cyan transition"
          <a>
            SOURCE
          </a>
          
            href="https://github.com/Shaykhouna/axis-ai/issues"
            className="label text-text-faint hover:text-accent-cyan transition"
          <a>
            FEEDBACK
          </a>
          
            href="https://github.com/Shaykhouna/axis-ai/releases"
            className="label text-text-faint hover:text-accent-cyan transition"
          <a>
            CHANGELOG
          </a>
        </div>
      </div>
    </footer>
  );
}