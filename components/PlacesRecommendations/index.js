import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { CardRecomendation } from './cardRecomendation';

export const Places = ({ places }) => {
  return (
    <Box my={20}>
      <Heading variant="subtitle">Recomendaciones de la comunidad.</Heading>
      <Flex my={10} gridGap={5} flexFlow="row wrap">
        {places.data.map((val) => (
          <CardRecomendation key={val.location} place={val} />
        ))}
      </Flex>
    </Box>
  );
};
