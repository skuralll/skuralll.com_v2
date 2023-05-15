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

const useStyles = createStyles((theme) => ({
  about: {
    // width: rem(512),
  },

  title: {
    borderLeft: `inset ${rem(5)}`,
    paddingLeft: rem(10),
    marginBottom: rem(20),
  },

  grid: {
    gap: rem(12),
  },
}));

export default function SNS() {
  const { classes, cx } = useStyles();

  return (
    <Container className={classes.about}>
      <Title fw={500} order={2} className={classes.title}>
        Contacts
      </Title>
      <Grid className={classes.grid}>
        {contacts.map((contact) => (
          <ProfileCard profile={contact} key={contact.title} />
        ))}
      </Grid>
    </Container>
  );
}
