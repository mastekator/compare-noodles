import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Container} from '../components/Container'
import {Main} from '../components/Main'
import CTA from '../components/CTA'
import {DefaultLayout} from '../components/layouts/Default'

const Landing: React.FC = () => {
    return <Container height="100vh">
        <Main>
            <CTA/>
        </Main>
    </Container>
}

Landing.Layout = DefaultLayout

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['cta'])
    }
})

export default Landing
