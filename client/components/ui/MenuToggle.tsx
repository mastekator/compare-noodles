import React from 'react'
import {Box} from '@chakra-ui/react'
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'

type Props = {
    toggle: () => void
    isOpen: boolean
}

export const MenuToggle: React.FC<Props> = (props) => {
    const {toggle, isOpen} = props

    return <Box display={{base: 'block', md: 'none'}} onClick={toggle}>
        {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
    </Box>
}
