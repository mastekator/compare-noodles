import React from 'react'
import {
    Box,
    Heading,
    Text,
    useColorModeValue as mode
} from '@chakra-ui/react'
import {Logo} from '../components/ui/Logo'
import {ResetPasswordForm} from 'components/forms/ResetPasswordForm'
import {DividerWithText} from '../components/ui/DividerWithText'
import Link from 'next/link'
import PageTransition from '../components/ui/PageTransition'

const ResetPassword: React.FC = () => {

    return <PageTransition>
        <Box bg={mode('gray.50', 'inherit')} minH="100vh" py="12" px={{sm: '6', lg: '8'}}>
            <Box maxW={{sm: 'md'}} mx={{sm: 'auto'}} w={{sm: 'full'}}>
                <Box mb={{base: '10', md: '20'}}>
                    <Logo mx="auto" w="fit-content"/>
                </Box>
                <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
                    Reset password
                </Heading>
                <Text mt="4" align="center" maxW="md" fontWeight="medium">
                    <span>Enter your new password</span>
                </Text>
            </Box>
            <Box maxW={{sm: 'md'}} mx={{sm: 'auto'}} mt="8" w={{sm: 'full'}}>
                <Box
                    bg={mode('white', 'gray.700')}
                    py="8"
                    px={{base: '4', md: '10'}}
                    shadow="base"
                    rounded={{sm: 'lg'}}
                >
                    <ResetPasswordForm/>
                    <DividerWithText mt="6">or</DividerWithText>
                    <Text
                        color={mode('teal.600', 'teal.200')}
                        _hover={{color: 'teal'}}
                        textAlign="center" mt="6">
                        <Link href='/sign-in'>
                            Sign in
                        </Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    </PageTransition>
}

export default ResetPassword
