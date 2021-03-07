import {ApolloProvider} from '@apollo/client'
import {AppProps} from 'next/app'
import React from 'react'

import {useApollo} from 'lib/withApollo'
import '../styles/globals.css'

const App: React.FC<AppProps> = (props) => {
    const {Component, pageProps} = props
    const apolloClient = useApollo(pageProps.initialApolloState)

    return <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
    </ApolloProvider>
}

export default App
