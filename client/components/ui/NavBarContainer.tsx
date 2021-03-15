import React from 'react'
import {Box, Container, Flex, useColorMode} from '@chakra-ui/react'

export const NavBarContainer: React.FC = (props) => {
    const {children, ...rest} = props
    const {colorMode} = useColorMode()

    const bgColor = {light: 'white', dark: 'gray.800'}
    const color = {light: 'black', dark: 'white'}

    return <Box
        pos='relative'
        zIndex={999}
        boxShadow="base"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
    >
        <Container {...rest}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                px={[4]}
                py={[3]}
            >
                {children}
            </Flex>
        </Container>
    </Box>
}
