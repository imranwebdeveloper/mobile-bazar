import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const FacebookBtn = () => {
  return (
    <Link
      href="/api/auth/facebook"
      onClick={(e) => {
        e.preventDefault();
        signIn("facebook", { callbackUrl: "/" });
      }}
      className="inline-block px-6 py-2.5 bg-[#1877f2]  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="w-4 h-4"
      >
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        />
      </svg>
    </Link>
  );
};

export default FacebookBtn;
