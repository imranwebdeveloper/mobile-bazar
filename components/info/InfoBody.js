import React from "react";

const InfoBody = ({ heading, children }) => {
  return (
    <article className="info-body ">
      <p className=" font-bold text-red-700">{heading} </p>
      {children}
    </article>
  );
};

export default InfoBody;
