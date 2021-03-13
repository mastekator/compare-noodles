import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Stack} from '@chakra-ui/react'
import {PasswordField} from 'components/ui/PasswordInput'

type formData = {
    email: string
    password: string
}

export const SignInForm: React.FC = () => {

    const schema = yup.object()
        .shape({
            email: yup.string()
                .email('Enter a valid email')
                .required('Email is a required field'),
            password: yup.string()
                .required('Password is a required field')
        })

    const {handleSubmit, errors, register} = useForm(
        {
            resolver: yupResolver(schema)
        }
    )

    const onSubmitHandler = (values: formData) => {
        console.log(values)
    }

    return <form noValidate onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing="6">
            <FormControl isInvalid={!!errors.email} id="email">
                <FormLabel htmlFor="name">Email address</FormLabel>
                <Input name="email" type="email" autoComplete="email" ref={register} required/>
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <PasswordField
                isInvalid={!!errors.password}
                errorText={errors.password && errors.password.message}
                ref={register}
                forgot
            />
            <Button type="submit" colorScheme="teal" size="lg" fontSize="md">
                Sign in
            </Button>
        </Stack>
    </form>
}
