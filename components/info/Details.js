import React from "react";

const Details = ({ title, arr }) => {
  return (
    <li className="flex  text-slate-900 ">
      <p className="w-1/4">{title}</p>
      <span className="w-2">:</span>
      <div className="flex-1">
        {arr &&
          arr.map((item, index) => {
            return (
              <p key={index}>
                {item.variant} MP, {item.details}
              </p>
            );
          })}
      </div>
    </li>
  );
};

export default Details;
