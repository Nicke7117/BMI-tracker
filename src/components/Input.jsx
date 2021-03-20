import React from 'react'

export const Input = (props) => {
    return (
        <>
        <input type="text" id={props.id} className={props.className + " w-10 h-10 rounded-xl mx-3"} onKeyUp={props.onKeyUp} />
        </>
    )
}


