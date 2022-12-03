import React from 'react'
import HocCompoent from './index'
const Increment = (props) => {
    return (
        <div>
            <h6>{props.data}</h6>
            <button onClick={props.handleState}>Increment</button>
        </div>
    )
}

export default HocCompoent(Increment)