import React from 'react';
import {
    Box,
    Button,
    Container
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Menu from '../Shared/Menu';
import * as Url from '../../utils/util.url';

class Header extends React.Component {

    render() {
        return (
            <Box position={this.props.position ? this.props.position : "fixed"} w="100%" zIndex={1} backgroundColor="brand.primary">
                <Container
                    maxW="150ch"
                    py={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center">
                    <Button variant="ghost" fontSize="xl" as={Link} to={Url.ROOT}>
                        LunarLog
                    </Button>
                    <Menu />
                </Container>
            </Box>
        );
    }
}

export default Header;