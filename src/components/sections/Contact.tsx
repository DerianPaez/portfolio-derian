import { useLanguage } from "@/context/LanguageContext";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegPaperPlane,
} from "react-icons/fa";
import { Card } from "@/components/Card";
import Link from "next/link";

export const Contact = () => {
  const { t } = useLanguage();
  const links = [
    { label: "Github", icon: FaGithub, href: "#" },
    { label: "LinkedIn", icon: FaLinkedin, href: "#" },
    { label: "Instagram", icon: FaInstagram, href: "#" },
    {
      label: "derianpaez01@gmail.com",
      icon: FaEnvelope,
      href: "mailto:derianpaez01@gmail.com",
    },
  ];

  return (
    <div
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 flex-col-reverse md:flex-row"
    >
      <Card className="rounded-4xl p-8 sm:p-10 flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            {t("contact.sendMsg.title")}
          </h3>
          <p className="text-sm text-muted">{t("contact.sendMsg.desc")}</p>
        </div>
        <div className="flex flex-col gap-4">
          {[
            {
              label: t("contact.name"),
              type: "text",
            },
            {
              label: t("contact.email"),
              type: "email",
            },
          ].map((input) => (
            <input
              key={input.label}
              type={input.type}
              placeholder={input.label}
              className="w-full bg-background border border-border-theme/40 rounded-2xl px-5 py-4 text-sm outline-none focus:border-accent transition-colors placeholder:text-muted/70"
            />
          ))}
          <textarea
            placeholder={t("contact.message")}
            rows={4}
            className="w-full bg-background border border-border-theme/40 rounded-2xl px-5 py-4 text-sm outline-none focus:border-accent transition-colors resize-none placeholder:text-muted/70"
          />
          <button className="w-full py-4 bg-accent text-background font-bold rounded-2xl hover:bg-accent/80 transition-all flex justify-center items-center gap-2 text-sm mt-2 cursor-pointer">
            {t("contact.send")} <FaRegPaperPlane className="w-4 h-4 ml-1" />
          </button>
        </div>
      </Card>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            {t("contact.connect.title")}
          </h3>
          <p className="text-sm text-muted">{t("contact.connect.desc")}</p>
        </div>
        <div className="flex flex-col gap-4">
          {links.map((l) => (
            <Card
              hover
              as={Link}
              key={l.label}
              href={l.href}
              className="rounded-2xl p-4 sm:p-5 flex items-center justify-between hover:border-accent/40 hover:bg-surface-hover/50 hover:cursor-pointer transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <l.icon className="text-accent w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base font-semibold">
                  {l.label}
                </span>
              </div>
              <span className="text-muted group-hover:text-accent font-bold transition-colors">
                ↗
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
