import { Box, Image, Stack, Text, Title, createStyles } from "@mantine/core";
import { User as UserModel } from "@/models/user";

const useStyles = createStyles((theme) => ({
  avatar: {
    backgroundColor: "#FF9670",
    borderRadius: "100%",
  },
}));

// ユーザーのプロフィールを表示するコンポーネント
export default function User({ user }: { user: UserModel }) {
  const { classes, cx } = useStyles();

  return (
    <Box>
      <Image
        sx={{ margin: "auto" }}
        src="/images/profile.png"
        width={125}
        height={125}
        alt=""
        className={classes.avatar}
      />
      <Stack align="center" spacing="sm">
        <Box sx={{ textAlign: "center" }}>
          <Title order={2} weight="normal">
            {user.name}
          </Title>
          <Text size="lg" color="gray">
            {user.tag}
          </Text>
        </Box>
        {/* <Text sx={{ textAlign: "center", whiteSpace: "pre" }}>
          {user.description}
        </Text> */}
      </Stack>
    </Box>
  );
}
