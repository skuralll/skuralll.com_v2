import { Center, Stack, Text, Title } from "@mantine/core";

export default function Maintenance() {
  return (
    <Center style={{ minHeight: "60vh" }}>
      <Stack align="center" spacing="md">
        <Text fz={64}>🚧</Text>
        <Title order={2}>メンテナンス中...</Title>
        <Text color="dimmed">新サイトを鋭意製作中です。</Text>
      </Stack>
    </Center>
  );
}
