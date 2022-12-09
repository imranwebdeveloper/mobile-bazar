import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Accordion = ({ heading, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white p-4 border rounded-md mb-3">
      <div
        className="col-span-2 flex justify-between items-center cursor-pointer "
        onClick={() => setToggle(!toggle)}
      >
        <h1 className="font-bold"> {heading} </h1>
        <span className="text-lg ">
          {toggle ? <FaMinusCircle /> : <FaPlusCircle />}
        </span>
      </div>
      {toggle && children}
    </div>
  );
};

export default Accordion;
