import { Group, Image } from "@mantine/core";
import Link from "@/components/utils/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

// ユーザーのプロフィールを表示するコンポーネント
export default function Socials() {
  return (
    <Group position="center">
      <Link href={"https://github.com/skuralll"} external>
        <FontAwesomeIcon
          icon={faGithub}
          style={{ fontSize: "36px", color: "black" }}
        />
      </Link>
      <Link href={"https://twitter.com/skuralll_"} external>
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ fontSize: "36px", color: "#009bf0" }}
        />
      </Link>
      <Link href={"https://scrapbox.io/skuralllreport/"} external>
        <Image
          src="/icons/scrapbox.svg"
          width={32}
          height={32}
          alt={"Scrapbox"}
          fit="contain"
        />
      </Link>
    </Group>
  );
}
