// src/pages/HomePage.js

import React from 'react';
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <VStack spacing={8} mt={8}>
      <Heading>Welcome to Movie Booking System</Heading>
      <Text>Book your favorite movies easily and quickly.</Text>
      <Box>
        <Link to="/movies">
          <Button colorScheme="teal">View Movies</Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default HomePage;
