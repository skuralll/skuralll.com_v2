import { Title, Text, createStyles, Stack } from "@mantine/core";
import { certification } from "@/config/profile";
import Section from "../utils/section";
import { IconCertificate } from "@tabler/icons-react";
import Link from "../utils/link";

const useStyles = createStyles((theme) => ({
  description: {
    color: theme.colors.gray[7],
  },
}));

export default function Certification() {
  const { classes, cx } = useStyles();

  return (
    <Section icon={IconCertificate} title="Certification">
      <Stack spacing="sm">
        {certification.map((item) => (
          <div key={item.name}>
            <Title order={4}>{item.name}</Title>
            <Text className={classes.description}>{item.date}</Text>
          </div>
        ))}
      </Stack>
    </Section>
  );
}
