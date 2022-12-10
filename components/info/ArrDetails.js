import React from "react";

const ArrDetails = ({ title, details, col }) => {
  return (
    <li className="flex text-slate-900 ">
      <p className="w-1/4">{title}</p>
      <span className="w-2">:</span>
      <div className={`flex flex-1 flex-wrap gap-1 ${col && "flex-col"}`}>
        {details &&
          details.map((item, index) => {
            return (
              <p key={index}>
                {item}
                {col ? null : ","}
              </p>
            );
          })}
      </div>
    </li>
  );
};

export default ArrDetails;
