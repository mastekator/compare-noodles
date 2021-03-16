import React from 'react'
import {IoLogoFacebook, IoLogoGoogle, IoLogoGithub} from 'react-icons/io5'
import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
    VisuallyHidden
} from '@chakra-ui/react'
import {Logo} from '../components/ui/Logo'
import {SignInForm} from 'components/forms/SignInForm'
import {DividerWithText} from '../components/ui/DividerWithText'
import Link from 'next/link'
import PageTransition from '../components/ui/PageTransition'

const SignIn: React.FC = () => {

    return <PageTransition>
        <Box
            bg={mode('gray.50', 'inherit')}
            minH="100vh" py="12" px={{sm: '6', lg: '8'}}>
            <Box maxW={{sm: 'md'}} mx={{sm: 'auto'}} w={{sm: 'full'}}>
                <Box mb={{base: '10', md: '20'}}>
                    <Logo mx="auto" w="fit-content"/>
                </Box>
                <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
                    Sign in to your account
                </Heading>
                <Text mt="4" align="center" maxW="md" fontWeight="medium">
                    <span>Don&apos;t have an account?</span>
                    <Box
                        as={'span'}
                        marginStart="1"
                        color={mode('teal.600', 'teal.200')}
                        _hover={{color: 'teal'}}
                        display={{base: 'block', sm: 'revert'}}
                    >
                        <Link href='/sign-up'>
                            Sign up for free!
                        </Link>
                    </Box>
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
                    <SignInForm/>
                    <DividerWithText mt="6">or continue with</DividerWithText>
                    <SimpleGrid mt="6" columns={3} spacing="3">
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Facebook</VisuallyHidden>
                            <IoLogoFacebook size={24}/>
                        </Button>
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Google</VisuallyHidden>
                            <IoLogoGoogle size={24}/>
                        </Button>
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Github</VisuallyHidden>
                            <IoLogoGithub size={24}/>
                        </Button>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    </PageTransition>
}

export default SignIn
