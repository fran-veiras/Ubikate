import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Front = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gridGap={12} my={20}>
        <Box>
          <Heading variant="super">¿Que es</Heading>
          <Heading variant="super">Ubikate?</Heading>
        </Box>
        <Box>
          <Text variant="paragraph">
            Ubikate tiene la finalidad de ayudar a programadores y estudiantes a
            ubicarse en la hermosa ciudad de Buenos Aires, en entorno públicos y
            privados. Animate a cambiar de ambiente.
          </Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gridGap={12}>
        <Box flex="1">
          <Text variant="paragraph" textAlign="end">
            ¡Obviooo! De hecho esta aplicación esta hecha para que la comunidad
            de estudiantes se nutra de las experiencias ajenas. Tenes un lugar
            para recomendar, te logeas con google o github y lo marcas.
          </Text>
        </Box>
        <Box flex="1">
          <Heading variant="super">¿Se puede</Heading>
          <Heading variant="super">ayudar?</Heading>
        </Box>
      </Box>
    </>
  );
};
