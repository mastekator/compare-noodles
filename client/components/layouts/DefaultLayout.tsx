import React from 'react'
import {Header} from '../sections/Header'
import Head from 'next/head'

type Props = {
    title: string
}

export const DefaultLayout: React.FC<Props> = (props) => {
    const {children, title} = props
    return <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header maxW="container.lg"/>
        <div id="main">{children}</div>
    </>
}
