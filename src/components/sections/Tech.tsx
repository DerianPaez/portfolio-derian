import { FaGitAlt, FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Card } from "@/components/Card";

export const Tech = () => {
  const techs = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Git", icon: FaGitAlt },
    { name: "Figma", icon: FaFigma },
    { name: "PostgreSQL", icon: SiPostgresql },
  ];
  return (
    <div id="stack" className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {techs.map((tItem) => (
        <Card
          hover
          key={tItem.name}
          className="rounded-2xl flex flex-col items-center justify-center p-6 sm:p-8 gap-4 hover:border-accent/40 hover:bg-surface-hover/60"
        >
          <tItem.icon className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
          <span className="text-xs sm:text-sm text-muted group-hover:text-accent font-medium transition-colors">
            {tItem.name}
          </span>
        </Card>
      ))}
    </div>
  );
};
