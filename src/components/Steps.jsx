import { Link as LinkIcon, ListChecks, Download } from "lucide-react";

const steps = [
  {
    icon: LinkIcon,
    title: "Paste the link",
    desc: "Copy the video URL from any platform and paste it into the box above.",
  },
  {
    icon: ListChecks,
    title: "Pick quality & format",
    desc: "Choose MP4 for video or MP3 for audio-only. HD options when available.",
  },
  {
    icon: Download,
    title: "Hit download",
    desc: "We fetch, process, and deliver your file — ready to watch offline.",
  },
];

export function Steps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-3">
      {steps.map((s, i) => (
        <li
          key={i}
          className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm"
        >
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center shadow-md shadow-indigo-500/30">
            <s.icon size={22} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
          {i < steps.length - 1 && (
            <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-indigo-400/50 to-fuchsia-400/50" />
          )}
        </li>
      ))}
    </ol>
  );
}
