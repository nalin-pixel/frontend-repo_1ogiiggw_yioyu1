import { Zap, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing fast",
    desc: "Optimized pipeline delivers your downloads in seconds with adaptive chunking.",
  },
  {
    icon: ShieldCheck,
    title: "Private & secure",
    desc: "We respect your privacy. Links are processed securely with no tracking.",
  },
  {
    icon: Sparkles,
    title: "HD, MP4 & MP3",
    desc: "Choose the best quality or extract audio only — watermark‑free results.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Everything you need to save videos
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Paste a link, pick a format, done. Works with all major platforms and most regional sites.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center shadow-md shadow-indigo-500/30">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
