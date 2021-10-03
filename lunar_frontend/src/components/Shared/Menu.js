import React from 'react';
import {
    Button,
    Menu,
    MenuButton,
    MenuGroup,
    MenuList,
    MenuItem,
    MenuDivider,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure
} from '@chakra-ui/react';
import LogCreateForm from './LogCreateForm';
import { Link } from 'react-router-dom';
import * as User from '../../utils/util.user';
import * as Url from '../../utils/util.url';

class HeaderMenu extends React.Component {
    render() {
        return (
            <Menu>
                <MenuButton
                    colorScheme="red"
                    as={Button}
                    fontSize="md"
                    mt={1}
                    variant="outline"
                    aria-label="Toggle theme">
                    Account
                </MenuButton>
                { User.isAuthenticated() ? <LoggedInMenu /> : <LoggedOutMenu /> }
            </Menu>
        );
    }
}

function LoggedInMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <MenuList>
            <MenuGroup title={User.getUsername()} fontSize="md" isTruncated>
                <MenuItem pl={4} as={Link} to={Url.MY_USER}>My Logs</MenuItem>
                <MenuItem pl={4}>Logout</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <Box m={4}>
                <MenuItem mt={2}
                    onClick={onOpen}
                    as={Button}
                    variant="solid"
                    bgColor="red.700">
                    New Log
                </MenuItem>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent pb={6}>
                <ModalHeader>Create New Log</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <LogCreateForm />
                </ModalBody>
                </ModalContent>
            </Modal>

        </MenuList>
    );
}

function LoggedOutMenu() {
    return (
        <MenuList>
            <MenuItem as={Link} to={Url.LOGIN}>Login</MenuItem>
            <MenuItem as={Link} to={Url.REGISTER}>Register</MenuItem>
        </MenuList>
    );
}

export default HeaderMenu;