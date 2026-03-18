"use client";

import React, { useState } from "react";
import { FaBars, FaXmark, FaSun, FaMoon } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.stack"), href: "/#stack" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 sm:top-8 left-0 w-full z-50 px-4 sm:px-8">
        <div className="w-full flex justify-between items-center bg-nav backdrop-blur-xl border border-border-theme rounded-full py-2 px-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-background font-black text-lg shrink-0">
              D
            </div>
            <span className="font-bold tracking-tight text-foreground hidden sm:block">
              Derian Paez
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/60">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-accent transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center bg-surface rounded-full px-1 py-1">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === "en" ? "bg-surface-hover text-foreground" : "text-muted hover:text-accent"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === "es" ? "bg-surface-hover text-foreground" : "text-muted hover:text-accent"}`}
              >
                ES
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 bg-surface rounded-full border border-border-theme hover:bg-surface-hover transition-all hover:border-accent/30 group"
              aria-label="Toggle theme"
            >
              <span className="relative w-4 h-4 flex items-center justify-center">
                {theme === "dark" ? (
                  <FaSun className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                ) : (
                  <FaMoon className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                )}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-surface rounded-full border border-border-theme hover:bg-surface-hover transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaXmark className="w-4 h-4" />
              ) : (
                <FaBars className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[76px] sm:top-[88px] left-4 right-4 z-40 bg-nav backdrop-blur-xl border border-border-theme rounded-3xl p-6 shadow-2xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-base font-semibold text-muted hover:text-accent transition-colors border-b border-border-theme last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
