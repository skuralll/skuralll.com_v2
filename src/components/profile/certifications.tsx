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
import { certifications } from "@/config/profile";
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

export default function Certification() {
  const { classes, cx } = useStyles();

  return (
    <Container className={classes.about}>
      <Title fw={500} order={2} className={classes.title}>
        Certifications
      </Title>
      <Grid className={classes.grid}>
        {certifications.map((certification) => (
          <ProfileCard profile={certification} key={certification.title} />
        ))}
      </Grid>
    </Container>
  );
}
