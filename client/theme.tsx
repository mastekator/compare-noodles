import {extendTheme} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'

const fonts = {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
    mono: `'Inter', sans-serif`
}

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '60em',
    xl: '80em'
})

const theme = extendTheme({
    sizes: {
      container: {
          lg: '60em'
      }
    },
    colors: {
        black: '#2D3748'
    },
    fonts,
    breakpoints
})

export default theme
