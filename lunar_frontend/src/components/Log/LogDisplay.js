import React, { useState } from 'react';
import { Flex, Box, Center, Text } from '@chakra-ui/react';

const LogDisplay = () => {
  const message = { fromMe: true, text: 'Hello' };
  return (
    <Center>
      <Flex direction="column" grow="1" color="brand.accent2" bg="white">
        <Flex grow="1" overflow="auto">
          <Flex direction="column" align="start" justify="end" px="3">
            <Flex my="1" direction="column" alignSelf="end" alignItems="end">
              <div
                className={`rounded px-2 py-1 ${
                  message.fromMe ? 'bg-primary text-white' : 'border'
                }`}
              >
                {message.text}
              </div>
              <div
                className={`text-muted small ${
                  message.fromMe ? 'text-right' : ''
                }`}
              >
                {message.fromMe ? 'You' : message.senderName}
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default LogDisplay;
