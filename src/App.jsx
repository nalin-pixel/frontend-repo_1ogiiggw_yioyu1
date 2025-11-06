import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";

function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} MultiLoad — Multi video downloader</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">Features</a>
          <a href="#how" className="hover:text-zinc-900 dark:hover:text-white">How it works</a>
          <a href="#download" className="hover:text-zinc-900 dark:hover:text-white">Download</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
