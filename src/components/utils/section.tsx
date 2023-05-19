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
  container: {
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing.xs,
    color: theme.colors.cyan[9],
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
}: {
  children: React.ReactNode;
  icon: React.ElementType;
  title: string;
}) {
  const { classes, cx } = useStyles();

  const Icon = icon;

  return (
    <Container pt="md" pb="lg" className={classes.container}>
      <Group spacing={rem(1)} className={classes.title}>
        <Icon size={28} />
        <Title order={2} className={classes.titleText}>
          {title}
        </Title>
      </Group>
      <Box>{children}</Box>
    </Container>
  );
}
