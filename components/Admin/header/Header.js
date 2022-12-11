import Link from "next/link";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Notifications from "./Notifications";

const DashboardHeader = () => {
  return (
    <header className="shadow flex  p-4 items-center bg-white " role="header">
      <div className="flex-1 flex gap-2 items-center">
        <label
          htmlFor="my-drawer-2"
          className=" p-2 cursor-pointer drawer-button rounded-md hover:bg-slate-100 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <h2 className="font-bold text-xl">
          <Link href="/">Mobile || Sell.com</Link>
        </h2>
      </div>
      <div className="flex gap-2 ">
        <Notifications />
        <button className="hover-bg-secondary text-2xl">
          <BsPersonCircle />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
