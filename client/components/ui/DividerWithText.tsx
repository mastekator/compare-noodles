import React from 'react'
import {Box, Divider, Flex, FlexProps, useColorModeValue as mode} from '@chakra-ui/react'

export const DividerWithText: React.FC<FlexProps> = (props) => {
    return <Flex align="center" color="gray.300" {...props}>
        <Box flex="1">
            <Divider borderColor="currentcolor"/>
        </Box>
        <Box as="span" px="3" color={mode('gray.600', 'gray.400')} fontWeight="medium">
            {props.children}
        </Box>
        <Box flex="1">
            <Divider borderColor="currentcolor"/>
        </Box>
    </Flex>
}
