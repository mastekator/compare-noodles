import {Logo} from 'components/ui/Logo'
import {NavBarContainer} from 'components/ui/NavBarContainer'
import React, {useState} from 'react'
import {MenuToggle} from '../ui/MenuToggle'
import {MenuLinks} from '../ui/MenuLinks'
import {MenuIcons} from 'components/ui/MenuIcons'
import {ContainerProps} from '@chakra-ui/layout'

export const Header: React.FC<ContainerProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)

    return <NavBarContainer {...props}>
        <Logo
            w="220px"
        />
        <MenuToggle toggle={toggle} isOpen={isOpen}/>
        <MenuLinks isOpen={isOpen}/>
        <MenuIcons isOpen={isOpen}/>
    </NavBarContainer>
}
