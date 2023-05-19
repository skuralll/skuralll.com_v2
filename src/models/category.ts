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

export const STagNext: SkillTag = {
  name: "next.js",
  gradient: { from: "blue.7", to: "blue.3" },
};

export const STagTauri: SkillTag = {
  name: "tauri",
  gradient: { from: "blue", to: "yellow" },
};

export const StagBukkit: SkillTag = {
  name: "bukkit",
  gradient: { from: "teal", to: "lime", deg: 105 },
};

export const StagUnity: SkillTag = {
  name: "unity",
  gradient: { from: "gray.7", to: "gray.5" },
};
