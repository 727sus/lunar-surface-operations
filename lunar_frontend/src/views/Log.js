import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import LogInput from '../components/Log/LogInput';
import LogDisplay from '../components/Log/LogDisplay';

class Log extends React.Component {
  render() {
    return (
      <Center>
        <Box w="80%" pos="bottom">
          <LogDisplay />
          <LogInput />
        </Box>
      </Center>
    );
  }
}

export default Log;
