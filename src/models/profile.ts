// ユーザー情報を表す型
export type User = {
  name: string;
  tag: string;
  description: string;
};

// プロフィールを表す型
export type Profile = {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
  isExternal: boolean;
};

// 連絡先を表す型
export type Contact = {
  title: string;
  description: string;
  url: string;
};
