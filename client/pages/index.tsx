import {useQuery} from '@apollo/client'
import {USERS_QUERY} from 'graphql/queries'
import React from 'react'

const Home: React.FC = () => {
    const {loading, data} = useQuery(USERS_QUERY)

    if (loading || !data) {
        return <h1>Loading</h1>
    }

    return <div>
        <h1>Test</h1>
        {data.users.map(user => {
            return <p key={user.id}>
                {user.name}
            </p>
        })}
    </div>
}

export default Home
