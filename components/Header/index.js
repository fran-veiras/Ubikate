import { Box, Button, Container, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
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
      <Button variant="login">Login</Button>
    </Container>
  );
};
