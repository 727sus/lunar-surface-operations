import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Text,
    Spacer,
    Image
} from '@chakra-ui/react';
import RoverSVG from '../../assets/images/rover.svg';

class LoginFormHeader extends React.Component {
    render() {
        return (
            <Flex mb={[8, 8, 8, 0]}>
                <Box>
                    <Heading as="h1" size="lg">
                        Login
                    </Heading>
                    <Text fontSize="lg" color="brand.tertiary" mt={3}>
                        Please sign in to continue
                    </Text>
                </Box>
                <Spacer />
                <Image zIndex={2} boxSize={['0px', '0px', '0px', "300px"]} src={RoverSVG} mt={-150} />
            </Flex>   
        );
    }
}

export default LoginFormHeader;