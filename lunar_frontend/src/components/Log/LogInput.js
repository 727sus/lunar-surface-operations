import React from 'react';
import { Box, Center, Input, Button, Flex } from '@chakra-ui/react';

class LogInput extends React.Component {
  render() {
    return (
      <Center>
        <Box w="100%" color="brand.secondary">
          <Flex>
            <Input placeholder="Enter log" color="brand.accent2" />
            <Button type="submit" color="brand.accent2">
              Send
            </Button>
          </Flex>
        </Box>
      </Center>
    );
  }
}

export default LogInput;
