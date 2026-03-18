import { useLanguage } from "@/context/LanguageContext";
import { FaGraduationCap, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Card } from "@/components/Card";

export const About = () => {
  const { t } = useLanguage();
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Card
        hover
        className="md:col-span-3 rounded-4xl p-8 sm:p-10 flex flex-col justify-center"
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-start w-full">
            <h3 className="text-xl sm:text-2xl font-bold">
              {t("about.greeting")}
            </h3>
            <FaUser className="text-accent w-5 h-5 opacity-80 group-hover:scale-110 transition-transform" />
          </div>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed font-medium">
            {t("about.desc")}{" "}
            <span className="text-accent font-bold mt-2 sm:mt-0 block sm:inline">
              {t("about.years")}
            </span>
          </p>
        </div>
      </Card>

      <div className="md:col-span-2 flex flex-col gap-4">
        {[
          {
            icon: FaMapMarkerAlt,
            title: t("about.location.title"),
            desc: t("about.location.desc"),
            iconClassName: "w-3 h-3",
          },
          {
            icon: FaGraduationCap,
            title: t("about.education.title"),
            desc: t("about.education.desc"),
            iconClassName: "w-4 h-4 ml-0.5",
          },
        ].map((info, idx) => (
          <Card
            key={idx}
            hover
            className="flex-1 rounded-4xl p-6 sm:p-8 flex flex-col justify-center"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <info.icon
                    className={`text-accent group-hover:scale-110 transition-transform ${info.iconClassName}`}
                  />
                </div>
                <h4 className="font-bold text-sm sm:text-base">{info.title}</h4>
              </div>
              <p className="text-sm text-muted pl-11">{info.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
