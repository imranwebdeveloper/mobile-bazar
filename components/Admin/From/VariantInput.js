import React, { useState } from "react";
import { useDispatch } from "react-redux";

const VariantInput = () => {
  // const [rom, setRom] = useState("");
  // const [ram, setRam] = useState("");
  // const [price, setPrice] = useState("");
  // const dispatch = useDispatch();

  // const addHandler = () => {
  //   const value = { rom, ram, price };
  //   dispatch(arrInputHandler({ key: "variant", value }));
  //   setRom("");
  //   setRam("");
  //   setPrice("");
  // };

  return (
    <div className="flex justify-between items-center gap-2 my-2">
      <label className="min-w-[90px] text-sm ">Variant</label>

      <div className="flex items-center gap-2">
        <input
          name="rom"
          type="text"
          className=" input input-bordered input-md w-full "
          placeholder="ROM"
          // value={rom}
          // onChange={(e) => setRom(e.target.value)}
        />
        <input
          name="ram"
          type="text"
          className="input input-bordered input-md w-full "
          placeholder="RAM"
          // value={ram}
          // onChange={(e) => setRam(e.target.value)}
        />
        <input
          name="price"
          type="text"
          className=" input input-bordered input-md w-full "
          placeholder="Price"
          // value={price}
          // onChange={(e) => setPrice(e.target.value)}
        />
      </div>
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

export default VariantInput;
