import React from 'react'

export default function Button({label, onClick}) {
    return (
        <div>
            <button onClick={onClick} className="bg-black text-white w-full mt-4 p-2 rounded-md">{label}</button>
        </div>
    )
}
