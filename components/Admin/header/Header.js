import Link from "next/link";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Notifications from "./Notifications";

const DashboardHeader = () => {
  return (
    <header className="shadow flex  p-4 items-center bg-white " role="header">
      <div className="flex-1">
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
