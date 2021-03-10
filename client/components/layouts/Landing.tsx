import React from 'react'

export const LandingLayout: React.FC = (props) => {
    return <>
        <div style={{background: 'red'}}>
            <div id="main">{props.children}</div>
        </div>
    </>
}
