import { useLanguage } from "@/context/LanguageContext";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconButton } from "@/components/IconButton";
import { Button } from "@/components/Button";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <div
      id="home"
      className="flex flex-col items-center text-center mt-8 sm:mt-16"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] font-bold text-accent tracking-[2px] uppercase">
          {t("hero.available")}
        </span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-2">
        {t("hero.name")}
      </h1>
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-accent mb-6 sm:mb-8">
        {t("hero.title")}
      </h2>

      <p className="max-w-2xl text-muted text-sm sm:text-lg leading-relaxed mb-10">
        {t("hero.desc")}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <Button
          variant="primary"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("hero.viewWork")} <span className="rotate-0 ml-1">↓</span>
        </Button>
        <Button variant="secondary">
          {t("hero.downloadCv")} <FaDownload className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <IconButton href="#" icon={FaGithub} target="_blank" />
        <IconButton href="#" icon={FaLinkedin} target="_blank" />
      </div>
    </div>
  );
};
