import React from "react";

const MobilePrice = () => {
  return (
    <div className="overflow-x-auto border rounded-lg ">
      <table className=" table w-full ">
        <thead>
          <tr>
            <th> Variants </th>
            <th> Official </th>
            <th> Unofficial </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>64/4 GB</td>
            <td>32200 tk</td>
            <td>31200 tk</td>
          </tr>
          <tr>
            <td>128/6 GB</td>
            <td>33200 tk</td>
            <td>32400 tk </td>
          </tr>
          <tr>
            <td>128/8 GB</td>
            <td>38200 tk </td>
            <td>36200 tk </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MobilePrice;
