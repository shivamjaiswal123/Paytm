import React from 'react'

export default function FormCard({children}) {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-500">
            <div className="h-auto w-auto rounded-md bg-white p-6">
                {children}
            </div>
        </div>
    )
}
