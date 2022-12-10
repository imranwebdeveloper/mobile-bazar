import React from "react";

const DetailsList = ({ title, details }) => {
  return (
    <li className="flex  text-slate-900">
      <p className="w-1/4">{title}</p>
      <span className="w-2">:</span>
      <p className="flex-1 "> {details} </p>
    </li>
  );
};

export default DetailsList;
