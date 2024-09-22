import React from 'react'
import { Link } from "react-router-dom";

export default function AccountInstruction({label, nav, route}) {
    return (
        <div>
            <p className="text-sm text-center mt-2">{label} <Link to={route} className="text-blue-500 underline">{nav}</Link></p>
        </div>
    )
}
