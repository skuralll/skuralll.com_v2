import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
  rem,
} from "@mantine/core";
import Link from "../utils/link";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    width: rem(256),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

// 資格一覧に使用するカード
export default function CertificationCard({
  image,
  title,
  description,
  date,
  link,
  external = true,
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
  external?: boolean;
}) {
  const { classes, cx, theme } = useStyles();
  const linkProps = {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Link href="link" external={external} disable={link === ""}>
          <Image src={image} height={180} alt={title} />
        </Link>
      </Card.Section>

      <Link href="link" external={external} disable={link === ""}>
        <Text className={classes.title} fw={500}>
          {title}
        </Text>
      </Link>

      <Text fz="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" className={classes.footer}>
        <div />
        <Text fz="sm" color="dimmed" lineClamp={4}>
          {date}
        </Text>
      </Group>
    </Card>
  );
}
