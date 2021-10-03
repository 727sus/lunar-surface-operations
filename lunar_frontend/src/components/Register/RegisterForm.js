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

function RegisterForm() {

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {

        if(values.password != values.confirmPassword) {
            setError("password", { type: "client", message: "Passwords don't match"});
            setError("confirmPassword", { type: "client", message: "Passwords don't match"});
            return;
        }
        
        return new Promise(resolve => {
            AuthService.postRegistration(values.username, values.email, values.password, values.confirmPassword)
            .then(user => {
                window.location.replace(Url.ROOT);
            })
            .catch(errors => {
                if(errors.username) { setError("username", { type: "server", message: errors.username }); }
                if(errors.email) { setError("email", { type: "server", message: errors.email }); }
                if(errors.password1) { setError("password", { type: "server", message: errors.password1 }); }
                if(errors.password2) { setError("confirmPassword", { type: "server", message: errors.password2 }); }
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
                <FormControl id="email" isInvalid={errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        name="email"
                        type="email"
                        {...register("email", {
                            required: "This is required"
                        })}
                        focusBorderColor="brand.accent2" 
                        variant="filled"
                    />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
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
                    <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
                <FormControl id="confirmPassword" isInvalid={errors.confirmPassword}>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                        name="confirmPassword"
                        type="password"
                        {...register("confirmPassword", {
                            required: "This is required"
                        })}
                        focusBorderColor="brand.accent2" 
                        variant="filled"
                    />
                    <FormErrorMessage>{errors.confirmPassword && errors.confirmPassword.message}</FormErrorMessage>
                </FormControl>
                <Box />
                <Button isLoading={isSubmitting} type="submit" fontWeight="bold" color="brand.primary" bg="brand.accent2">Register</Button>
                </Stack>
                <Text fontSize="lg" color="brand.tertiary" mt={4}>
                    Already have an account? <Text as={Link} to={Url.LOGIN} color="brand.highlight" fontWeight="semibold">Sign In</Text>
                </Text>
            </form>
        </Box>
    );
}

export default RegisterForm;