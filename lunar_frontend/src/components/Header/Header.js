import React from 'react';
import {
    Box,
    Button,
    Container
} from '@chakra-ui/react';
import HeaderMenu from './HeaderMenu'

class Header extends React.Component {
    render() {
        return (
            <Box position="fixed" w="100%" zIndex={1} backgroundColor={'gray.800'}>
                <Container
                    maxW="150ch"
                    py={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center">
                    <Button variant="ghost" fontSize="xl" onClick={scrollToTop}>
                        LunarLog
                    </Button>
                    <HeaderMenu />
                </Container>
            </Box>
        );
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default Header;