import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="w-full border-t border-border-theme py-8 mt-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-muted font-medium">
        <p>{t("footer.rights")}</p>
        <p className="flex items-center gap-1.5">{t("footer.built.suffix")}</p>
      </div>
    </footer>
  );
};
