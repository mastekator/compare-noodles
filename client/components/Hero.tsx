import {Flex, Heading} from '@chakra-ui/react'
import React from 'react'

type Props = {
    title?: string
}

export const Hero: React.FC<Props> = (props) => {
    const {title} = props

    return <Flex justifyContent="center" alignItems="center" height="100vh">
        <Heading fontSize="6vw">{title}</Heading>
    </Flex>
}
