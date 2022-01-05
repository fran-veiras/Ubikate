import { Box, Button, Container, Heading } from '@chakra-ui/react';
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
      <Heading variant="brand">📍 Ubikate</Heading>
      <Button variant="login">Login</Button>
    </Container>
  );
};
