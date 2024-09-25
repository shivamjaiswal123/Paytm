import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [allUsers, setAllUsers] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  async function fetchAllUsers(){
    const res = await fetch("http://localhost:3000/api/v1/user/all-users", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken")
      }
    })
    const data = await res.json()
    setAllUsers(data.users)
  }

  async function filterUser(){
    const res = await fetch("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
    const data = await res.json()
    setFilteredUsers(data.searchedUsers)
  }
  
  useEffect(()=> {
    fetchAllUsers()
  }, [])

  useEffect(()=>{
    filterUser()
  }, [filter])

  return (
    <div className="m-4">
      <h1 className="font-semibold text-lg">Users</h1>
      <input
      onChange={e => setFilter(e.target.value)}
        type="text"
        placeholder="Search Users..."
        className="border rounded-md w-full mt-4 p-1"
      />

      {filter ? filteredUsers.map(user => (
        <User user={user} />
      )) : allUsers.map(user => (
        <User user={user} />
      ))}
    </div>
  );
}

function User({ user }) {
  const navigate = useNavigate()
  return (
    <div className="mt-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="bg-slate-400 mr-4 rounded-full w-10 h-10 flex justify-center items-center">
          {user.username[0]}
        </h1>
        <p className="font-medium">{user.username}</p>
      </div>

      <div>
        <button onClick={()=> navigate("/sendmoney?id="+user._id+"&name="+user.username)} className="bg-black text-white p-2 rounded-md px-2">
          Send Money
        </button>
      </div>
    </div>
  );
}
