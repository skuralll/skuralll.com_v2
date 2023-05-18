import {
  Box,
  Container,
  Group,
  Sx,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: "center",
    marginBottom: theme.spacing.xs,
    color: "#3E4C5A",
  },
  titleText: {
    textAlign: "center",
    fontWeight: "bold",
  },
}));

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
  const { classes, cx } = useStyles();

  const Icon = icon;

  return (
    <Container pt="md" pb="lg">
      <Group spacing={rem(1)} className={classes.title}>
        <Icon size={28} />
        <Title order={2} className={classes.titleText}>
          {title}
        </Title>
      </Group>
      <Box sx={sx}>{children}</Box>
    </Container>
  );
}
