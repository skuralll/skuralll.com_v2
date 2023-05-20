import Head from "next/head";

// サイトに関する情報
import { siteMeta } from "@/config/site";
import { useRouter } from "next/router";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;

// 汎用OGP画像
import siteImg from "public/images/profile.png";

export default function Meta({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}: {
  pageTitle?: string;
  pageDesc?: string;
  pageImg?: string;
  pageImgW?: string | number;
  pageImgH?: string | number;
}) {
  // タイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  // 説明
  const desc = pageDesc ?? siteDesc;
  // ページのURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;
  // OGP画像
  const img = pageImg || siteImg.src;
  const imgW = pageImgW?.toString() || siteImg.width.toString();
  const imgH = pageImgH?.toString() || siteImg.height.toString();
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;

  return (
    <Head>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
