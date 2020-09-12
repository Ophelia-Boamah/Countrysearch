import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/core";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const index = () => {
  return (
    <Box
      w={{ md: "70%" }}
      mt={{ md: 40 }}
      mx="auto"
      textAlign="center"
      h="100vh"
    >
      <Heading mb={{ md: 10 }}>Search for countries below</Heading>
      <InputGroup w={{ md: "50%" }} mx="auto">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" placeholder="Type country name" />
      </InputGroup>

      <Button px={10} colorScheme="blue" mt={{ md: 10 }}>
        Search
      </Button>
    </Box>
  );
};

export default index;
