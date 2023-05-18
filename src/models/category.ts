import { MantineGradient } from "@mantine/core";
import { IconZzz } from "@tabler/icons-react";

// スキルタグ
export type SkillTag = {
  name: string;
  gradient: MantineGradient;
};
export const STagReact: SkillTag = {
  name: "react",
  gradient: { from: "indigo", to: "cyan" },
};
