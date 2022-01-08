import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { themeApp } from '../styles/Theme/theme';
import { Provider } from 'react-redux';
import store from '../app/store';

function MyApp({ Component, pageProps }) {
  // importar el store y pasarlo como prop al provider

  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={themeApp}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
