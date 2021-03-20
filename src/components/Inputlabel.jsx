import React from 'react'

export const Inputlabel = (props) => {
    return (
        <>
            <label htmlFor={props.htmlFor} className={props.className + "top-2 absolute mx-2"}>{props.htmlFor === "weight" ? "Weight (kg)" : "Height (cm)"}</label>
        </>
    )
}
