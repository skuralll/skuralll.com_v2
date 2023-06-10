import Meta from "@/components/app/meta";
import Game from "@/components/hobby/game";
import { Center, Stack, Title } from "@mantine/core";
import Script from "next/script";

export default function Hobby() {
  return (
    <>
      <Meta pageTitle="skuralll.com | Hobby" pageDesc="趣味など" />
      <Center>
        <Title order={2}>Hobby</Title>
      </Center>
      <Stack spacing="lg" mb="md">
        <Game />
      </Stack>
    </>
  );
}
