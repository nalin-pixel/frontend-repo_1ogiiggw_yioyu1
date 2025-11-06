import { Steps } from "./Steps";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Three simple steps
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Get your video in less than a minute. No sign‑up, no extensions required.
          </p>
        </div>

        <div className="mt-12">
          <Steps />
        </div>
      </div>
    </section>
  );
}
