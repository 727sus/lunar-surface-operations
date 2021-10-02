import React from 'react';
import { 
    Box,
    Heading,
    SimpleGrid,
    Container,
    Text
} from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LogCard from '../components/Home/LogCard';

class Home extends React.Component {
    render() {
        return (
            <Box minHeight="100vh" display="flex" flexDir="column">
                <Header />
                <Container maxW="150ch" mt={95} mb={20} flex={1}>
                    <Box textAlign="center">
                        <Heading as="h1" size="3xl">
                            Log Lobby
                        </Heading>
                        <Text fontSize="lg" fontWeight="semibold" mt={6}>
                            All currently active logs
                        </Text>
                    </Box>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                        <LogCard />
                    </SimpleGrid>
                </Container>
                <Footer/>
            </Box>
        );
    }
}

export default Home;