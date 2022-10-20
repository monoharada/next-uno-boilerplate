import "@unocss/reset/tailwind.css";
import "uno.css";
import "@/styles/root.css";

import type { AppPropsWithLayout } from "next/app";

import { Layout } from "@/components/layout/Layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
