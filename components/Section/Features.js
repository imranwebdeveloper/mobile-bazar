import React from "react";
import MobileCard from "../Common/MobileCard";
import { mobiles } from "../../data/mobiles";

const Features = ({ heading, num }) => {
  return (
    <div className=" mb-2">
      <h2 className="section_heading px-0">{heading}</h2>
      <div className="card-grid my-bg-primary border rounded md:px-4 px-3 py-6 ">
        {mobiles.slice(...num).map((mobile, i) => {
          return <MobileCard mobile={mobile} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Features;
