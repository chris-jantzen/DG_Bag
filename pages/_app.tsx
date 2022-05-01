import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import fetchJson from 'lib/fetchJson';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Theme from '../theme';

const theme = extendTheme(Theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <ChakraProvider theme={theme} resetCSS={true}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
