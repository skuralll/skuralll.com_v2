import {
  Container,
  SimpleGrid,
  Grid,
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
import { contacts } from "@/config/profile";
import { group } from "console";
import ProfileCard from "@/components/profile/card";
import Section from "../utils/section";
import { IconAddressBook, IconShare } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  about: {
    // width: rem(512),
    // textAlign: "left",
  },

  title: {
    // borderLeft: `inset ${rem(5)}`,
    // paddingLeft: rem(10),
    // marginBottom: rem(20),
  },
}));

export default function Contacts() {
  const { classes, cx } = useStyles();

  return (
    <Section icon={IconAddressBook} title="Contacts">
      <div></div>
    </Section>
  );
}
