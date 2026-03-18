import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import Link from "next/link";

export const Projects = () => {
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
    <div id="projects" className="w-full relative flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projs.slice(0, 3).map((p) => (
          <div key={p.title}>
            <Card hover className="rounded-4xl p-0 flex flex-col h-full">
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

              <div className="flex flex-col gap-3 p-5 flex-1">
                <h4 className="font-bold text-lg">{p.title}</h4>
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
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2 sm:mt-4">
        <Button as={Link} href="/projects" variant="secondary">
          {t("projects.viewMore")}
        </Button>
      </div>
    </div>
  );
};
