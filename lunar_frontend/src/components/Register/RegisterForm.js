import React from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import * as Url from '../../utils/util.url';

class RegisterForm extends React.Component {
    render() {
        return (
            <Box w="100%">
                <Stack spacing={4}>
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="username" focusBorderColor="brand.accent2" variant="filled" />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" focusBorderColor="brand.accent2" variant="filled" />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" focusBorderColor="brand.accent2" variant="filled" />
                </FormControl>
                <FormControl id="confirmPassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="confirmPassword" focusBorderColor="brand.accent2" variant="filled" />
                </FormControl>
                <Box />
                <Button fontWeight="bold" color="brand.primary" bg="brand.accent2">Register</Button>
                </Stack>
                <Text fontSize="lg" color="brand.tertiary" mt={4}>
                    Already have an account? <Text as={Link} to={Url.LOGIN} color="brand.highlight" fontWeight="semibold">Sign In</Text>
                </Text>
            </Box>
        );
    }
}

export default RegisterForm;