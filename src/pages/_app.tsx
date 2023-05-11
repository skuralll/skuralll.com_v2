import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { theme } from "@/components/theme";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const links = [
    {
      link: "/",
      label: "Home",
    },
  ];

  return (
    <>
      <Head>
        <title>skuralll.com</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Header links={links} />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  );
}
