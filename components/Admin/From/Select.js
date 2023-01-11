import React from "react";

const Select = ({ list }) => {
  return (
    <div className="flex">
      <label className="w-[140px]">Brands</label>
      <select
        className="select-md w-full text-inherit border-2 rounded-md"
        defaultChecked="Hello"
        defaultValue="Homer"
      >
        <option disabled selected>
          Pick your mobile brand
        </option>
        <option selected>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  );
};

export default Select;
