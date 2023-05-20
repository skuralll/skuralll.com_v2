import User from "@/components/profile/user";
import { Stack, createStyles } from "@mantine/core";
import Contacts from "@/components/profile/contacts";
import Works from "@/components/profile/works";
import Content from "@/components/layout/content";
import Certification from "@/components/profile/certification";
import Meta from "@/components/app/meta";

export default function Home() {
  return (
    <Content>
      <Meta />
      <Stack spacing="lg" mb="md">
        <User />
        {/* <Socials /> */}
        {/* <Divider variant="dotted" /> */}
        {/* <Certification /> */}
        <Works />
        <Certification />
        <Contacts />
      </Stack>
    </Content>
  );
}
