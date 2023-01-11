import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleInput } from "../../../redux/Slice/mobileSlice";

const Input = ({ label, name, type }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const value = e.target.value;
    // dispatch(inputValue({ name, value }));
    dispatch(handleInput({ name, value }));
  };

  // useEffect(() => {
  //   dispatch(handleInputL({ key: name, value: input }));
  // }, [dispatch, input, name]);

  return (
    <div className={`flex justify-between w-full items-center`}>
      <label className="min-w-[100px] text-sm ">{label}</label>
      <input
        name={name}
        type={type ? type : "text"}
        className=" input input-bordered input-md w-full "
        // value={input}
        // onChange={(e) => setInput(e.target.value)}
        onChange={inputHandler}
      />
    </div>
  );
};

export default Input;
