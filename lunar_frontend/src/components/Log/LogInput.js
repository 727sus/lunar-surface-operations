import React from 'react';
import {
  Box,
  Center,
  Input,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { ArrowUpIcon, PlusSquareIcon } from '@chakra-ui/icons';

const LogInput = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%" color="brand.secondary">
      <Flex>
        <Button bg="white" color="brand.accent2" onClick={onOpen}>
          <ArrowUpIcon />
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <PlusSquareIcon m="200" w={12} h={12} />
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Input placeholder="Enter log" color="brand.accent2" />
        <Button type="submit" color="brand.accent2">
          Send
        </Button>
      </Flex>
    </Box>
  );
};

export default LogInput;
