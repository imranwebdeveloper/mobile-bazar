import React from "react";

const TR = ({ name, qty, bg }) => {
  return (
    <tr
      className={`cursor-pointer hover:text-blue-500 ${bg && "bg-slate-100"}`}
    >
      <td className="p-1">{name}</td>
      <td>: {qty}</td>
    </tr>
  );
};

export default TR;
