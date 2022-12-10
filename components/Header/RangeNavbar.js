import React from "react";

const RangeNavbar = () => {
  return (
    <section className="font-semibold container mx-auto py-2 md:py-4 my-bg-secondary">
      <ul className="  gap-1 flex-wrap flex-1  flex justify-center items-center">
        <h3>Price :</h3>
        <li className="text-[#0066c0] cursor-pointer  ">
          <a className="after:content-['|'] after:ml-1 after:text-gray-700">
            Tk 0-5000
          </a>
        </li>
        <li className="text-[#0066c0] cursor-pointer  ">
          <a className="after:content-['|'] after:ml-1 after:text-gray-700">
            Tk 5001-10000
          </a>
        </li>
        <li className="text-[#0066c0] cursor-pointer  ">
          <a className="after:content-['|'] after:ml-1 after:text-gray-700">
            Tk 10001-15000
          </a>
        </li>
        <li className="text-[#0066c0] cursor-pointer  ">
          <a className="after:content-['|'] after:ml-1 after:text-gray-700">
            Tk 15001-20000
          </a>
        </li>
        <li className="text-[#0066c0] cursor-pointer  ">
          <a className="after:content-['|'] after:ml-1 after:text-gray-700">
            Tk 20001-25000
          </a>
        </li>
        <li className="text-[#0066c0] cursor-pointer  ">
          <a className="after:content-['|'] after:ml-1 after:text-gray-700">
            Tk 25001-30000
          </a>
        </li>
        <li className="text-[#0066c0] cursor-pointer  ">
          <a className="after:content-['|'] after:ml-1 after:text-gray-700">
            Tk 30001-40000
          </a>
        </li>
        <li className="text-[#0066c0] cursor-pointer ">
          <a className="after:content-[''] after:ml-1 after:text-gray-700">
            More...
          </a>
        </li>
      </ul>
    </section>
  );
};

export default RangeNavbar;
