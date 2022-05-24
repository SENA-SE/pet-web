import React from 'react'

function FormInput({ label, ...rest }) {
    return (
        <div>
            <label>{label}</label>
            <input {...rest}></input>
        </div>
    )
}

export default FormInput