import { extendTheme } from '@chakra-ui/react';
import { ContainerComponent as Container } from '../../components/styles/ContainerStyles';
import { HeadingComponent as Heading } from '../../components/styles/HeadingStyles';
import { ButtonStyles as Button } from '../../components/styles/ButtonStyles';
import { TextComponent as Text } from '../../components/styles/TextStyles';

export const themeApp = extendTheme({
  colors: {
    text: '#171010',
    primary: '#5D001E',
    secondary: '#E3E2DF',
    tertiary: '#E3AFBC',
    details: '#9A1750',
    fourth: '#EE407C',
    gray: 'gray.200',
  },
  styles: {
    global: {
      body: {
        bg: '#E3E2DF',
      },
    },
  },
  components: {
    Container,
    Heading,
    Button,
    Text,
  },
});
