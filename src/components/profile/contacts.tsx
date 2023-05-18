import { Title, Text, createStyles, Stack } from "@mantine/core";
import { contacts } from "@/config/profile";
import Section from "../utils/section";
import { IconAddressBook } from "@tabler/icons-react";
import Link from "../utils/link";

const useStyles = createStyles((theme) => ({
  description: {
    color: theme.colors.gray[7],
  },
}));

export default function Contacts() {
  const { classes, cx } = useStyles();

  return (
    <Section icon={IconAddressBook} title="Contacts">
      <Stack spacing="sm">
        {contacts.map((contact) => (
          <div key={contact.title}>
            <Link href={contact.url} external>
              <Title order={4}>{contact.title}</Title>
            </Link>
            <Text className={classes.description}>{contact.description}</Text>
          </div>
        ))}
      </Stack>
    </Section>
  );
}
