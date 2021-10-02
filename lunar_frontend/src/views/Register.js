import React from 'react';
import {
    Box,
    Container
} from '@chakra-ui/react';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterFormHeader from '../components/Register/RegisterFormHeader';
import Header from '../components/Header/Header';

class Register extends React.Component {
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
                        <RegisterFormHeader />
                        <RegisterForm />
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default Register;