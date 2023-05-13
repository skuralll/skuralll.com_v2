import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import User from "@/components/user";
import { User as UserModel } from "@/models/user";
import { user } from "@/config/user";
import Socials from "@/components/socials";
import { Divider, Stack, createStyles } from "@mantine/core";
import About from "@/components/about";

export default function Home() {
  return (
    <div>
      <Stack spacing="lg" mb="md">
        <User user={user} />
        <Socials />
        <Divider variant="dotted" />
        <About />
      </Stack>
    </div>
  );
}
