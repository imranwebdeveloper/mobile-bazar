import React, { useState } from "react";
import {
  FaMobile,
  FaNewspaper,
  FaAccusoft,
  FaYoutube,
  FaUsers,
} from "react-icons/fa";

const TabName = [
  { id: 1, name: "Mobile", icon: <FaMobile /> },
  { id: 2, name: "Videos", icon: <FaYoutube /> },
  { id: 3, name: "Client", icon: <FaUsers /> },
  { id: 4, name: "News", icon: <FaNewspaper /> },
  { id: 5, name: "Mobile Reviews", icon: <FaAccusoft /> },
];

const Tab = () => {
  const [active, setActive] = useState("Mobile");
  //   const dispatch = useDispatch();

  const activeHandler = (item) => {
    setActive(item.name);
    // dispatch(tabHandler(item.id));
  };
  return (
    <section className=" rounded-border md:divide-x-2 border flex flex-wrap  shadow  bg-white overflow-hidden rounded-md">
      {TabName.map((item) => {
        return (
          <button
            key={item.id}
            className={`px-4 flex-1 text-xl gap-4 flex items-center flex-col md:flex-row  justify-center  hover:bg-lime-50 py-8 font-bold ${
              item.name === active && "bg-lime-100"
            }`}
            onClick={() => activeHandler(item)}
          >
            <span className=" text-slate-700 text-2xl">{item.icon}</span>
            <h3>{item.name}</h3>
          </button>
        );
      })}
    </section>
  );
};

export default Tab;
