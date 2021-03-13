import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Stack} from '@chakra-ui/react'
import {PasswordField} from 'components/ui/PasswordInput'

type formData = {
    email: string
    password: string
    repeatPassword: string
}

export const ResetPasswordForm: React.FC = () => {

    const {handleSubmit, errors, register} = useForm()

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
            <PasswordField ref={register}/>
            <PasswordField label="Repeat password" name="repeat-password" ref={register}/>
            <Button type="submit" colorScheme="teal" size="lg" fontSize="md">
                Reset password
            </Button>
        </Stack>
    </form>
}
