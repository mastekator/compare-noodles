import {useMemo} from 'react'
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import {SERVER_API_ENDPOINT} from 'config/env'

let apolloClient

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: SERVER_API_ENDPOINT
        }),
        cache: new InMemoryCache()
    })
}

export const initializeApollo: (initialState: null | object) => any = (initialState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient()

    if (initialState) {
        const existingCache = _apolloClient.extract()
        _apolloClient.cache.restore({...existingCache, ...initialState})
    }
    if (typeof window === 'undefined') return _apolloClient
    if (!apolloClient) apolloClient = _apolloClient
    return _apolloClient
}

export const useApollo = (initialState: any) => {
    return useMemo(() => initializeApollo(initialState), [initialState])
}
