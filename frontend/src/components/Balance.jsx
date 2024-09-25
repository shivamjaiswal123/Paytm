import React from "react";

export default function Balance({balance}) {
  return (
    <div className="flex font-bold text-lg gap-2 m-4">
      <div>Your Balance</div>
      <div>${Math.floor(balance)}</div>
    </div>
  );
}
