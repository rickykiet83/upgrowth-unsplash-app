import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/custom.scss';

import type { AppProps } from 'next/app';
import { FavoritesContextProvider } from 'store/favorites-context';
import Head from 'next/head';
import Layout from '@components/layout/layout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoritesContextProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </FavoritesContextProvider>
  );
}
export default MyApp;
