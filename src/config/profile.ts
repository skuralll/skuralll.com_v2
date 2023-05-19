import {
  STagNext,
  STagReact,
  STagTauri,
  StagBukkit,
  StagUnity,
} from "@/models/category";
import { Certification, Contact, Profile, Work } from "@/models/profile";
import { User } from "@/models/profile";

export const user: User = {
  name: "すくら",
  tag: "@skuralll",
  description: "情報系大学生",
};

export const certification: Certification[] = [
  {
    name: "基本情報技術者",
    date: "2022/10",
  },
  {
    name: "普通自動車第一種運転免許 (AT限定)",
    date: "2021/4",
  },
];

export const contacts: Contact[] = [
  {
    title: "GitHub",
    description: "制作物のソースコード等を公開しています。",
    url: "https://github.com/skuralll",
  },
  {
    title: "Scrapbox",
    description: "日々得た知見を書き溜めています。",
    url: "https://scrapbox.io/skuralllreport/",
  },
  {
    title: "Twitter",
    description: "たまに呟きます。",
    url: "https://twitter.com/skuralll_",
  },
  {
    title: "はてなブログ",
    description: "何か制作した時にブログを書きます。",
    url: "https://skuralll.hateblo.jp/",
  },
  {
    title: "メール",
    description: "SNSで連絡が取れない際はメールを送ってみてください。",
    url: "skuralll.com@gmail.com",
  },
];

// 画像ファイルは比率2:1で用意する
export const works: Work[] = [
  {
    img: "/images/sbot_tray.png",
    title: "SwitchBot-Tray",
    description: "SwitchBotをPCから操作",
    url: "https://github.com/skuralll/switchbot-tray",
    skills: [STagReact, STagTauri],
  },
  {
    img: "/images/dvault.png",
    title: "DepositVault",
    description: "Minecraftサーバーでチェストを保護",
    url: "https://github.com/skuralll/DepositVault",
    skills: [StagBukkit],
  },
  {
    img: "/images/skuralllcom.png",
    title: "skuralll.com",
    description: "個人サイト",
    url: "https://github.com/skuralll/skuralll.com_v2",
    skills: [STagNext],
  },
  {
    img: "/images/bmaster.png",
    title: "BalloonMaster",
    description: "Android用アクションゲームアプリ",
    url: "https://play.google.com/store/apps/details?id=com.skuralll.Balloon2",
    skills: [StagUnity],
  },
];
