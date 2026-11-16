import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

// [MARK: Enhanced Skill Interface with brand color support for modern UI]
export interface Skill {
  name: string;
  icons: IconType;
  color?: string;
  category?: "Frontend" | "Backend" | "DevOps & Tools";
}

// [MARK: Original layout skills preserved, enriched with Chia's full stack mentioned in About]
export const skills: Skill[] = [
  { name: "JavaScript", icons: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icons: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "React", icons: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next", icons: SiNextdotjs, color: "#FFFFFF", category: "Frontend" },
  { name: "Tailwind CSS", icons: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Express.JS", icons: SiExpress, color: "#E2E8F0", category: "Backend" },
  { name: "Nest.JS", icons: SiNestjs, color: "#E0234E", category: "Backend" },
  { name: "PostgreSQL", icons: SiPostgresql, color: "#4169E1", category: "Backend" },
  { name: "PHP", icons: SiPhp, color: "#777BB4", category: "Backend" },
  { name: "Laravel", icons: SiLaravel, color: "#FF2D20", category: "Backend" },
  { name: "Docker", icons: SiDocker, color: "#2496ED", category: "DevOps & Tools" },
  { name: "Git", icons: SiGit, color: "#F05032", category: "DevOps & Tools" },
];
