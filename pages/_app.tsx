import type { AppProps } from 'next/app';

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import GlobalStyle from '@/shared/components/GlobalStyle';

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
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
        <ReactQueryDevtools initialIsOpen={false} position="right" />
      </QueryClientProvider>
    </>
  );
}
