import React from "react";
import Logo from "../assets/Logo.svg";
import { FiSearch, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between items-center font-semibold h-[90px] md:px-28 sm:px-12 px-6 py-8 ">
      <img src={Logo} alt="Main logo" className="h-24 w-40" />
      <div className="flex items-center">
        <span className="mr-10 cursor-pointer hover:text-blue-700 sm:flex hidden">
          Documentation
        </span>
        <span
          className="mr-10 cursor-pointer hover:text-blue-600 sm:flex hidden"
          onClick={() => document.getElementById("components").scrollIntoView()}
        >
          Components
        </span>
        <FiSearch className="h-6 w-6 hover:text-blue-600 cursor-pointer" />
        <FiMenu className="sm:hidden h-6 w-6 ml-4" />
      </div>
    </div>
  );
};

export default Header;
