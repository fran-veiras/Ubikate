import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { themeApp } from '../styles/Theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={themeApp}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
