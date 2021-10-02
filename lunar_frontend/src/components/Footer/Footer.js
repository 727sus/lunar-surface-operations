import React from 'react';
import {
    Box,
    Text,
    Center,
    Flex
} from '@chakra-ui/react';
import gradient from '../../assets/styles/gradient.module.css'

class Footer extends React.Component {
    render() {
        return (
            <Box w="100%">
                <Center>
                    <Flex direction={['column', 'row']} mx={8} alignItems="center">
                        <Text fontSize="md">
                            NASA SpaceApps Challenge&nbsp;
                        </Text>
                        <Text fontSize="md">
                            © 2021
                        </Text>
                    </Flex>
                </Center>
                <Box w="100%" h={1} mt={8} className={gradient.background} />
            </Box>
        );
    }
}

export default Footer;