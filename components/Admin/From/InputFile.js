import React, { useState } from "react";

const InputFile = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={`flex justify-between items-center`}>
      <label className="min-w-[100px] ">Photos</label>
      <input
        type="file"
        className="file-input file-input-bordered file-input-md w-full "
      />
    </div>
  );
};

export default InputFile;
