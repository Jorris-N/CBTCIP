import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { useRouter } from 'next/router';
import Loader from '@/components/constants/navigation/loader'
import React, { useEffect, useState } from 'react';


import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async action (e.g., fetching data) and hide the spinner when it's done
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time according to your needs

    // When the component is mounted, subscribe to router changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleRouteChange = (url: string) => {
    // You can add your own logic for page view tracking here if needed
  };

  return (
    <ChakraProvider>
      <Global
        styles={css`
          // Add any global styles here
        `}
      />
      {loading ? (
        <Loader/>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}
