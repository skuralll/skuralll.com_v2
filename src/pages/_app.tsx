import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { theme } from "@/components/app/theme";
import Content from "@/components/layout/content";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/hobby",
      label: "Hobby",
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
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </MantineProvider>
    </>
  );
}
