import React from "react";

import About from "./About";
import Earn from "./Earn";
import Care from "./Care";
import Image from "next/image";
import Others from "./Others";

const Footer = () => {
  return (
    <footer className=" bg-white px-2  lg:px-8 py-10 border-t-2  ">
      <div className=" container mx-auto footer-grid  ">
        <Care />
        <Earn />
        <About />
        <Others />
      </div>
    </footer>
  );
};

export default Footer;
