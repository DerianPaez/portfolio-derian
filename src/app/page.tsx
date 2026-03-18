"use client";

import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tech } from "@/components/sections/Tech";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Divider } from "@/components/Divider";

export default function Home() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative">
      <Navbar />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto pt-20 px-6 sm:px-8 pb-8 relative z-10 w-full">
        <Hero />
        <Divider title={t("about.title")} />
        <About />
        <Divider title={t("tech.title")} />
        <Tech />
        <Divider title={t("projects.title")} />
        <Projects />
        <Divider title={t("contact.divider")} />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
