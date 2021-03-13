import React from 'react'
import {Box, Stack} from '@chakra-ui/react'
import Link from 'next/link'


type Props = {
    isOpen: boolean
}

export const MenuLinks: React.FC<Props> = (props) => {
    const {isOpen} = props
    return <Box
        display={{base: isOpen ? 'block' : 'none', md: 'block'}}
        flexBasis={{base: '100%', md: 'auto'}}
    >
        <Stack
            spacing={8}
            align="center"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
        >
            <Link href="/">Home</Link>
            <Link href="/landing">Landing</Link>
        </Stack>
    </Box>
}
