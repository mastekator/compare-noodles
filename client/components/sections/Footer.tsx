import React from 'react'
import {Flex, FlexProps} from '@chakra-ui/react'

export const Footer: React.FC<FlexProps> = (props) => {
    return <Flex as="footer" py="8rem" {...props}/>
}
