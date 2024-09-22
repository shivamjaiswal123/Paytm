import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([
    {
      name: "User1"
    },
    {
      name: "User2"
    },
    {
      name: "User3"
    },
    {
      name: "User1"
    }
  ]);
  return (
    <div className="m-4">
      <h1 class="font-semibold text-lg">Users</h1>
      <input
        type="text"
        placeholder="Search Users..."
        class="border rounded-md w-full mt-4 p-1"
      />

      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
}

function User({ user }) {
  return (
    <div class="mt-4 flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="bg-slate-400 mr-4 rounded-full w-10 h-10 flex justify-center items-center">
          U1
        </h1>
        <p class="font-medium">{user.name}</p>
      </div>

      <div>
        <Link to="/sendmoney" href="#" class="bg-black text-white p-2 rounded-md px-2">
          Send Money
        </Link>
      </div>
    </div>
  );
}
