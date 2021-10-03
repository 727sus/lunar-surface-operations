import React from 'react';
import {
    Box,
    Container
} from '@chakra-ui/react';
import LoginForm from '../components/Login/LoginForm';
import LoginFormHeader from '../components/Login/LoginFormHeader';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class Login extends React.Component {
    render() {
        return (
            <Box minHeight="100vh" display="flex" flexDir="column">
                <Header />
                <Container maxW="maxWidth" mt={[95, 200]} mb={20} flex={1}>
                    <Box
                        rounded={'lg'}
                        borderWidth={2}
                        boxShadow={'lg'}
                        p={[4, 4, 8]}
                        mx={[0, 0, 48]}
                    >
                        <LoginFormHeader />
                        <LoginForm />
                    </Box>
                </Container>
                <Footer />
            </Box>
        );
    }
}

export default Login;