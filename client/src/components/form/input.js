import React from 'react';

export default ({size = 's12', label, input, type = 'text', autoComplete = 'off', meta: {touched, error}}) => {
    return(
        <div className = {`input-field col ${size}`}>
            <input {...input} id = {input.name} type= {type} autoComplete = {autoComplete}/>
            <label className= {input.value ? "active" : ""} htmlFor = {input.name}>{label}</label>
            <div className = "input-error red-text text-darken-2">{touched && error}</div>
        </div>
    )
}
