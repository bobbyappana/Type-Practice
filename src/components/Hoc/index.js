import React, { Component, useState } from 'react'

const HocCompoent = (OriginalComp) => {

    const NewComponent = () => {
        const [data, setDta] = useState(0)

        const handleState = () => {
            setDta(data + 1)
        }
        return (
            <div>
                <OriginalComp data={data} handleState={handleState} />
            </div>
        )
    }
    return NewComponent
}

export default HocCompoent