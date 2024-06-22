import type { AppProps } from 'next/app';
import Head from 'next/head';

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/shared/components/GlobalStyle';
import DefaultLayout from '@/shared/layouts/DefaultLayout';
import theme from '@/shared/lib/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bold Dashboard</title>

        <meta name="description" content="Bold dashboard page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </HydrationBoundary>
          <ReactQueryDevtools initialIsOpen={false} position="right" />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
