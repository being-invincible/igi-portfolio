import React from 'react'

interface InputProps {
    id: string
    name: string
    label: string
    placeholder: string
    type: string
    value: string
    onChange () : void
}

const Input = ({id, name, label, type, placeholder, value, onChange, ... props}: InputProps) => {
    return(
        <div>
            <label htmlFor={id} className="sr-only">{label}</label>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            id={id} 
            className="w-full rounded-lg bg bg-cultured border-platinum p-3 text-sm"
            {... props} />
        </div>
    )
}

export default Input