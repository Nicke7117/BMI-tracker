import React from 'react'

export const Inputlabel = (props) => {
    return (
        <>
            <label htmlFor={props.htmlFor} className={"block pl-3"}>{props.htmlFor === "weight" ? "Weight (kg)" : "Height (cm)"}</label           >
        </>
    )
}
