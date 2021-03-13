import React from 'react'
import {Box, BoxProps, Text, HStack, Center} from '@chakra-ui/react'
import Link from 'next/link'
import SvgLogo from './icons/Logo'

export const Logo: React.FC<BoxProps> = (props) => {
    return <Link href='/'>
        <Box>
            <HStack cursor={'pointer'} {...props}>
                <Center w="60px" h="60px">
                    <SvgLogo width={60} height={60}/>
                </Center>
                <Center>
                    <Text fontSize="lg" fontWeight="bold">
                        Compare Noodles
                    </Text>
                </Center>
            </HStack>
        </Box>
    </Link>
}
