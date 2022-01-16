import { Box, Button, Container, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const Header = () => {
  const route = useRouter();

  const addLocation = () => {
    route.push('/addPlace');
  };

  return (
    <Container
      background="#fff"
      py={3}
      my={4}
      borderRadius="15px"
      boxShadow="md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/">
        <Heading cursor="pointer" variant="brand">
          📍 Ubikate
        </Heading>
      </Link>
      <Box display="flex" gridGap="10px">
        <Button
          background="none"
          color="#EE407C"
          border="solid 2px #EE407C"
          variant="login"
          onClick={addLocation}
        >
          Agregar lugar
        </Button>
        <Button color="#fff" variant="login">
          Login
        </Button>
      </Box>
    </Container>
  );
};
