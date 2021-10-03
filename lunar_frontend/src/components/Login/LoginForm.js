import React from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Stack,
    Button,
    Text
} from '@chakra-ui/react';
import {
    useForm
} from "react-hook-form";
import { Link } from 'react-router-dom';
import * as Url from '../../utils/util.url';
import * as AuthService from '../../services/api.auth';

function LoginForm() {

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {
        
        return new Promise(resolve => {
            AuthService.postLogin(values.username, values.password)
                .then(user => {
                    window.location.replace(Url.ROOT);
                })
                .catch(errors => {
                    setError("username", { type: "server", message: errors.username || errors.non_field_errors[0] });
                    setError("password", { type: "server", message: errors.password || errors.non_field_errors[0] });
                })

            resolve();
        });
    }

    return (
        <Box w="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                <FormControl id="username" isInvalid={errors.username}>
                    <FormLabel>Username</FormLabel>
                    <Input
                        name="username"
                        type="username"
                        {...register("username", {
                            required: "This is required"
                        })}
                        focusBorderColor="brand.accent2" 
                        variant="filled"
                    />
                    <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                </FormControl>
                <FormControl id="password" isInvalid={errors.password}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        name="password"
                        type="password"
                        {...register("password", {
                            required: "This is required"
                        })}
                        focusBorderColor="brand.accent2" 
                        variant="filled"
                    />
                    <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                </FormControl>
                <Box />
                <Button isLoading={isSubmitting} type="submit" fontWeight="bold" color="brand.primary" bg="brand.accent2">Login</Button>
                </Stack>
                <Text fontSize="lg" color="brand.tertiary" mt={4}>
                    Don't have an account? <Text as={Link} to={Url.LOGIN} color="brand.highlight" fontWeight="semibold">Sign Up</Text>
                </Text>
            </form>
        </Box>
    );
}

export default LoginForm;