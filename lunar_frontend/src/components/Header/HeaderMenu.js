import React from 'react';
import {
    Button,
    Menu,
    MenuButton,
    MenuGroup,
    MenuList,
    MenuItem,
    MenuDivider,
    Box
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import * as User from '../../utils/util.user';
import * as Url from '../../utils/util.url';

class HeaderMenu extends React.Component {
    render() {
        return (
            <Menu>
                <MenuButton
                    colorScheme={'red'}
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
    return (
        <MenuList>
            <MenuGroup title={User.getUsername()} fontSize="md" isTruncated>
                <MenuItem pl={4}>My Logs</MenuItem>
                <MenuItem pl={4}>Logout</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <Box m={4}>
                <MenuItem mt={2}
                    as={Button}
                    variant="solid"
                    bgColor={'red.700'}>
                    New Log
                </MenuItem>
            </Box>
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