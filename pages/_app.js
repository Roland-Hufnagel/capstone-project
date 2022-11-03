import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
export default MyApp;
