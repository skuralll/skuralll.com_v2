// SNSアカウントの情報を格納する型
export type Social = {
  name: string;
  url: string;
  img: string;
};

// 各種アカウントを格納する連想配列
export interface Socials {
  [index: string]: Social;
}
