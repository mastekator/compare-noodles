import React from 'react'
import Head from 'next/head'
import {Header} from '../sections/Header'

type Props = {
    title: string
}


export const LandingLayout: React.FC<Props> = (props) => {
    const {title, children} = props

    return <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header maxW="container.xl"/>
        <div id="main">{children}</div>
    </>
}
