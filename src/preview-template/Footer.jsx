import React from "react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center  items-center p-8 border-t border-gray-200">
      <img src={Logo} alt="Main logo" className="h-20 w-40" />
      <div className="text-gray-600">
        © {new Date().getFullYear()} Infynno Solutions LLP. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
