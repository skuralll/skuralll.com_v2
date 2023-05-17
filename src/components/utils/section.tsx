import { Box, Container, Flex, Group, Sx, Title, rem } from "@mantine/core";
import {
  IconAddressBook,
  IconShare,
  TablerIconsProps,
} from "@tabler/icons-react";
import React, { memo } from "react";

export default function Section({
  children,
  icon,
  title,
  sx,
}: {
  children: React.ReactNode;
  icon: React.ElementType;
  title: string;
  sx?: Sx;
}) {
  const Icon = icon;
  return (
    <Container pt="md" pb="lg">
      <Group
        spacing={rem(1)}
        sx={(theme) => ({
          textAlign: "center",
          marginBottom: theme.spacing.xs,
          color: "#3E4C5A",
        })}
      >
        <Icon size={28} />
        <Title
          order={2}
          sx={(theme) => ({
            textAlign: "center",
          })}
        >
          {title}
        </Title>
      </Group>
      <Box sx={sx}>{children}</Box>
    </Container>
  );
}
