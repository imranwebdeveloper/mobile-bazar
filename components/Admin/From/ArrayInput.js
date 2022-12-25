import React, { useState } from "react";
import Input from "./Input";
// import { useDispatch } from "react-redux";
// import {
//   arrInputHandler,
//   arrRemoveHandler,
// } from "../../../slice/addProductSlice";

const ArrayInput = ({ label, name }) => {
  //   const [value, setValue] = useState("");
  //   const dispatch = useDispatch();

  return (
    <div className="flex justify-between gap-2 my-2">
      <Input label={label} name={name} />
      <div className="flex justify-between items-center gap-2 text-sm font-bold">
        <button className=" bg-green-600 text-white rounded px-6 py-2 ">
          Add
        </button>
        <button className=" bg-red-600 text-white rounded px-6 py-2 ">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ArrayInput;
