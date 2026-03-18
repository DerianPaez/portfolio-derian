"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "es";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    // Hero
    "hero.available": "Available for work",
    "hero.name": "Derian Paez",
    "hero.title": "Frontend Developer",
    "hero.desc":
      "Specialized in building scalable, high-performance web applications with React & Next.js.",
    "hero.viewWork": "View Work",
    "hero.downloadCv": "Download CV",
    // About
    "about.title": "About Me",
    "about.greeting": "Hi, I'm Derian",
    "about.desc":
      "With +2 years of experience crafting digital solutions, I focus on scalability and user experience. Currently in my 10th semester of Software Engineering at Universidad de Guayaquil.",
    "about.years": "+2 years of experience",
    "about.location.title": "Location",
    "about.location.desc": "Guayaquil, Ecuador",
    "about.education.title": "Education",
    "about.education.desc": "Software Engineering - Universidad de Guayaquil",
    // Tech & Dividers
    "tech.title": "Technologies",
    "projects.title": "Projects",
    "contact.divider": "Contact me",
    // Projects
    "proj1.title": "TaskMaster Pro",
    "proj1.desc":
      "A modern web dashboard UI mockup for task management, sleek dark mode with modern accents.",
    "proj2.title": "CryptoFlow Dashboard",
    "proj2.desc":
      "High quality finance and crypto tracking dashboard with neon green and blue accents.",
    "proj3.title": "Portfolio Template",
    "proj3.desc":
      "A minimal, responsive portfolio framework with Bento Grid layouts, Framer Motion, and Next.js.",
    "proj4.title": "Finance Analytics",
    "proj4.desc": "A finance web app with dark minimal charts and analytics.",
    "proj5.title": "AI Chatbot UI",
    "proj5.desc":
      "An intelligent AI conversation interface designed with premium dark themes.",
    "proj6.title": "Health Booking App",
    "proj6.desc":
      "A smooth mobile layout for medical appointments and scheduling.",
    "projects.viewMore": "View all projects",
    "projectsPage.title": "All Projects",
    "projectsPage.desc": "A list of all my latest work and case studies.",
    "projectsPage.back": "Back to Home",
    // Contact
    "contact.title": "Contact Me",
    "contact.sendMsg.title": "Send a message",
    "contact.sendMsg.desc":
      "Fill out the form and I'll get back to you as soon as possible.",
    "contact.connect.title": "Connect with me",
    "contact.connect.desc": "You can also find me on these platforms.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    // Footer
    "footer.rights": "© 2026 Derian Paez. All rights reserved.",
    "footer.built.suffix": "Built in Guayaquil, Ecuador",
  },
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.stack": "Tecnologías",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    // Hero
    "hero.available": "Disponible para trabajar",
    "hero.name": "Derian Paez",
    "hero.title": "Desarrollador Frontend",
    "hero.desc":
      "Especializado en construir aplicaciones web escalables y de alto rendimiento con React y Next.js.",
    "hero.viewWork": "Ver trabajo",
    "hero.downloadCv": "Descargar CV",
    // About
    "about.title": "Sobre mí",
    "about.greeting": "Hola, soy Derian",
    "about.desc":
      "Con más de 2 años de experiencia creando soluciones digitales, me enfoco en la escalabilidad y la experiencia de usuario. Actualmente en mi décimo semestre de Ingeniería de Software en la Universidad de Guayaquil.",
    "about.years": "+2 años de experiencia",
    "about.location.title": "Ubicación",
    "about.location.desc": "Guayaquil, Ecuador",
    "about.education.title": "Educación",
    "about.education.desc": "Ing. Software - Universidad de Guayaquil",
    // Tech & Dividers
    "tech.title": "Tecnologías",
    "projects.title": "Proyectos",
    "contact.divider": "Contáctame",
    // Projects
    "proj1.title": "TaskMaster Pro",
    "proj1.desc":
      "Un moderno dashboard UI para gestión de tareas, con modo oscuro elegante y acentos en tonos modernos.",
    "proj2.title": "CryptoFlow Dashboard",
    "proj2.desc":
      "Dashboard de alta calidad para finanzas y seguimiento de criptomonedas con acentos en verde neon y azul.",
    "proj3.title": "Portfolio Template",
    "proj3.desc":
      "Un framework de portafolio minimal y responsive con layouts Bento Grid, Framer Motion y Next.js.",
    "proj4.title": "Finance Analytics",
    "proj4.desc":
      "Una aplicación web financiera con gráficos minimalistas y analíticas oscuras.",
    "proj5.title": "AI Chatbot UI",
    "proj5.desc":
      "Una interfaz de conversación inteligente con IA, diseñada con temas oscuros premium.",
    "proj6.title": "Health Booking App",
    "proj6.desc": "Un diseño móvil fluido para citas médicas y agendamiento.",
    "projects.viewMore": "Ver todos los proyectos",
    "projectsPage.title": "Todos los Proyectos",
    "projectsPage.desc":
      "Una lista detallada de mis últimos trabajos y casos de estudio.",
    "projectsPage.back": "Volver al Inicio",
    // Contact
    "contact.title": "Contáctame",
    "contact.sendMsg.title": "Enviar un mensaje",
    "contact.sendMsg.desc":
      "Completar el formulario y te responderé lo antes posible.",
    "contact.connect.title": "Conecta conmigo",
    "contact.connect.desc": "También me puedes encontrar en estas plataformas.",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "Enviar",
    // Footer
    "footer.rights": "© 2026 Derian Paez. Todos los derechos reservados.",
    "footer.built.suffix": " Hecho en Guayaquil, Ecuador",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return (translations[lang] as Record<string, string>)[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
