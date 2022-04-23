import Head from 'next/head';
import Header from 'components/Header';
import { Box } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Disc Storage</title>
      </Head>

      <Header />
      <Box
        as='main'
        w='100vw'
        maxW='100vw'
        h='calc(100vh - 50px)'
        maxH='calc(100vh - 50px)'
      >
        {children}
      </Box>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
          max-height: 100vh;
          max-width: 100vw;
          min-height: 100vh;
          min-width: 100vw;
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </>
  );
}
