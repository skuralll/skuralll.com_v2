import { Contact, Profile } from "@/models/profile";
import { User } from "@/models/profile";

export const user: User = {
  name: "すくら",
  tag: "@skuralll",
  description: "情報系大学生",
};

export const certifications: Profile[] = [
  {
    image:
      "https://cdn.pixabay.com/photo/2021/01/05/16/26/laptop-5891723_960_720.jpg",
    title: "基本情報技術者",
    description: "ITに関する基本知識を身につけています。",
    date: "2022/10",
    link: "",
    isExternal: false,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/08/17/10/04/traffic-3612474_960_720.jpg",
    title: "普通自動車第一種運転免許 (AT限定)",
    description: "自動車の運転ができます。",
    date: "2021/4",
    link: "",
    isExternal: false,
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
