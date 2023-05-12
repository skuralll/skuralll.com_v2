import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
  Title,
  Center,
  Text,
  Paper,
  Group,
  List,
  createStyles,
  Space,
  Box,
  Card,
} from "@mantine/core";
import { profile } from "@/config/profile";
import { group } from "console";

const useStyles = createStyles((theme) => ({
  about: {
    width: rem(512),
  },

  title: {
    borderLeft: `inset ${rem(5)}`,
    paddingLeft: rem(10),
  },

  inner: {
    padding: rem(20),
  },

  profileGroup: {
    listStyle: "none",
  },

  profileItem: {
    paddingLeft: rem(20),
  },
}));

function Profile() {
  const { classes, cx } = useStyles();

  return (
    <>
      {profile.map((group) => {
        return (
          <span key={group.category}>
            <Text fz="md" c="gray.7">
              {group.category}
            </Text>
            <List className={classes.profileGroup}>
              {group.items.map((item) => {
                return (
                  <List.Item className={classes.profileItem} key={item}>
                    <Text fz="md" c="gray.7">
                      {"- " + item}
                    </Text>
                  </List.Item>
                );
              })}
            </List>
            <Space h="sm"></Space>
          </span>
        );
      })}
    </>
  );
}

export default function About() {
  const { classes, cx } = useStyles();

  return (
    <Container className={classes.about}>
      <Title order={2} className={classes.title}>
        About
      </Title>
      <Container className={classes.inner}>
        <Profile />
      </Container>
    </Container>
  );
}
