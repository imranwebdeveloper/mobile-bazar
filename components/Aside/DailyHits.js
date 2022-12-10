import React from "react";
import TR from "../Common/TR";

const DailyHits = () => {
  return (
    <div className="hidden md:block rounded border px-3   my-bg-primary ">
      <h2 className="section_heading px-0">Daily Interest</h2>
      <table className=" w-full text-left  ">
        <thead className=" ">
          <tr>
            <th className="p-1">Devices</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody className="">
          <TR name="Samsung Galaxy A53 5G" qty="1220" />
          <TR name="Samsung Galaxy A78" qty="1140" bg />
          <TR name="Samsung Galaxy S22 Ultra 5G" qty="1000" />
          <TR name="Samsung Galaxy A78" qty="900" bg />
          <TR name="Xiaomi Redmi Note 11" qty="810" />
          <TR name="Xiaomi Black Shark 5 Pro" qty="700" bg />
          <TR name="Xiaomi 12 Pro" qty="960" />
          <TR name="Apple iPhone 13 Pro Max" qty="860" bg />
          <TR name="Samsung Galaxy A52s 5G" qty="530" />
          <TR name="Samsung Galaxy S22 Ultra 5G" qty="300" bg />
        </tbody>
      </table>
    </div>
  );
};

export default DailyHits;
