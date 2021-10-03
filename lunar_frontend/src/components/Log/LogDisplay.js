import React, { useState } from 'react';
import { Flex, Box, Center, Spacer } from '@chakra-ui/react';

const LogDisplay = () => {
  return (
    <Box>
      <Flex
        direction="column"
        grow="1"
        color="brand.accent2"
        bg="brand.secondary"
        align="end"
        h="87.5vh"
        overflow="auto"
      >
        <Flex grow="1">
          <Flex direction="column" align="start" justify="end" px="3">
            <Flex my="1" direction="column" alignSelf="end" alignItems="end">
              <Box rounded="sm" bg="brand.accent1" color="black">
                Requesting for help
              </Box>
              <Box textAlign={['right']}>You</Box>
            </Flex>

            <Flex my="1" direction="column" alignSelf="end" alignItems="end">
              <Box rounded="sm" bg="brand.accent2" color="black">
                God damn it
              </Box>
              <Box textAlign={['right']}>Control Center</Box>
            </Flex>

            <Flex my="1" direction="column" alignSelf="end" alignItems="end">
              <Box rounded="sm" bg="brand.accent1" color="black">
                Nope
              </Box>
              <Box textAlign={['right']}>You</Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LogDisplay;
