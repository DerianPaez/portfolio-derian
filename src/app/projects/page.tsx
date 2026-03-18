"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectsPage() {
  const { t } = useLanguage();

  const projs = [
    {
      title: t("proj1.title"),
      desc: t("proj1.desc"),
      tags: ["React", "TypeScript", "Tailwind"],
      image: "/projects/project-1.png",
    },
    {
      title: t("proj2.title"),
      desc: t("proj2.desc"),
      tags: ["Next.js", "Chart.js", "API"],
      image: "/projects/project-2.png",
    },
    {
      title: t("proj3.title"),
      desc: t("proj3.desc"),
      tags: ["Next.js", "Framer Motion", "Bento"],
      image: "/projects/project-3.png",
    },
    {
      title: t("proj4.title"),
      desc: t("proj4.desc"),
      tags: ["React", "D3.js", "Finance"],
      image: "/projects/project-4.png",
    },
    {
      title: t("proj5.title"),
      desc: t("proj5.desc"),
      tags: ["Next.js", "OpenAI", "UI"],
      image: "/projects/project-5.png",
    },
    {
      title: t("proj6.title"),
      desc: t("proj6.desc"),
      tags: ["React Native", "Healthcare", "UX"],
      image: "/projects/project-6.png",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative">
      <Navbar />

      {/* Subtle top glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* content container centered */}
      <div className="max-w-[1200px] mx-auto pt-32 px-6 sm:px-8 pb-8 relative z-10 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent font-semibold transition-colors w-fit"
          >
            <FaArrowLeft className="w-3 h-3" />
            {t("projectsPage.back")}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t("projectsPage.title")}
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            {t("projectsPage.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {projs.map((p) => (
            <Card
              key={p.title}
              hover
              className="rounded-4xl p-0 flex flex-col group/card h-full"
            >
              <div className="w-full aspect-video bg-[#0a0f12] rounded-t-xl flex items-center justify-center border border-border-theme relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-t-full z-0" />
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-500 z-10"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col gap-3 p-6 flex-1">
                <h4 className="font-bold text-xl">{p.title}</h4>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tagItem) => (
                    <span
                      key={tagItem}
                      className="px-3 py-1 bg-transparent rounded-full border border-accent/30 text-[10px] sm:text-xs text-accent font-semibold tracking-wide"
                    >
                      {tagItem}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
