import React from 'react'
import HocCompoent from './index'
const Hover = (props) => {
    return (
        <div>
            <h6>{props.data}</h6>
            <button onMouseOver={props.handleState}>Hover</button>
        </div >
    )
}

export default HocCompoent(Hover)