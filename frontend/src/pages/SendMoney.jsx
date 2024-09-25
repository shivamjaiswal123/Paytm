import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function SendMoney() {
  const [searchParams] = useSearchParams()
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate()

  // Get the query parameters
  const to = searchParams.get('id');
  const receiverName = searchParams.get('name');

  async function handleClick(){
    const res = await fetch("http://localhost:3000/api/v1/account/transfer", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to,
        amount
      })
    })
    const data = await res.json()
    if(data.message){
      alert(data.message)
      navigate("/")
    }
  }
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white w-96 h-auto shadow-2xl p-6 rounded-md">
        <h1 className="text-center text-2xl font-bold mb-10">Send Money</h1>

        <div className="flex items-center mb-4">
          <p className="bg-green-500 text-white mr-4 rounded-full w-10 h-10 flex justify-center items-center">
            {receiverName[0]}
          </p>
          <p className="font-semibold text-xl">{receiverName}</p>
        </div>

        <div>
          <p className="font-semibold">Amount (in Rs)</p>
          <input
          onChange={e => setAmount(e.target.value)}
            type="text"
            placeholder="Enter Amount"
            className="border block w-full p-1 rounded-md mb-4"
          />
          <button onClick={handleClick} className="bg-green-500 w-full text-white p-1.5 rounded-md">
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
