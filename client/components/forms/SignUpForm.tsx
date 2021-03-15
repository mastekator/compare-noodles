import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Stack} from '@chakra-ui/react'
import {PasswordField} from 'components/ui/PasswordInput'

type formData = {
    email: string
    password: string
    repeatPassword: string
}

export const SignUpForm: React.FC = () => {

    const schema = yup.object()
        .shape({
            email: yup.string()
                .required('Email is a required field')
                .email('Enter a valid email'),
            password: yup.string()
                .required('Password is a required field')
                .min(8, 'Minimum password length 8 characters'),
            repeatPassword: yup.string()
                .required('Password confirmation is a required field')
                .oneOf([yup.ref('password'), null], 'Passwords must match')
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
                ref={register}/>
            <PasswordField
                isInvalid={!!errors.repeatPassword}
                errorText={errors.repeatPassword && errors.repeatPassword.message}
                label="Repeat password"
                name="repeatPassword"
                ref={register}
            />
            <Button type="submit" colorScheme="teal" size="lg" fontSize="md">
                Sign up
            </Button>
        </Stack>
    </form>
}
