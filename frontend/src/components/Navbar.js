import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between" p={4} bg="teal.500" color="white">
      <Link to="/">
      <Text fontSize="2xl" fontWeight="bold" >
        Daily Goals
      </Text>
      </Link>
      <Box>
      <Link to="/login">
        <Button colorScheme="teal" variant="outline" mr={2} color="teal.900">
          Login
        </Button>
        </Link>
        <Link to="/signup">
        <Button colorScheme="teal"  variant="outline" mr={2} color="teal.900">Signup</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
