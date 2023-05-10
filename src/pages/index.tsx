import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import User from "@/components/user";
import { User as UserModel } from "@/models/user";
import { user } from "@/config/user";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <User user={user} />
    </>
  );
}
