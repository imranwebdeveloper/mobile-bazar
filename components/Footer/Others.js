import Image from "next/image";
import React from "react";
import QR from "../../img/footer/QR.png";
import app from "../../img/footer/App.png";
import appGallery from "../../img/footer/AppGallary.png";
import apple from "../../img/footer/apple.jpg";
import play from "../../img/footer/playstore.jpg";

const Others = () => {
  return (
    <div className="">
      <div className="flex gap-4 mb-4">
        <Image src={QR} alt="" className="w-28 rounded-md" />
        <div className="self-end">
          <Image src={app} alt="" className="w-16" />
          <p className="text-[#F85606]">Happy Shopping</p>
          <p>Download App</p>
        </div>
      </div>
      <div className=" flex gap-3 ">
        <a href="">
          <Image src={appGallery} alt="" className="w-36 rounded-md h-10" />
        </a>
        <a href="">
          <Image src={apple} alt="" className="w-36 rounded-md h-10" />
        </a>
        <a href="">
          <Image src={play} alt="" className="w-36 rounded-md h-10" />
        </a>
      </div>
    </div>
  );
};

export default Others;
