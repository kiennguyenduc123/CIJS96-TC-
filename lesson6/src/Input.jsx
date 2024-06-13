import React from 'react'

const Input = (props) => {

    return (
        <>
            <div>
                <p>Component input</p>
                <input value={props.value} onChange={props.onChange} />
            </div>
        </>
    )
}

export default Input;