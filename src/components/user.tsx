import { Box, Image, Stack, Text, Title } from "@mantine/core";
import { User as UserModel } from "@/models/user";

// ユーザーのプロフィールを表示するコンポーネント
export default function User({ user }: { user: UserModel }) {
  return (
    <Box>
      <Image
        sx={{ margin: "auto" }}
        src="/images/profile.jpg"
        width={150}
        height={150}
        alt=""
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
        <Text sx={{ textAlign: "center", whiteSpace: "pre" }}>
          {user.description}
        </Text>
      </Stack>
    </Box>
  );
}
