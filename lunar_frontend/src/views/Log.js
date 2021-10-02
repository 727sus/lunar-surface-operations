import React from 'react';
import { 
    Box,
    Container,
    Heading,
    Text,
    Flex
} from '@chakra-ui/react';
import LogHeader from '../components/Log/LogHeader';
import LogFilter from '../components/Log/Filter/LogFilter';

class Log extends React.Component {
    render() {
        return (

            <Flex height="100vh" flexDirection="column">
                <Flex h="100%" flexDirection="row">
                    <Box flex={4} h="100%" backgroundColor="gray.800">
                        <LogFilter  />
                    </Box> 
                    <Box flex={20} h="100%" backgroundColor="gray.900">
                        <LogHeader />
                    </Box> 
                </Flex>
            </Flex>
        );
    }
}

export default Log;