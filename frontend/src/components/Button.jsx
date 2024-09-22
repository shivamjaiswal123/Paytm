import React from 'react'

export default function Button({label}) {
    return (
        <div>
            <button className="bg-black text-white w-full mt-4 p-2 rounded-md">{label}</button>
        </div>
    )
}
