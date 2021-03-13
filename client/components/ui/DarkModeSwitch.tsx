import React from 'react'
import {IoMoon, IoSunny} from 'react-icons/io5'
import {useColorMode, IconButton} from '@chakra-ui/react'

export const DarkModeSwitch: React.FC = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const isDark = colorMode === 'dark'

    return <IconButton
        onClick={toggleColorMode}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        variant="ghost"
        icon={isDark ? <IoSunny/> : <IoMoon/>}
    />
}
