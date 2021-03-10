import React from 'react'
import {useColorMode, Switch} from '@chakra-ui/react'

export const DarkModeSwitch: React.FC = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const isDark = colorMode === 'dark'

    return <Switch
        position="relative"
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
    />
}
