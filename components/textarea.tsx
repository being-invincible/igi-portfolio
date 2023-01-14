import React from 'react'

interface InputProps {
    id: string
    name: string
    label: string
    placeholder: string
    row: number
    value: string
    onChange () : void
}

const Textarea = ({id, name, label, row, placeholder, value, onChange, ... props}: InputProps) => {
    return(
        <div>
            <label htmlFor={id} className="sr-only">{label}</label>
            <textarea 
            value={value}
            onChange={onChange}
            rows={row}
            name={name} 
            placeholder={placeholder} 
            id={id} 
            className="w-full rounded-lg bg-cultured border-platinum p-3 text-sm"
            {... props} />
        </div>
    )
}

export default Textarea