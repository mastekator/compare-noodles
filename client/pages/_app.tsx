import {ApolloProvider} from '@apollo/client'
import {AppProps} from 'next/app'
import React from 'react'
import {Global} from '@emotion/react'
import {appWithTranslation} from 'next-i18next'
import {ChakraProvider} from '@chakra-ui/react'

import {useApollo} from 'lib/withApollo'
import '../styles/globals.css'
import theme from '../theme'
import fonts from '../styles/font-face'

const App: React.FC<AppProps> = (props) => {
    const {Component, pageProps} = props
    const apolloClient = useApollo(pageProps.initialApolloState)

    return <ApolloProvider client={apolloClient}>
        <ChakraProvider resetCSS theme={theme}>
            <Global styles={fonts}/>
            <Component {...pageProps} />
        </ChakraProvider>
    </ApolloProvider>
}

export default appWithTranslation(App)
