import { createStyles } from "@mantine/core";
import { ReactNode } from "react";

const useStyles = createStyles((theme) => ({
  content: {
    width: "92%",
    maxWidth: "600px",
    margin: "0 auto",
  },
}));

export default function Content({ children }: { children: ReactNode }) {
  const { classes, cx } = useStyles();

  return <div className={classes.content}>{children}</div>;
}
