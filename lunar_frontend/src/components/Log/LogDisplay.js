import React, { useState } from 'react';
import { Flex, Box, Center, Text } from '@chakra-ui/react';

const LogDisplay = () => {
  return (
    <Center>
      <Flex
        direction="column"
        grow="1"
        color="brand.accent2"
        bg="brand.secondary"
      >
        <Flex grow="1" overflow="auto">
          <Flex direction="column" align="start" justify="end" px="3">
            <Flex my="1" direction="column">
              <Box rounded="md" py="1" py="2">
                Hello
              </Box>
              <Box rounded="md" py="1" py="2">
                <Text align-self="end">Wassup</Text>
              </Box>
              <Box rounded="md" py="1" py="2">
                <Text align-self="end">Wassup</Text>
              </Box>
              <Box rounded="md" py="1" py="2">
                <Text align-self="end">Wassup</Text>
              </Box>
              <Box rounded="md" py="1" py="2">
                <Text align-self="end">Wassup</Text>
              </Box>
              <Box rounded="md" py="1" py="2">
                <Text align-self="end">Wassup</Text>
              </Box>
              <Box rounded="md" py="1" py="2">
                <Text align-self="end">Wassup</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default LogDisplay;
