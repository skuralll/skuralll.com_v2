import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  Image,
  Text,
} from "@mantine/core";
import Link from "@/components/utils/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  // inner: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingTop: theme.spacing.xl,
  //   paddingBottom: theme.spacing.xl,

  //   [theme.fn.smallerThan("xs")]: {
  //     flexDirection: "column",
  //   },
  // },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  legends: {
    marginBottom: rem(10),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

// フッター
export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* 説明 */}
        <Container className={classes.legends}>
          <Text fz="md" c="gray.7">
            © 2023 skuralll
          </Text>

          <Link href={"https://github.com/skuralll/skuralll.com_v2"} external>
            View on GitHub
          </Link>
        </Container>
        {/* アクセスカウンタ */}
        <Link href={"https://moe-counter-cf.yude.workers.dev/"} external>
          <img
            src="https://moe-counter-cf.yude.workers.dev/skuralll"
            alt=""
            width={315}
            height={100}
            loading="lazy"
          />
        </Link>
      </Container>
    </div>
  );
}
