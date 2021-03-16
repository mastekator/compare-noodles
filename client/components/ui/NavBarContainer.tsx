import React from 'react'
import {Box, Container, Flex} from '@chakra-ui/react'

export const NavBarContainer: React.FC = (props) => {
    const {children, ...rest} = props

    return <Box
        pos='relative'
        zIndex={999}
        boxShadow="base"
    >
        <Container {...rest}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                py={[3]}
            >
                {children}
            </Flex>
        </Container>
    </Box>
}
