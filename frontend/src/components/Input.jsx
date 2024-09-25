import React from 'react'

export default function Input({ lable, placeholder, onChange}) {
    return (
        <div>
            <label className="block font-medium my-2">{lable}</label>
            <input onChange={onChange} type="text" placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-2" required />
        </div>
    )
}
