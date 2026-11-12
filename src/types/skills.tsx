import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export interface Skill {
  name: string;
  icons: IconType;
}

export const skills: Skill[] = [
  { name: "JavaScript", icons: SiJavascript },
  { name: "TypeScript", icons: SiTypescript },
  { name: "React", icons: SiReact },
  { name: "Next", icons: SiNextdotjs },
];


