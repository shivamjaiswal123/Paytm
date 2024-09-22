import React from "react";

export default function SendMoney() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div class="bg-white w-96 h-auto shadow-2xl p-6 rounded-md">
        <h1 class="text-center text-2xl font-bold mb-10">Send Money</h1>

        <div class="flex items-center mb-4">
          <p class="bg-green-500 text-white mr-4 rounded-full w-10 h-10 flex justify-center items-center">
            A
          </p>
          <p class="font-semibold text-xl"> Shivam Jaiswal</p>
        </div>

        <div>
          <p class="font-semibold">Amount (in Rs)</p>
          <input
            type="text"
            placeholder="Enter Amount"
            class="border block w-full p-1 rounded-md mb-4"
          />
          <button class="bg-green-500 w-full text-white p-1.5 rounded-md">
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
