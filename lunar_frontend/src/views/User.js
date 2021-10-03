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
import * as UserService from '../services/api.users';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myLogs: []
        };
    }

    componentDidMount() {
        UserService.getMyLogs().then(logs => {
            this.setState({ myLogs: logs });
        });
    }

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
                    <LogGrid logList={this.state.myLogs} />
                </Container>
                <Footer/>
            </Box>
        );
    }
}

export default User;