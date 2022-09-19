import React from "react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center  items-center p-8 border-t border-gray-200">
      <img src={Logo} alt="Main logo" className="h-20 w-40" />
      <div className="text-gray-600">
        © 2022 Infynno Solutions Inc. All rights reserved.
      </div>
      <div className="flex gap-4 font-medium text-gray-600 mt-10">
        <span>Privacy Policy</span>
        <span className="text-gray-300 font-thin">|</span>
        <span>Changelog</span>
      </div>
    </div>
  );
};

export default Footer;
