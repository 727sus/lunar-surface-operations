import React from 'react';
import {
  Box,
  Center,
  Input,
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { ArrowUpIcon, PlusSquareIcon } from '@chakra-ui/icons';

import { useDropzone } from 'react-dropzone';

const LogInput = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}-{file.size} bytes
    </li>
  ));

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
                <Flex direction="column">
                  <section className="container">
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <PlusSquareIcon m="200" w={12} h={12} />
                      <Text padding="4">
                        Drag 'n' drop some files here, or click to select files
                      </Text>
                      <Text padding="4">Files: </Text>
                      <Text padding="4">{files}</Text>
                    </div>
                  </section>
                </Flex>
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
