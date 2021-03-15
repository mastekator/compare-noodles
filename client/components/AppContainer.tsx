import {Flex, useColorMode, ContainerProps, Container} from '@chakra-ui/react'
import React from 'react'

export const AppContainer: React.FC<ContainerProps> = (props) => {
    const {colorMode} = useColorMode()
    const {children, ...rest} = props

    const bgColor = {light: 'white', dark: 'gray.800'}
    const color = {light: 'black', dark: 'white'}

    return <Container {...rest}>
        <Flex
            minH='100vh'
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bg={bgColor[colorMode]}
            color={color[colorMode]}
        >
            {children}
        </Flex>
    </Container>
}
