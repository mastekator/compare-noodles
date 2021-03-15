import React from 'react'
import {useQuery} from '@apollo/client'
import {USERS_QUERY} from 'graphql/queries'
import {DefaultLayout} from '../components/layouts/DefaultLayout'
import {AppContainer} from 'components/AppContainer'

const Home: React.FC = () => {
    const {loading, data, error} = useQuery(USERS_QUERY)

    console.log('loading', loading)
    console.log('data', data)
    console.log('error', error)

    return <DefaultLayout title={'Main page'}>
        <AppContainer maxW="container.lg">
            <h1>Test</h1>
        </AppContainer>
    </DefaultLayout>
}

export default Home
