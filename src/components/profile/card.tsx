import { IconCalendarTime, IconShare } from "@tabler/icons-react";
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
import { Profile } from "@/models/profile";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    width: rem(300),
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
export default function ProfileCard({ profile }: { profile: Profile }) {
  const { classes, cx, theme } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Link
          href="link"
          external={profile.isExternal}
          disable={profile.link === ""}
        >
          <Image src={profile.image} height={180} alt={profile.title} />
        </Link>
      </Card.Section>

      <Link
        href="link"
        external={profile.isExternal}
        disable={profile.link === ""}
      >
        <Text className={classes.title} fw={500}>
          {profile.title}
        </Text>
      </Link>

      <Text fz="sm" color="dimmed" lineClamp={4}>
        {profile.description}
      </Text>

      <Group position="apart" className={classes.footer}>
        <div />
        <Group spacing={0} mr={0}>
          <ActionIcon>
            <IconCalendarTime size="1rem" color={theme.colors.green[6]} />
          </ActionIcon>
          <Text fz="sm" color="dimmed" lineClamp={4}>
            {profile.date}
          </Text>
        </Group>
      </Group>
    </Card>
  );
}
