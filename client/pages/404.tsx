import React from 'react'
import {IceCream} from 'react-kawaii'
import Link from 'next/link'
import {Center, Heading, VStack, Text, Flex, Button} from '@chakra-ui/react'
import {AppContainer} from '../components/AppContainer'

const NotFound: React.FC = () => {
    return <AppContainer maxW="container.sm" justifyContent="center">
        <Center w="100%">
            <Flex alignItems="center" w="100%" justifyContent="space-between">
                <VStack>
                    <Heading size="4xl">404</Heading>
                    <Text mb={8}>Page not found</Text>
                    <Link href="/"><Button>Return home</Button></Link>
                </VStack>
                <IceCream size={300} mood="shocked" color="#FDA7DC"/>
            </Flex>
        </Center>
    </AppContainer>
}

export default NotFound
