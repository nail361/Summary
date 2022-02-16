import "../styles/globals.css";
import "../styles/reset.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
