import React from 'react'
import {Header} from '../sections/Header'

export const DefaultLayout: React.FC = (props) => {
    return <>
        <div>
            <Header/>
            <div id="main">{props.children}</div>
        </div>
    </>
}
