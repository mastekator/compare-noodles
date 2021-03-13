import React from 'react'
import {IoPerson} from 'react-icons/io5'
import {Box, IconButton, Stack} from '@chakra-ui/react'
import {DarkModeSwitch} from './DarkModeSwitch'
import {LangModeSwitch} from './LangModeSwitch'
import Link from 'next/link'

type Props = {
    isOpen: boolean
}

export const MenuIcons: React.FC<Props> = (props) => {
    const {isOpen} = props
    return <Box
        display={{base: isOpen ? 'block' : 'none', md: 'block'}}
        flexBasis={{base: '100%', md: 'auto'}}
    >
        <Stack
            spacing={4}
            align="center"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
        >
            <LangModeSwitch/>
            <DarkModeSwitch/>
            <Link href={'/login'}>
                <IconButton
                    aria-label="login"
                    variant="ghost"
                    icon={<IoPerson/>}
                />
            </Link>
        </Stack>
    </Box>
}
