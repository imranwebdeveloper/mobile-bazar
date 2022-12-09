import Link from "next/link";
import React from "react";
import RangeNavbar from "./RangeNavbar";
import Search from "./Search";
import SubHeder from "./SubHeader";

const Header = ({ children }) => {
  return (
    <div className="drawer container mx-auto ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <header className="navbar border-b justify-between md:px-8 ">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
          </div>
          <div className=" px-2 mx-2 md:m-0 md:text-2xl text-lg font-bold">
            Mobile Sell.com
          </div>
          <Search />
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <Link href="login" className="btn btn-outline btn-sm">
                Login
              </Link>
            </ul>
          </div>
        </header>
        <SubHeder />
        <RangeNavbar />
        {/* <!-- Page content here --> */}
        <main className="px-2">{children}</main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
