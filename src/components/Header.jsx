import { Download, Rocket, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-zinc-900/50 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow-lg shadow-indigo-500/30">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">MultiLoad</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Features</a>
            <a href="#how" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">How it works</a>
            <a href="#download" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Download</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-500/25 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Download size={16} />
              Get the app
            </a>
            <span className="hidden sm:flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-xs text-zinc-600 dark:text-zinc-300">
              <ShieldCheck size={14} />
              Secure
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
