import React from 'react'

export default function Appbar() {
    return (
        <div className="flex justify-between h-auto shadow-md p-4">
            <h1 className="font-semibold text-xl">Payment App</h1>
        
            <div className="flex font-semibold mr-4 items-center">
                <p className="mr-2">Hello User</p>
                <p className="bg-slate-400 rounded-full w-8 h-8 flex justify-center items-center">U</p>  
            </div>
        </div>
    )
}
