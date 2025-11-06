import { ArrowRight, Download } from "lucide-react";

export default function CTA() {
  return (
    <section id="download" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200/60 dark:border-indigo-900 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 sm:p-12 shadow-xl">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Save your first video in under 30 seconds
              </h3>
              <p className="mt-2 text-white/90">
                Free to use. No signup required. Works on mobile and desktop.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-indigo-700 px-5 py-3 text-sm font-semibold shadow hover:opacity-95"
              >
                <Download size={18} />
                Download for Desktop
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700/20 text-white px-5 py-3 text-sm font-semibold border border-white/20 hover:bg-indigo-700/30"
              >
                Learn more
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
