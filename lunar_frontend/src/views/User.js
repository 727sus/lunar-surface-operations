import React from 'react';
import { 
    Box,
    Heading,
    Container,
    Text
} from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LogGrid from '../components/Shared/LogGrid';

class User extends React.Component {
    render() {
        return (
            <Box minHeight="100vh" display="flex" flexDir="column">
                <Header />
                <Container maxW="150ch" mt={95} mb={20} flex={1}>
                    <Box textAlign="center">
                        <Heading as="h1" size="3xl">
                            My Logs
                        </Heading>
                        <Text fontSize="lg" fontWeight="semibold" mt={6}>
                            All my archived logs
                        </Text>
                    </Box>
                    <LogGrid />
                </Container>
                <Footer/>
            </Box>
        );
    }
}

export default User;