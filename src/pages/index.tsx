import User from "@/components/profile/user";
import { Stack } from "@mantine/core";
import Contacts from "@/components/profile/contacts";

export default function Home() {
  return (
    <div>
      <Stack spacing="lg" mb="md">
        <User />
        {/* <Socials /> */}
        {/* <Divider variant="dotted" /> */}
        {/* <Certification /> */}
        <Contacts />
      </Stack>
    </div>
  );
}
