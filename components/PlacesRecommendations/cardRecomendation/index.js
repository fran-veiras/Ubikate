import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { HiWifi, HiLocationMarker, HiCash } from 'react-icons/hi';

export const CardRecomendation = ({ place }) => {
  return (
    <Flex gridGap={5}>
      <Box
        boxShadow="md"
        background="#fff"
        borderRadius="15px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
        display="flex"
        flexDir="row"
        gridGap={3}
      >
        <Icon
          color="fourth"
          width="1.3rem"
          height="1.3rem"
          as={HiLocationMarker}
        />
        <Text variant="paragraph">{place.name}</Text>
        <Text variant="paragraph">{place.location}</Text>
        <Text variant="paragraph">{place.type}</Text>
        <Text variant="paragraph" color="fourth">
          {place.price === 'consumición' || place.price === 'pago' ? (
            <Icon color="fourth" width="1.3rem" height="1.3rem" as={HiCash} />
          ) : (
            'no pago'
          )}
        </Text>
        <Icon color="fourth" width="1.3rem" height="1.3rem" as={HiWifi} />
      </Box>
    </Flex>
  );
};
