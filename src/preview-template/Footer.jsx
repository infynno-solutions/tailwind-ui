import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 border-t border-gray-200">
      <a href="/">
        <div className="object-cover w-44 h-20 cursor-pointer">
          <img src={Logo} alt="Main logo" />
        </div>
      </a>
      <div className="text-gray-600">
        © {new Date().getFullYear()} Infynno Solutions LLP. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
