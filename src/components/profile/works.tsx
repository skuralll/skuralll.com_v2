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
  Stack,
} from "@mantine/core";
import { contacts } from "@/config/profile";
import { group } from "console";
import ProfileCard from "@/components/profile/card";
import Section from "../utils/section";
import { IconPalette, IconShare } from "@tabler/icons-react";
import Link from "../utils/link";

const useStyles = createStyles((theme) => ({}));

export default function Works() {
  const { classes, cx } = useStyles();

  return (
    <Section icon={IconPalette} title="Works">
      <Grid>
        <Grid.Col span="auto" sx={{ backgroundColor: "red" }}>
          span=auto
        </Grid.Col>
        <Grid.Col span="auto" sx={{ backgroundColor: "blue" }}>
          span=6
        </Grid.Col>
        <Grid.Col span="auto" sx={{ backgroundColor: "yellow" }}>
          span=auto
        </Grid.Col>
      </Grid>
    </Section>
  );
}