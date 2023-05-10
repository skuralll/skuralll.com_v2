import { Socials as SocialsModel } from "@/models/social";
import { Group, Image } from "@mantine/core";
import Link from "@/components/link";

// ユーザーのプロフィールを表示するコンポーネント
export default function Socials({ socials }: { socials: SocialsModel }) {
  return (
    <Group position="center">
      {Object.entries(socials).map(([, social]) => (
        <Link key={social.name} href={social.url} external>
          <Image src={social.img} width={40} height={40} alt={social.name} />
        </Link>
      ))}
    </Group>
  );
}
