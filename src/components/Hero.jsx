import { useState } from "react";
import { Download, Link as LinkIcon, Rocket } from "lucide-react";

export default function Hero() {
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState("auto");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For landing demo only
    alert(`Ready to fetch media from: ${url || "<enter a link>"} (platform: ${platform})`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200 via-white to-white dark:from-indigo-950 dark:via-zinc-900 dark:to-zinc-900" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 dark:border-indigo-800 bg-white/60 dark:bg-zinc-950/40 backdrop-blur px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300 shadow-sm">
              <Rocket size={14} />
              Multi platform video downloader
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
              Download videos from anywhere in seconds
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Paste a link from your favorite site and get high‑quality downloads in MP4 or MP3. No watermarks. No fuss.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,160px] gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <LinkIcon className="text-zinc-400" size={18} />
                <input
                  type="url"
                  placeholder="Paste video link (YouTube, Instagram, TikTok, Twitter, and more)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-transparent outline-none placeholder:text-zinc-400 text-zinc-900 dark:text-white"
                />
              </div>

              <div className="flex gap-3">
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="auto">Auto detect</option>
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="twitter">Twitter/X</option>
                </select>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400 text-center">
              By using this service, you agree not to download copyrighted material without permission.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
