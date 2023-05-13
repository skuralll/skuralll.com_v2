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
import ArticleCard from "@/components/card";
import { ArticleCardProps } from "@/components/card";

const useStyles = createStyles((theme) => ({
  about: {
    width: rem(512),
  },

  title: {
    borderLeft: `inset ${rem(5)}`,
    paddingLeft: rem(10),
    marginBottom: rem(20),
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

  const cardProps: ArticleCardProps = {
    image: "https://i.imgur.com/Cij5vdL.png",
    link: "https://mantine.dev/",
    title: "IPA 基本情報技術者",
    rating: "",
    description: "ITに関する基本知識を身につけています",
    author: {
      name: "Bill Wormeater",
      image:
        "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  };

  return (
    <Container className={classes.about}>
      <Title fw={500} order={2} className={classes.title}>
        About
      </Title>
      {/* <Container className={classes.inner}>
        <Profile />
      </Container> */}
      <ArticleCard {...cardProps} />
    </Container>
  );
}
