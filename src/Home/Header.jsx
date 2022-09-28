import React from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center font-semibold h-[90px] md:px-28 sm:px-12 px-6 py-8 bg-white border-b border-gray-200">
      <a href="/">
        <img src={Logo} alt="Main logo" className="h-24 w-40" />
      </a>
      <div className="flex items-center">
        <span className="mr-10 cursor-pointer hover:text-blue-700 sm:flex hidden">
          <a
            href="https://github.com/infynno-solutions"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </span>
        <span
          className="mr-10 cursor-pointer hover:text-blue-600 sm:flex hidden"
          onClick={() => document.getElementById("components").scrollIntoView()}
        >
          Components
        </span>
      </div>
    </div>
  );
};

export default Header;
