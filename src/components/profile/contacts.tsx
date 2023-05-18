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
import { IconAddressBook, IconShare } from "@tabler/icons-react";
import Link from "../utils/link";

const useStyles = createStyles((theme) => ({}));

export default function Contacts() {
  const { classes, cx } = useStyles();

  return (
    <Section icon={IconAddressBook} title="Contacts">
      <Stack spacing="sm">
        {contacts.map((contact) => (
          <div key={contact.title}>
            <Link href="" external>
              <Title order={4}>{contact.title}</Title>
            </Link>
            <Text>{contact.description}</Text>
          </div>
        ))}
      </Stack>
    </Section>
  );
}
