import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { CardRecomendation } from './cardRecomendation';

export const Places = ({ places }) => {
  return (
    <Box my={20}>
      <Heading variant="subtitle">Recomendaciones de la comunidad.</Heading>
      <CardRecomendation />
    </Box>
  );
};
