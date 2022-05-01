/* eslint-disable */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';



const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <title>NextJS</title>
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
