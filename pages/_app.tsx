/* eslint-disable @next/next/no-css-tags */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../react-query-config/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import '../styles/loader.css';
import '../styles/tailwind.css';
import { CoinProvider } from 'context/CoinProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <title>Houm Challenge</title>
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
            </Head>
            <QueryClientProvider client={queryClient}>
                <CoinProvider>
                    <Component {...pageProps} />
                </CoinProvider>
                {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
