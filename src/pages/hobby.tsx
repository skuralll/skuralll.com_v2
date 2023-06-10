import Meta from "@/components/app/meta";
import Game from "@/components/hobby/game";
import { Center, Stack } from "@mantine/core";
import Script from "next/script";

export default function Hobby() {
  return (
    <>
      <Meta pageTitle="skuralll.com | Hobby" pageDesc="趣味など" />
      <Stack spacing="lg" mb="md">
        <Game />
      </Stack>
    </>
  );
}
