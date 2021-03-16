import {Flex, ContainerProps, Container} from '@chakra-ui/react'
import React from 'react'

export const AppContainer: React.FC<ContainerProps> = (props) => {
    const {children, ...rest} = props

    return <Container {...rest}>
        <Flex
            minH='100vh'
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            {...rest}
        >
            {children}
        </Flex>
    </Container>
}
