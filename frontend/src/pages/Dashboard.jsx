import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

export default function Dashboard() {
    const [balance, setBalance] = useState('')

    async function fetchBalance(){
        const res = await fetch("http://localhost:3000/api/v1/account/balance", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            }
        })
        const data = await res.json()
        setBalance(data.balance)
    }
    useEffect(()=>{
        fetchBalance()
    }, [])


    return (
        <div>
            <Appbar/>
            <Balance balance={balance}/>
            <Users/>
        </div>
    )
}
