import { Work } from "@/models/profile";
import {
  SimpleGrid,
  rem,
  Title,
  Text,
  Group,
  createStyles,
  Image,
  Badge,
  AspectRatio,
} from "@mantine/core";
import Link from "../utils/link";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    width: "fit-content",
  },
  img: {
    marginBottom: rem(7),
  },
  badges: {
    position: "absolute",
    top: "3%",
    right: "3%",
    pointerEvents: "none",
  },
  description: {
    color: theme.colors.gray[7],
  },
}));

// "https://picsum.photos/332/166"

export default function WorkCard({ work }: { work: Work }) {
  const { classes, cx } = useStyles();

  return (
    <Link href={work.url} external>
      <div className={classes.root}>
        <Image
          maw={332}
          mx="0px"
          radius="md"
          src={work.img}
          alt={work.title}
          className={classes.img}
        />
        <Group spacing="xs" className={classes.badges}>
          {work.skills.map((skill) => (
            <Badge
              size="md"
              variant="gradient"
              gradient={skill.gradient}
              key={skill.name}
            >
              {skill.name}
            </Badge>
          ))}
        </Group>
        <Title order={4}>{work.title}</Title>
        <Text fz="sm" className={classes.description}>
          {work.description}
        </Text>
      </div>
    </Link>
  );
}
