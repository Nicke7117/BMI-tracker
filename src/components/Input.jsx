import React from 'react'

export const Input = (props) => {
    return (
        <>
        <label htmlFor={props.id}>{props.id === "weight" ? "Weight (kg)" : "Height (cm)"}</label>
        <input type="text" id={props.id} className={props.className + "absolute bottom-5"}/>
        </>
    )
}


