import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import CTA from '../components/CTA'
import {AppContainer} from 'components/AppContainer'
import {LandingLayout} from '../components/layouts/LandingLayout'

const Landing: React.FC = () => {
    return <LandingLayout title={'Landing'}>
        <AppContainer height="100vh" maxW="container.xl">
            <CTA/>
        </AppContainer>
    </LandingLayout>
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['cta'])
    }
})

export default Landing
