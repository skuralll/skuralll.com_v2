import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import User from "@/components/user";
import { User as UserModel } from "@/models/user";
import { user } from "@/config/user";
import Socials from "@/components/socials";
import { Stack } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Stack spacing="lg" mb="md">
        <User user={user} />
        <Socials />
      </Stack>
    </>
  );
}
