import React from "react";
import MobileCard from "../Common/MobileCard";
import { mobiles } from "../../data/mobiles";

const Features = ({ heading, num, isBrand }) => {
  return (
    <div className="my-bg-primary border rounded">
      <h2 className="section_heading px-3">{heading}</h2>
      <div className="card-grid my-bg-primary py-4 ">
        {mobiles.slice(...num).map((mobile, i) => {
          return <MobileCard mobile={mobile} key={i} isBrand={isBrand} />;
        })}
      </div>
    </div>
  );
};

export default Features;
