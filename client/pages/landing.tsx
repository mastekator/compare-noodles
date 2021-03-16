import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {AppContainer} from 'components/AppContainer'
import {LandingLayout} from '../components/layouts/LandingLayout'
import {Hero} from 'components/ui/Hero'
import PageTransition from '../components/ui/PageTransition'

const Landing: React.FC = () => {
    return <LandingLayout title={'Landing'}>
        <PageTransition>
            <AppContainer height="100vh" maxW="container.xl">
                <Hero title="React landing page with Chakra UI"
                      subtitle="This is the subheader section where you describe the basic benefits of your product"
                      ctaLink="/sign-up"
                      ctaText="Create your account now"
                      image="https://source.unsplash.com/collection/404339/800x600"
                />
            </AppContainer>
        </PageTransition>
    </LandingLayout>
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['cta'])
    }
})

export default Landing
