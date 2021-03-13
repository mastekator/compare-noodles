import {Logo} from 'components/ui/Logo'
import {NavBarContainer} from 'components/ui/NavBarContainer'
import React, {useState} from 'react'
import {MenuToggle} from '../ui/MenuToggle'
import {MenuLinks} from '../ui/MenuLinks'
import {MenuIcons} from 'components/ui/MenuIcons'

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)

    return <NavBarContainer>
        <Logo
            w="220px"
        />
        <MenuToggle toggle={toggle} isOpen={isOpen}/>
        <MenuLinks isOpen={isOpen}/>
        <MenuIcons isOpen={isOpen}/>
    </NavBarContainer>
}
