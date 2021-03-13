import React, {forwardRef, useRef} from 'react'
import {HiEye, HiEyeOff} from 'react-icons/hi'
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
    useColorModeValue as mode, FormErrorMessage
} from '@chakra-ui/react'
import Link from 'next/link'

interface Props extends InputProps {
    forgot?: boolean
    name?: string
    label?: string
    errorText?: string
}

export const PasswordField = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {forgot, name = 'password', isInvalid, errorText, label = 'Password', ...rest} = props
    const {isOpen, onToggle} = useDisclosure()
    const inputRef = useRef<HTMLInputElement>(null)

    const mergeRef = useMergeRefs(inputRef, ref)

    const onClickReveal = () => {
        onToggle()
        const input = inputRef.current
        if (input) {
            input.focus({preventScroll: true})
            const length = input.value.length * 2
            requestAnimationFrame(() => {
                input.setSelectionRange(length, length)
            })
        }
    }

    return <FormControl isInvalid={isInvalid} id={name}>
        <Flex justify="space-between">
            <FormLabel>{label}</FormLabel>

            {forgot && <Box
                as={'span'}
                color={mode('teal.600', 'teal.200')}
                _hover={{color: 'teal'}}
                fontWeight="semibold"
                fontSize="sm">
                <Link href='/forgot-password'>
                    Forgot Password?
                </Link>
            </Box>
            }
        </Flex>
        <InputGroup>
            <InputRightElement>
                <IconButton
                    variant="ghost"
                    aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                    icon={isOpen ? <HiEyeOff/> : <HiEye/>}
                    onClick={onClickReveal}
                />
            </InputRightElement>
            <Input
                ref={mergeRef}
                name={name}
                type={isOpen ? 'text' : 'password'}
                autoComplete="current-password"
                required
                {...rest}
            />
        </InputGroup>
        <FormErrorMessage>
            {isInvalid && errorText}
        </FormErrorMessage>
    </FormControl>
})

PasswordField.displayName = 'PasswordField'
