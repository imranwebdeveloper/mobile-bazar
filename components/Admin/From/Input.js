import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { inputHandler } from "../../../slice/addProductSlice";

const Input = ({ label, name, type, spanFull }) => {
  const [inputValue, setInputValue] = useState("");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(inputHandler({ key: name, value: inputValue }));
  // }, [dispatch, name, inputValue]);

  return (
    <div className={`flex justify-between items-center`}>
      <label className="min-w-[100px] ">{label}</label>
      <input
        // onChange={(e) => setInputValue(e.target.value)}
        name={name}
        type={type ? type : "text"}
        className=" input input-bordered input-md w-full "
        value={inputValue}
      />
    </div>
  );
};

export default Input;
