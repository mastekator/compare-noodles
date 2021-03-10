import React from 'react'

export const DefaultLayout: React.FC = (props) => {
    return <>
        <div>
            <div id="main">{props.children}</div>
        </div>
    </>
}
