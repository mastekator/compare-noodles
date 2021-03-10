import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {LandingLayout} from '../../components/layouts/Landing'
import {Container} from '../../components/Container'
import {Main} from '../../components/Main'
import {DarkModeSwitch} from '../../components/DarkModeSwitch'
import CTA from '../../components/CTA'

const Landing: React.FC = () => {
    return <Container height="100vh">
        <DarkModeSwitch/>
        <Main>
            <CTA/>
        </Main>
    </Container>
}

Landing.Layout = LandingLayout

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['cta'])
    }
})

export default Landing
